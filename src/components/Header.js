import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) =>
  isActive ? 'underline underline-offset-2 text-orange-600' : '';

const Header = () => {
  return (
    <header className='flex border-b-2 w-full justify-between p-4 h-20 items-center'>
      <Link to='/'>
        <h1 className=' text-3xl font-bold text-orange-600'>Watchlists</h1>
      </Link>
      <nav className='flex items-center gap-4'>
        <ul className='flex gap-4'>
          <NavLink to='/' className={activeLink}>
            <li className='hover:underline hover:underline-offset-2'>Home</li>
          </NavLink>
          <NavLink to='/my-lists' className={activeLink}>
            <li className='hover:underline hover:underline-offset-2'>
              My Lists{' '}
            </li>
          </NavLink>
        </ul>
        <button>Guest</button>
      </nav>
    </header>
  );
};

export default Header;
