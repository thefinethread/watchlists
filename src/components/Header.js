import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const activeLink = ({ isActive }) =>
  isActive ? 'underline underline-offset-2 text-orange-600' : '';

const Header = () => {
  const { loggedInUser, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (loggedInUser) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className='flex left-0 border-b-2 z-20 bg-white justify-between p-4 h-20 items-center fixed top-0 w-full'>
      <Link to='/'>
        <h1 className=' text-3xl font-bold text-orange-600'>Watchlists</h1>
      </Link>
      <nav className='flex items-center gap-4'>
        <NavLink to={'/my-lists'} data-testid='mylist' className={activeLink}>
          <div className='hover:underline hover:underline-offset-2'>
            My Lists
          </div>
        </NavLink>

        <button
          onClick={handleAuth}
          className='bg-zinc-800 text-white rounded-md py-2 px-5'
        >
          {loggedInUser ? 'Logout' : 'Login'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
