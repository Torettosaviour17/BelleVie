// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../../assets/BelleView.png";
import { Link } from "react-router-dom";

export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#DDB6C6] bg-opacity-[20%] flex justify-between font-Poppins px-5 lg:px-20 md:p-3 items-center">
      {/* Logo Section */}
      <div>
        <img
          className="scale-50 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-auto"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Links for Desktop */}
      <div>
        <ul className="gap-7 hidden md:flex">
          <li className="hover:text-[##484C7F] text-[18px] font-semibold text-[#484C7F]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[##484C7F] text-[18px] font-semibold text-[#484C7F]">
            <a href="/facilities">Facilities</a>
          </li>
          <li className="hover:text-[##484C7F] text-[18px] font-semibold text-[#484C7F]">
            Rooms & Suites
          </li>
          <li className="hover:text-[#484C7F] text-[18px] font-semibold text-[#484C7F]">
            Contact Us
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        id="menu-btn"
        className="block md:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        <div className=" w-6 h-6 flex flex-col items-center justify-center">
          <span
            className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[3px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "mt-[3px]"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[3px]" : "mt-[3px]"
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 bg-white flex-col md:hidden items-center justify-center space-y-6 font-bold z-40`}
      >
        <Link
          to="/"
          className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
        >
          Home
        </Link>

        <Link
          to="/AboutUs"
          className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
        >
          Facilities
        </Link>
        <Link
          to="/AboutUs"
          className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
        >
          Rooms & Suites
        </Link>
        <Link
          to="/AboutUs"
          className="hover:text-[#B4020A] text-[16px] font-semibold text-[#1034A6]"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
