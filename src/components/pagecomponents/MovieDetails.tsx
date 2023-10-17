import React, { useEffect, useState } from 'react';
import { fetchMovieCredits, fetchMovieDetails } from '../../api/api';
import { Link, useParams } from 'react-router-dom';
import AvatarImage from '../../assets/images/Avatar.jpeg'
import Logo from '../commoncomponents/Logo';
import { BsArrowLeftCircle } from "react-icons/bs";

interface MovieDetailsProps { }

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: any }>();
  const [movieDetails, setMovieDetails] = useState<any | null>(null);
  const [movieCreditDetails, setMovieCreditDetails] = useState<any | null>(null);

  useEffect(() => {
    fetchMovieDetails(id)
      .then((data) => setMovieDetails(data))
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });

    fetchMovieCredits(id)
      .then((data) => setMovieCreditDetails(data))
      .catch((error) => {
        console.error("Error fetching movie credits:", error);
      });
  }, [id]);

  return (
    <>
      <section className="main-navbar">
        <div className="main-navbar-first-section">
          <div className="main-navbar-first">
            <Logo />
          </div>
          <div className="main-navbar-second">
            <Link to={`/`}>
              <BsArrowLeftCircle />
            </Link>
          </div>
        </div>
      </section>
      {movieDetails && (
        <div className="movie-details-wrapper">
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={id} />
          </div>
          <div className="movie-basic-details">
            <h2>{movieDetails.title}</h2>
            <div className="movie-description">
              <span>OVERVIEW</span>
              <p>{movieDetails.overview}</p>
            </div>
            <div className='movie-rating'><span>Rating:</span> <p>{movieDetails.vote_average}</p></div>
            <div className="movie-genre">
              <span>GENRES</span>
              {movieDetails.genres.map((genre: any) => (
                <span className='genre-block' key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      {movieCreditDetails && (
        <div className="movie-details-wrapper">
          <div className="movie-cast">
            <span>CAST</span>
            <div className="cast-card-wrapper">
              {movieCreditDetails?.cast.filter((cast: any) => cast.known_for_department === 'Acting').map((cast: any, index: number) => (

                <div className='cast-card' key={index}>
                  <div className='cast-card-img'>
                    <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w185/${cast.profile_path}` : AvatarImage} alt={cast.id} />
                  </div>
                  <p key={index}>{cast.name}</p>
                </div>


              ))}
            </div>
            <div className="cast-card-wrapper">
              {movieCreditDetails?.crew.filter((crew: any) => crew.known_for_department === 'Acting').map((crew: any, index: number) => (
                <div className='cast-card' key={index}>
                  <div className='cast-card-img'>
                    <img src={crew.profile_path ? `https://image.tmdb.org/t/p/w185/${crew.profile_path}` : AvatarImage} alt={crew.id} />
                  </div>
                  <p key={index}>{crew.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      )}
      {movieCreditDetails && (
        <div className="movie-details-wrapper">
          <div className="movie-director">
            <span>DIRECTORS</span>
            <div className="cast-card-wrapper">
              {movieCreditDetails?.cast.filter((cast: any) => cast.known_for_department === 'Directing').map((cast: any, index: number) => (
                <div className='cast-card' key={index}>
                  <div className='cast-card-img'>
                    <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w185/${cast.profile_path}` : AvatarImage} alt={cast.id} />
                  </div>
                  <p key={index}>{cast.name}</p>
                </div>
              ))}
            </div>
            <div className="cast-card-wrapper">
              {movieCreditDetails?.crew.filter((crew: any) => crew.known_for_department === 'Directing').map((crew: any, index: number) => (
                <div className='cast-card' key={index}>
                  <div className='cast-card-img'>
                    <img src={crew.profile_path ? `https://image.tmdb.org/t/p/w185/${crew.profile_path}` : AvatarImage} alt={crew.id} />
                  </div>
                  <p key={index}>{crew.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default MovieDetails;
