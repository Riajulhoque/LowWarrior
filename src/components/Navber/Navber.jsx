import React from 'react';
import { Link } from 'react-router';

const Navber = () => {
   const links =<>
   <Link to='/'><li><a>Home</a></li></Link>
   <Link to='/MyBookings'><li><a>My Bookings</a></li></Link>
   <Link to='/Blogs'><li><a>Blogs</a></li></Link>
   <Link to='/ContactUs'><li><a>Contact Us</a></li></Link>
   </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
    <a className="btn btn-ghost text-xl"><img src="../assets/logo-footer.png" alt="" /> <h1>Law.Warrior</h1></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-[#50d71e] hover:bg-green-500 hover:text-[#ffffff] rounded-full pl-10 pr-10">Contuct Us</a>
    
  </div>
</div>
  );
};

export default Navber;