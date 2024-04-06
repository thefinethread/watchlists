import MovieCard from './MovieCard';

const MoviesList = ({ movies, isFromWatchLists }) => {
  return (
    <div className='grid gap-8 grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 '>
      {movies?.map((movie) => (
        <MovieCard
          key={movie?.imdbID}
          {...movie}
          isFromWatchLists={isFromWatchLists}
        />
      ))}
    </div>
  );
};

export default MoviesList;
