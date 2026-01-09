import React from "react";
import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          MyLogo
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 text-lg">
            <li >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? "text-red-700" : "tex-gray-700"} hover:text-blue-400  hover:text-2xl `}>
                Home
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? "text-red-700" : "tex-gray-700"} hover:text-blue-400 hover:text-2xl`}>
                About
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? "text-red-700" : "tex-gray-700"} hover:text-blue-400 hover:text-2xl`}>
                Contact
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `cursor-pointer ${isActive ? "text-red-700" : "tex-gray-700"} hover:text-blue-400 hover:text-2xl`}>
                Github
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
