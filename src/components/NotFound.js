const NotFound = () => {
  return (
    <main className='flex'>
      <div className='flex '>
        <h1 className=''>404</h1>
        <p>We couldn't find the page you are looking for.</p>
        <button>Go Back to home</button>
      </div>
      {/* <img src={NotFoundSvg} alt='not found' className='w-96' /> */}
    </main>
  );
};

export default NotFound;
