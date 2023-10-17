// GenreFilter.tsx
import React from 'react';

interface GenreProps {
  genres: { id: number; name: string }[];
  selectedGenres: number[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<number[]>>;
}

const Genre: React.FC<GenreProps> = ({ genres, selectedGenres, setSelectedGenres }) => {

  const handleGenreSelect = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <div className="genre-filter">   
    {genres.map((genre)=>(
        <span
            key={genre.id}
            className={`${selectedGenres.includes(genre.id) ? 'active' : 'inactive'}`}
            onClick={() => handleGenreSelect(genre.id)}
            >
            {genre.name}
        </span>
    ))}
    </div>
  );
};

export default Genre;
