import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const movie = {
  Title: 'Kureyon Shinchan: Action Kamen vs Haigure Maô',
  Year: '1993',
  Rated: 'N/A',
  Released: '24 Jul 1993',
  Runtime: '93 min',
  Genre: 'Animation, Action, Adventure',
  Director: 'Mitsuru Hongô',
  Writer: 'Yoshito Usui, Ryô Motohira',
  Actors: 'Akiko Yajima, Miki Narahashi, Keiji Fujiwara',
  Plot: "Action Kamen comes to Shinchan's world seeking help from Shinchan to defeat the Haigure Demon. Then the adventure of Shinchan and his family begins.",
  Language: 'Hindi, Japanese',
  Country: 'Japan',
  Awards: 'N/A',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjZjZTA2NDAtOTYxMS00ZDIyLTliMjAtYzhhZGVlMjc0NmY5XkEyXkFqcGdeQXVyNjY4NjQwNTA@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '6.6/10',
    },
  ],
  Metascore: 'N/A',
  imdbRating: '6.6',
  imdbVotes: '623',
  imdbID: 'tt0409848',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

const Movie = () => {
  const { addMovieToWatchLists, removeMovieFromWatchLists } =
    useContext(AppContext);

  const rowData = [
    {
      id: 1,
      data: [
        { label: 'Release Date', key: 'Released' },
        { label: 'Runtime', key: 'Runtime' },
      ],
    },
    {
      id: 2,
      data: [
        { label: 'Director', key: 'Director' },
        { label: 'Writer', key: 'Writer' },
      ],
    },
    { id: 3, data: [{ label: 'Casts', key: 'Actors' }] },
    { id: 4, data: [{ label: 'Languages', key: 'Language' }] },
  ];

  const { watchLists } = useContext(AppContext);

  const isInWatchLists = Boolean(
    watchLists.find((item) => item.imdbID === movie.imdbID)
  );

  const handleAddToWatchLists = (e) => {
    e.preventDefault();
    const { imdbID, Title, Year, Poster } = movie;
    addMovieToWatchLists({ imdbID, Title, Year, Poster });
  };

  const handleRemoveFromWatchLists = (e) => {
    e.preventDefault();
    removeMovieFromWatchLists(movie.imdbID);
  };

  return (
    <div className='flex-col sm:flex-row flex gap-8 mt-5 mb-4 items-center justify-center'>
      <div className=' w-[270px] m-auto relative'>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className='w-full object-cover mb-2'
        />
        {isInWatchLists ? (
          <button
            onClick={handleRemoveFromWatchLists}
            className='w-full py-3 bg-blue-700  text-white rounded-md'
          >
            Remove from Watchlists
          </button>
        ) : (
          <button
            onClick={handleAddToWatchLists}
            className='w-full py-3 bg-zinc-800 text-white rounded-md'
          >
            Add to Watchlists
          </button>
        )}
      </div>

      <div className='flex-1'>
        <h1 className='text-3xl'>
          {movie.Title} <span className='text-zinc-400'>({movie.Year})</span>
        </h1>
        <div className='flex gap-2 my-4'>
          {movie.Genre.split(', ').map((genre) => (
            <span
              key={genre}
              className='bg-primary text-white rounded-md px-2 py-1 text-xs font-medium'
            >
              {genre}
            </span>
          ))}
        </div>
        <div>
          <span className='font-medium'>Rating:</span> {movie.imdbRating}/10
        </div>
        <div className='my-2'>
          <h4 className='font-medium text-xl'>Overview</h4>
          <p className='text-zinc-500'>{movie.Plot}</p>
        </div>
        <ul className='max-w-max'>
          {rowData.map((row) => (
            <MovieInfoItem key={row.id} infoItems={row.data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MovieInfoItem = ({ infoItems }) => {
  return (
    <li className='border-b border-zinc-300 py-3 md:flex-row flex-col flex gap-4'>
      {infoItems.map((infoItem) => (
        <div key={infoItem.key}>
          <span className='font-medium'>{infoItem.label}: </span>
          <span className='text-zinc-500'>{movie[infoItem.key]}</span>
        </div>
      ))}
    </li>
  );
};

export default Movie;
