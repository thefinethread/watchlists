import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../services/fetchData';
import Spinner from './Spinner';
import NoImage from '../assets/images/no-image.png';
import {
  ADD_TO_WATCHLISTS,
  API_FAILURE,
  REMOVE_FROM_WATCHLISTS,
  rowData,
} from '../constants/constants';
import Message from './Message';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addMovieToWatchLists, removeMovieFromWatchLists, watchLists } =
    useContext(AppContext);

  const { id } = useParams();

  const isInWatchLists = Boolean(
    watchLists.find((item) => item?.imdbID === movie?.imdbID)
  );

  const handleAddToWatchLists = () => {
    const { imdbID, Title, Year, Poster } = movie;
    addMovieToWatchLists({ imdbID, Title, Year, Poster });
  };

  const handleRemoveFromWatchLists = () => {
    removeMovieFromWatchLists(movie.imdbID);
  };

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovie(id);
      setMovie(data);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  if (loading) return <Spinner data-testid='spinner' />;

  if (movie?.Response === API_FAILURE) return <Message msg={movie?.Error} />;

  return (
    <div className='flex-col sm:flex-row flex gap-8 mt-5 mb-4 items-center justify-center'>
      <div className=' w-[270px] m-auto relative'>
        <img
          src={movie?.Poster !== 'N/A' ? movie?.Poster : NoImage}
          alt={movie?.Title}
          className='w-full object-cover mb-2'
        />
        {isInWatchLists ? (
          <button
            onClick={handleRemoveFromWatchLists}
            className='w-full py-3 bg-blue-700  text-white rounded-md'
          >
            {REMOVE_FROM_WATCHLISTS}
          </button>
        ) : (
          <button
            onClick={handleAddToWatchLists}
            className='w-full py-3 bg-zinc-800 text-white rounded-md'
          >
            {ADD_TO_WATCHLISTS}
          </button>
        )}
      </div>

      <div className='flex-1'>
        <h1 className='text-3xl'>
          {movie?.Title} <span className='text-zinc-400'>({movie?.Year})</span>
        </h1>
        <div className='flex gap-2 my-4'>
          {movie?.Genre?.split(', ')?.map((genre) => (
            <span
              key={genre}
              className='bg-primary text-white rounded-md px-2 py-1 text-xs font-medium'
            >
              {genre}
            </span>
          ))}
        </div>
        <div>
          <span className='font-medium'>Rating:</span> {movie?.imdbRating}/10
        </div>
        <div className='my-2'>
          <h4 className='font-medium text-xl'>Overview</h4>
          <p className='text-zinc-500'>{movie?.Plot}</p>
        </div>
        <ul className='max-w-max'>
          {rowData?.map((row) => (
            <MovieInfoItem key={row.id} infoItems={row?.data} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MovieInfoItem = ({ infoItems, movie }) => {
  return (
    <li className='border-b border-zinc-300 py-3 md:flex-row flex-col flex gap-4'>
      {infoItems.map((infoItem) => (
        <div key={infoItem?.key}>
          <span className='font-medium'>{infoItem?.label}: </span>
          <span className='text-zinc-500'>{movie?.[infoItem?.key]}</span>
        </div>
      ))}
    </li>
  );
};

export default Movie;
