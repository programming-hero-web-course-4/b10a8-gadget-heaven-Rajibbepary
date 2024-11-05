import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-xl bg-white/30  px-8 fixed z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-4 shadow">
              <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/'>Home</NavLink>
              <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/statistics'>Statistics</NavLink>
              <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/product'>Product</NavLink>
            <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
             
              
            </ul>
          </div>
          <Link to='/' className=" text-xl font-bold">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-base ">
          <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning border-b-2 border-warning duration-700' : 'hover:text-warning'}`} to='/'>Home</NavLink>
              <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning border-b-2 border-warning duration-700' : 'hover:text-warning'}`} to='/statistics'>Statistics</NavLink>
              <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning border-b-2 border-warning duration-700' : 'hover:text-warning'}`} to='/product'>Product</NavLink>
            <NavLink className={({isActive}) => `font-bold ${isActive ? 'text-warning border-b-2 border-warning duration-700' : 'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
             
               
          </ul>
        </div>
        <div className="navbar-end flex gap-5 items-center">
         <div className='border p-2 border-gray-500 rounded-full w-10 h-10'>
         <i className="fa-solid fa-cart-flatbed  "></i>
         </div>
         <div  className='border border-gray-500 p-2 rounded-full  w-10 h-10 '>
         <i className="fa-regular fa-heart ml-1 "></i>
         </div>
        </div>
      </div>
    );
};

export default Navbar;