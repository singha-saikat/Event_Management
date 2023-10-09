import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
    <div className="flex gap-5   ">
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
    </div>
  );

  return (
    <div>
      <div className="navbar bg-[#333231] text-slate-400">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-20 "
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">EventfulWonders</a>
          {/* <div>
            <img className="w-20" src="https://i.ibb.co/SP5TqCx/PNG.png" alt="" />
          </div> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-3 items-center">
          {user ? (
            <>
              <p className="text-slate-200">{user.displayName}</p>

              <div className="avatar online">
                <div className="w-8 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>

              <button onClick={handleSignOut} className="btn rounded-lg">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn rounded-lg ">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
