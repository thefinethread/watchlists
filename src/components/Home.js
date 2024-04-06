import { useContext, useState } from 'react';
import MoviesList from './MoviesList';
import Shimmer from './Shimmer';
import Pagination from './Pagination';
import { fetchMovies } from '../services/fetchData';
import AppContext from '../context/AppContext';
import { RiAddCircleFill } from 'react-icons/ri';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const {
    addSearchResults,
    searchResults,
    setTotalResults,
    totalResults,
    currentPage,
    setCurrentPage,
    query,
    setQuery,
  } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    setLoading(true);

    const { Search, totalResults } = await fetchMovies(query);

    if (Search) {
      addSearchResults(Search);
      setTotalResults(totalResults);
    }
    setLoading(false);
  };

  const handlePaginate = async (page) => {
    setLoading(true);
    setCurrentPage(page);

    const { Search } = await fetchMovies(query, page);

    if (Search) {
      addSearchResults(Search);
    }
    setLoading(false);
  };

  return (
    <main className=' w-full py-2 pb-10'>
      <section className='border-2 border-orange-700 rounded-md p-4 max-w-2xl m-auto'>
        <h1 className='text-3xl mb-4'>
          Welcome to <span className='text-primary'>Watchlists</span>
        </h1>
        <p>Browse movies, add them to watchlists and view your watchlists.</p>
        <p>
          Just click the <RiAddCircleFill className=' inline-block' /> to add a
          movie and click on the poster to view movie details.
        </p>
      </section>

      <form
        onSubmit={handleSearch}
        className='sm:w-2/3 max-w-2xl  m-auto flex flex-col gap-2 sm:flex-row mb-20 my-14'
      >
        <input
          value={query}
          type='text'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='search movies...'
          className='w-full  h-10 border-2 border-solid border-zinc-400 outline-none rounded-md px-2'
        />
        <button
          type='submit'
          className='px-5  h-10 bg-primary rounded-md text-white hover:scale-95 transition-transform'
        >
          Search
        </button>
      </form>

      <section className='w-full flex justify-center'>
        {loading ? <Shimmer /> : <MoviesList movies={searchResults} />}
      </section>

      <Pagination
        totalResults={totalResults}
        currentPage={currentPage}
        handlePaginate={handlePaginate}
      />
    </main>
  );
};

export default Home;
