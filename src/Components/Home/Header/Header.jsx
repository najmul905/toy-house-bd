import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''> 
            {/*  Website logo, Website name, Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture. */}
            <div className="navbar bg-lime-200 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='allToy'>All Toys</Link ></li>
        <li><Link to='myToy'>My Toys</Link ></li>
        <li><Link to='addToy'>Add A Toy</Link ></li>
        <li><Link to='blog'>Blog</Link ></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
        <li><Link to="allToy">All Toys</Link></li>
        <li><Link to="myToy">My Toys</Link></li>
        <li><Link to="addToy">Add A Toy</Link></li>
        <li><Link to="blog">Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='logIn'><button className='bg-red-600 text-white font-bold px-2 rounded'>LogIn</button></Link>
  </div>
</div>
        </div>
    );
};

export default Header;