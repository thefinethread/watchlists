const Shimmer = () => {
  return (
    <div
      data-testid='shimmer'
      className='grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '
    >
      {[1, 2, 3, 4, 5].map((el, index) => (
        <div
          key={index}
          className='border animate-pulse relative h-60 border-solid border-zinc-300 rounded-md w-36 sm:w-48 '
        >
          <div className='relative bg-zinc-200 h-1/2'>
            <div className='rounded-full h-10 w-10 absolute right-1  top-1 bg-white'></div>
          </div>

          <div className='p-2'>
            <div className='h-3 w-full bg-zinc-200 rounded-full my-2'></div>
            <div className='h-3 w-2/3 bg-zinc-200 rounded-full mb-6'></div>
            <div className='h-2 w-1/3 bg-zinc-200 rounded-full'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
