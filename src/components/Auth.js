const Auth = () => {
  return (
    <main className='flex justify-center items-center h-full flex-col gap-8'>
      <div className=' text-center text-xl '>
        <p>New to Watchlists? Enter your email to create your account.</p>
        <p>Returning user? Simply log in with the same email.</p>
      </div>

      <form className='w-3/4 max-w-lg flex flex-col gap-2 md:flex-row'>
        <input
          type='email'
          placeholder='abc@gmail.com'
          className='w-full  h-10 border-2 border-solid border-gray-300 outline-none rounded-md px-2'
        />
        <button
          type='submit'
          className='px-5  h-10  bg-orange-500 rounded-md text-white hover:scale-95 transition-transform'
        >
          Continue
        </button>
      </form>
    </main>
  );
};

export default Auth;
