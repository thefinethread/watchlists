const Spinner = () => {
  return (
    <div
      data-testid='spinner'
      className='h-full w-full  flex justify-center items-center'
    >
      <div className='border-4 h-14 w-14 rounded-full border-zinc-400 border-solid border-b-transparent  animate-spin'></div>
    </div>
  );
};

export default Spinner;
