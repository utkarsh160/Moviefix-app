import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/pagecomponents/Navbar';
import Genre from '../components/pagecomponents/Genre';
import { fetchGenres, fetchMovies, searchMovies } from '../api/api';
import MovieCard from '../components/pagecomponents/MovieCard';
import { debounce } from '../utils/services';

interface MoviefixProps {
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const Moviefix: React.FC<MoviefixProps> = ({ }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [year, setYear] = useState<number>(2012);
  const firstMovieRef = useRef<HTMLDivElement | null>(null);
  const lastMovieRef = useRef<HTMLDivElement | null>(null);
  const movieWrapperRef = useRef<HTMLDivElement | null>(null);
  const prevScrollY = useRef<number>(0);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    fetchMovies(year, selectedGenres).then((data) => {
      setMovies(data.results);
    });

    fetchGenres().then((data) => {
      setGenres(data.genres);
    });
  }, [selectedGenres]);

  const handleScroll = debounce(() => {
    // Determine the scroll direction (up or down)
    const isScrollingUp = window.scrollY < prevScrollY.current;
    const scrolledToTop = window.scrollY === 0;
    if (isScrollingUp && year > 2011) {
      if (scrolledToTop) {
        // Scroll up to the top: Load movies from the previous year
        setYear(year - 1);
      } else {
        // The first movie card is fully visible, load more movies for the previous year
        setYear(year - 1);
      }
    } else if (!isScrollingUp && year < new Date().getFullYear()) {
      // Scroll down: Load movies from the next year
      setYear(year + 1);
    }

    prevScrollY.current = window.scrollY; // Update the previous scroll position
  }, 200); // Adjust the debounce delay as needed

  useEffect(() => {
    const lastObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load more movies when the last movie card is visible
            fetchMovies(year, selectedGenres).then((data) => {
              setMovies((prevMovies) => [...prevMovies, ...data.results]);
            });
          }
        });
      },
      { threshold: 1 }
    );

    const firstObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load more movies when the first movie card is visible
            fetchMovies(year - 1, selectedGenres).then((data) => {
              setMovies((prevMovies) => [...data.results, ...prevMovies]);
            });
          }
        });
      },
      { threshold: 1 }
    );

    if (lastMovieRef.current) {
      lastObserver.observe(lastMovieRef.current);
    }
    if (firstMovieRef.current) {
      firstObserver.observe(firstMovieRef.current);
    }

    // Clean up the observers when unmounting
    return () => {
      if (lastMovieRef.current) {
        lastObserver.unobserve(lastMovieRef.current);
      }
      if (firstMovieRef.current) {
        firstObserver.unobserve(firstMovieRef.current);
      }
    };
  }, [year]);

  const groupMoviesByYear = (movies: Movie[]) => {
    const groupedMovies: { [year: number]: Movie[] } = {};

    for (const movie of movies) {
      const releaseYear = new Date(movie.release_date).getFullYear();

      if (!groupedMovies[releaseYear]) {
        groupedMovies[releaseYear] = [];
      }

      groupedMovies[releaseYear].push(movie);
    }

    return groupedMovies;
  };

  useEffect(() => {
    if (movieWrapperRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === movieWrapperRef.current) {
            // When the movie wrapper is fully visible, trigger the load more movies function
            handleScroll();
          }
        });
      });

      observer.observe(movieWrapperRef.current);
    }
  }, [handleScroll]);

  const groupedMovies = groupMoviesByYear(movies);

  // Callback function to handle search
  const handleSearch = (query: string) => {
    searchMovies(query, selectedGenres).then((data) => {
      setSearchResults(data.results);
    });
  };

  return (
    <>
      <section className="moviefix-main">
        <Navbar handleSearch={handleSearch}>
          <Genre genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
        </Navbar>
        <div className="movie-wrapper" ref={movieWrapperRef}>

          {searchResults.length > 0 ? (
            <div className="movie-group">
              <h2 className="year-heading">Search Results</h2>
              <div className="movie-list">
                {searchResults.map((movie: Movie, index: number) => (
                  <MovieCard key={index} movie={movie} />
                ))}
              </div>
            </div>
          ) : (Object.keys(groupedMovies).map((year, index) => (
            <div key={index} className="movie-group">
              <h2 className="year-heading">{year}</h2>
              <div className="movie-list">
                {groupedMovies[parseInt(year)].map((movie: Movie, index: number) => {
                  if (index === 0) {
                    return (
                      <div key={index} ref={firstMovieRef}>
                        <MovieCard movie={movie} />
                      </div>
                    );
                  } else if (index === groupedMovies[parseInt(year)].length - 1) {
                    return (
                      <div key={index} ref={lastMovieRef}>
                        <MovieCard movie={movie} />
                      </div>
                    );
                  } else {
                    return <MovieCard key={index} movie={movie} />;
                  }
                })}
              </div>
            </div>
          )))}
        </div>
      </section>
    </>
  );
};

export default Moviefix;
