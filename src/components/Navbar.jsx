import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <li className='m-2'>    
      <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? 'text-blue-500 font-bold underline' : ''
      }
    >
      Home
    </NavLink></li>
    <li className='m-2'>    
      <NavLink
      to="/my-bookings"
      className={({ isActive }) =>
        isActive ? 'text-blue-500 font-bold underline' : ''
      }
    >
      My-Bookings
    </NavLink>
</li>
    <li className='m-2'> 
      <NavLink
      to="/blogs"
      className={({ isActive }) =>
        isActive ? 'text-blue-500 font-bold underline' : ''
      }
    >
      Blogs
    </NavLink></li>
    <li className='m-2'>    
      <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive ? 'text-blue-500 font-bold underline' : ''
      }
    >
      Contact Us
    </NavLink></li>
    </>
    return (
<div className="navbar bg-gray-200 px-20  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex justify-center items-center'>
    <img className='w-2/3' src={logo} alt="logo" />
    <Link to='/' className="btn btn-ghost text-3xl font-bold">Phudu</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary rounded-full">Emergency</a>
  </div>
</div>
    );
};

export default Navbar;