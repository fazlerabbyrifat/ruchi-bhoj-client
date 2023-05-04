import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState(false);

  const handleUserName = () => {
    setUserName(!userName);
  };

  const handleLogout = () =>{
    logout()
    .then(result => {})
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="navbar bg-gray-200 md:p-6 font-sans">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-2xl font-bold"
          >
            <li>
              <NavLink className="m-2 p-2 active:bg-pink-400">Home</NavLink>
            </li>
            <li>
              <NavLink className="m-2 p-2 active:bg-pink-400">About</NavLink>
            </li>
            <li>
              <NavLink className="m-2 p-2 active:bg-pink-400">Blog</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-4xl font-extrabold text-violet-400">
          RuchiBhoj
        </a>
      </div>
      <div className="navbar-center hidden lg:flex font-sans">
        <ul className=" menu-horizontal px-1 text-2xl font-bold">
          <li>
            <NavLink className="m-2 p-2 active:bg-pink-400">Home</NavLink>
          </li>
          <li>
            <NavLink className="m-2 p-2 active:bg-pink-400">About</NavLink>
          </li>
          <li>
            <NavLink className="m-2 p-2 active:bg-pink-400">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <img
            className="w-10 h-10 rounded-full"
            onMouseEnter={() => handleUserName(true)}
            src={user.photoURL}
            alt=""
          />
        )}
        {userName && <span className="text-info ml-2">{user?.displayName}</span>}
        {user ? (
          <button onClick={handleLogout} className=" md:mx-4 px-3 py-2 bg-cyan-500 hover:bg-cyan-700 text-white font-medium rounded">
            Logout
          </button>
        ) : (
          <Link to='/login'>
            <button className=" md:mx-4 px-3 py-2 bg-cyan-500 hover:bg-cyan-700 text-white font-medium rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
