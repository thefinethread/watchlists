import React from 'react';
import { Link } from 'react-router-dom';
import { RiAddFill, RiBookmark3Line } from 'react-icons/ri';

const MovieCard = ({ imdbID, Title, Year, Poster }) => {
  return (
    <Link to={`/movies/${imdbID}`}>
      <div className='border relative border-solid border-zinc-300 rounded-md w-36 sm:w-48 h-full hover:bg-zinc-100 hover:scale-105 transition-all'>
        <div className='relative'>
          <button className='absolute z-10 bg-zinc-900 rounded-full h-10 w-10 top-1 border-[1.5px] border-zinc-50  right-1 text-white text-3xl justify-center items-center flex'>
            <RiAddFill size='1.3rem' />
          </button>
          <img
            src={Poster}
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
