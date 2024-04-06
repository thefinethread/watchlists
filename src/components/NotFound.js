import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='relative flex h-screen w-screen justify-center items-center flex-col gap-4'>
      <Link to='/'>
        <h1 className=' text-3xl absolute left-2 top-2 font-bold text-orange-600'>
          Watchlists
        </h1>
      </Link>
      <h1 className='text-8xl text-zinc-500'>404</h1>
      <p className='text-lg text-zinc-700'>
        We couldn't find the page you are looking for.
      </p>
      <Link to='/'>
        <button className='px-6 py-2 bg-primary rounded-md text-white'>
          Go Back to home
        </button>
      </Link>
    </main>
  );
};

export default NotFound;
