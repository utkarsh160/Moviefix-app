import React, { useEffect, useState } from 'react';
import { fetchMovieCredits, fetchMovieDetails } from '../../api/api';
import { Link } from 'react-router-dom';
import BlankPoster from '../../assets/images/BlankPoster.png'

interface MovieCardProps {
  movie: {
    id:number;
    title: string;
    poster_path: string;
    vote_average:number;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>    
        <Link to={`/movie-details/${movie.id}`}> {/* Set the route with movie.id */}
          <div className="movie-card">
            <img
              className="movie-image"
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : BlankPoster}
              alt={movie.title}
            />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>
                <span>Rating :</span> {movie.vote_average}
              </p>
            </div>
          </div>
        </Link>
    </>
  );
};

export default MovieCard;
