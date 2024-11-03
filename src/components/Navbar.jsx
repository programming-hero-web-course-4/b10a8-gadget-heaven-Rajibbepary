import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-8 fixed z-50">
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
              <Link to='/'>Home</Link>
              <Link to='/statistics'>Statistics</Link>
            <Link to='/dashboard'>Dashboard</Link>
             
              
            </ul>
          </div>
          <Link to='/' className=" text-xl font-bold">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-base">
          <Link to='/'>Home</Link>
          <Link to='/statistics'>Statistics</Link>
          <Link to='/dashboard'>Dashboard</Link>
             
               
          </ul>
        </div>
        <div className="navbar-end flex gap-6">
         <div className='border p-2 rounded-full'>
         <i className="fa-solid fa-cart-flatbed"></i>
         </div>
         <div  className='border p-2 rounded-full'>
         <i className="fa-regular fa-heart"></i>
         </div>
        </div>
      </div>
    );
};

export default Navbar;