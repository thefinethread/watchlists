import React, { useContext } from 'react';
import MoviesList from './MoviesList';
import AppContext from '../context/AppContext';

const MyWatchList = () => {
  const { watchLists, loggedInUser } = useContext(AppContext);

  return (
    <main className=' w-full pb-10'>
      <h1 className='text-center font-semibold text-5xl my-8'>My WatchLists</h1>

      {loggedInUser ? (
        watchLists?.length ? (
          <section className='w-full flex justify-center'>
            <MoviesList movies={watchLists} isFromWatchLists={true} />
          </section>
        ) : (
          <>
            <Message msg='No watchlists added yet.' />
            <Message msg='Start adding your favorite movies to create your watchlists!' />
          </>
        )
      ) : (
        <Message msg='Please login to see your wishlists!' />
      )}
    </main>
  );
};

const Message = ({ msg }) => {
  return <p className='text-center text-2xl text-zinc-400'>{msg}</p>;
};

export default MyWatchList;
