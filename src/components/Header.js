import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../constants/contants';

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
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.to} className={activeLink}>
              <li className='hover:underline hover:underline-offset-2'>
                {item.label}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
