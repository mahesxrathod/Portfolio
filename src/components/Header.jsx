import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black flex justify-between items-center px-[40px] py-[20px] text-wrap rounded-b-4xl">
      <div className="logo">
        <img className="w-12" src="images/logo.png" alt="" />
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden md:block" id="navbar-default">
        <ul className="text-center lg:text-2xl md:text-xl font-sans font-medium text-white flex gap-x-10">
          <Link href="#" to="/home">
            home
          </Link>

          <Link href="#" to="/about">
            about
          </Link>

          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="#">team</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
