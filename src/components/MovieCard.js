import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import AppContext from '../context/AppContext';
import NoImage from '../assets/images/no-image.png';
import {
  ADD_TO_WATCHLISTS,
  REMOVE_FROM_WATCHLISTS,
} from '../constants/constants';

const MovieCard = ({
  imdbID,
  Title,
  Year,
  Poster,
  isFromWatchLists = false,
}) => {
  const { addMovieToWatchLists, removeMovieFromWatchLists } =
    useContext(AppContext);

  const handleAddToWatchLists = (e) => {
    e.preventDefault();
    addMovieToWatchLists({ imdbID, Title, Year, Poster });
  };

  const handleRemoveFromWatchLists = (e) => {
    e.preventDefault();
    removeMovieFromWatchLists(imdbID);
  };
  return (
    <Link to={`/movies/${imdbID}`} data-testid='movie-card'>
      <div className='border relative border-solid border-zinc-300 rounded-md w-36 sm:w-48 h-full hover:bg-zinc-100 hover:scale-105 hover:shadow-xl transition-all'>
        <div className='relative'>
          {isFromWatchLists ? (
            <button
              title={REMOVE_FROM_WATCHLISTS}
              onClick={handleRemoveFromWatchLists}
              className='absolute z-10 bg-zinc-900 rounded-full h-10 w-10 -top-5 border-[3px] border-zinc-50  right-1 text-white text-3xl justify-center items-center flex'
            >
              <RiSubtractFill size='1.3rem' />
            </button>
          ) : (
            <button
              title={ADD_TO_WATCHLISTS}
              onClick={handleAddToWatchLists}
              className='absolute z-10 bg-zinc-900 rounded-full h-10 w-10 -top-5 border-[3px] border-zinc-50  right-1 text-white text-3xl justify-center items-center flex'
            >
              <RiAddFill size='1.3rem' />
            </button>
          )}

          <img
            src={Poster === 'N/A' ? NoImage : Poster}
            alt={Title}
            className='object-cover rounded-md brightness-90 hover:brightness-100'
          />
        </div>

        <div className='p-2'>
          <h3 className='font-medium leading-tight my-2'>{Title}</h3>
          <p className='text-zinc-500'>{Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
