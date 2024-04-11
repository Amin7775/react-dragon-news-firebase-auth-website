import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import defaultImg from "./../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  }

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent container mx-auto py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            id="sidebar"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F] text-lg"
          >
            {links}
          </ul>
        </div>
        <a className=""></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 text-[#706F6F] text-lg font-medium"
          id="sidebar"
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
      {user &&
            <p> {user.email} </p>
            }
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            
            <img alt="Tailwind CSS Navbar component" src={defaultImg} />
          </div>
        </div>
        {
          user ? <Link onClick={handleLogout} >
          <p className="btn bg-[#403F3F] hover:bg-[#403F3F]/[.85] text-white px-11 rounded-none ">
            Logout
          </p>
        </Link> : 
        <Link to={"/login"}>
          <p className="btn bg-[#403F3F] hover:bg-[#403F3F]/[.85] text-white px-12 rounded-none ">
            Login
          </p>
        </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
