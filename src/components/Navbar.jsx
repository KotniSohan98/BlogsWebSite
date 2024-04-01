import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className=" flex items-center justify-between py-4 border-b">
      <Link
        to="/"
        className="text-purple-800 uppercase font-bold px-2 lg:px-0 "
      >
        LOGO
      </Link>
      <nav>
        <ul className="inline-flex items-center">
          <li className="px-2 md:px-4">
            <Link
              to="/"
              className=" text-purple-600 font-semibold hover:text-purple-500"
            >
              Home
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link className=" text-gray-500 font-semibold hover:text-purple-500">
              About
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link className=" text-gray-500 font-semibold hover:text-purple-500">
              Press
            </Link>
          </li>
          <li className="px-2 md:px-4">
            <Link className=" text-gray-500 font-semibold hover:text-purple-500">
              Contact
            </Link>
          </li>
          <li className="px-2 md:px-4 hidden md:block">
            <Link className=" text-gray-500 font-semibold hover:text-purple-500">
              Login
            </Link>
          </li>
          <li className="px-2 md:px-4 hidden md:block">
            <Link className=" text-gray-500 font-semibold hover:text-purple-500">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
