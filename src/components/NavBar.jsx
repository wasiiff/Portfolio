import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, to: "home" },
    { id: 2, to: "about" },
    { id: 3, to: "portfolio" },
    { id: 4, to: "skills" },
    { id: 5, to: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-5xl font-bold ml-2">Wasif Bin Nasir</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, to }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:border-b-2 border-white"
          >
            <Link
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-70}
            >
              {to}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
        aria-label={nav ? "Close menu" : "Open menu"}
      >
        {nav ? <FiX size={30} /> : <FiAlignJustify size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:invisible`}
      >
        <ul>
          {links.map(({ id, to }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300"
            >
              <Link
                onClick={() => setNav(false)}
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-70}
              >
                {to}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
