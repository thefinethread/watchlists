import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../constants/contants';
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
    <header className='flex border-b-2 w-full justify-between p-4 h-20 items-center'>
      <Link to='/'>
        <h1 className=' text-3xl font-bold text-orange-600'>Watchlists</h1>
      </Link>
      <nav className='flex items-center gap-4'>
        <ul className='flex gap-4'>
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.to} className={activeLink}>
              <li className='hover:underline hover:underline-offset-2'>
                {item.label}
              </li>
            </NavLink>
          ))}
        </ul>
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
