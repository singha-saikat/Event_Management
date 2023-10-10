import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import  { useState } from "react"; 

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showUsername, setShowUsername] = useState(false);
  console.log(user);
  const handleSignOut = () => {
    logout()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLink = (
    <div className="flex flex-col gap-5 lg:flex-row  ">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="hover:text-red-500">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="hover:text-red-500">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className="hover:text-red-500">
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/review" className="hover:text-red-500">
          Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="hover:text-red-500">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-red-500">
         Contact Us
        </NavLink>
      </li>
    </div>
  );
  const toggleUsername = () => {
    setShowUsername(!showUsername);
  };

  return (
    <div>
      <div className="navbar bg-[#333231] text-slate-400">
      <div className="navbar-start">
        <div className="dropdown ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-slate-400  rounded-box w-52 text-slate-950"
          >
            {/* Place "EventfulWonders" at the top of the dropdown list */}
            <a className="btn btn-ghost normal-case text-xl md:hidden mb-2">EventfulWonders</a>
            
            {navLink}
          </ul>
        </div>
        {/* Hide "EventfulWonders" on small screens and show on larger ones */}
        <a className="btn btn-ghost normal-case text-xl hidden md:inline">EventfulWonders</a>
      </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-3 items-center">
        {user ? (
          <>
            {/* Conditionally render the username based on the state and screen size */}
            {showUsername && (
              <p className="text-slate-200 lg:hidden">{user.displayName}</p>
            )}

            <div className="avatar online">
              {/* Add onClick handler to the profile picture */}
              <div className="w-8 rounded-full" onClick={toggleUsername}>
                <img src={user.photoURL} />
              </div>
            </div>

              <button onClick={handleSignOut} className="btn rounded-lg">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn  md:rounded-lg ">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
