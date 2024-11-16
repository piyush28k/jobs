import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import CreateAcc from "./CreateAcc";
import { useAuth } from "../context/AuthProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [authUser] = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleForm = () => {
    setHasAccount(!hasAccount); // Toggle between login and create account form
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Open or close modal
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        sticky ? "shadow-lg bg-[rgb(33,38,35,0.8)] lg:text-white backdrop-blur-md" : "bg-white"
      } sticky w-screen top-0 z-50 p-4 py-5 transition-all duration-300 ease-in-out`}
    >
      <nav className="flex items-center justify-between">
        <div className="font-bold lg:pl-10">
          <h1 className="text-xl -mb-2">polos</h1>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button className="block lg:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:gap-7 lg:top-0 lg:pr-10 fixed top-16 right-0 h-72 lg:h-full w-3/4 bg-white p-10 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:relative lg:transform-none lg:translate-x-0 lg:w-auto lg:bg-transparent lg:p-0`}
        >
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive ? "text-blue-600 text-lg font-semibold" : ""
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="Explore"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive ? "text-blue-600 text-lg font-semibold" : ""
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="Blog"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive ? "text-blue-600 text-lg font-semibold" : ""
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="Profile"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive ? "text-blue-600 text-lg font-semibold" : ""
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Profile
          </NavLink>
          {authUser ? (
            <Logout />
          ) : (
            <button onClick={toggleModal} className="h-10 w-20 rounded-md bg-[#242426] text-white">
              {hasAccount ? "Login" : "Sign Up"}
            </button>
          )}
        </div>
      </nav>

      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <button
              onClick={toggleModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              aria-label="Close Modal"
            >
              ✕
            </button>
            <div>
              {hasAccount ? (
                <Login toggleForm={toggleForm} />
              ) : (
                <CreateAcc toggleForm={toggleForm} />
              )}
            </div>
          </div>
        </dialog>
      )}
    </header>
  );
};

export default Navigation;
