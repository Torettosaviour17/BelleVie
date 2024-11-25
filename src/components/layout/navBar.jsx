// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../../public/assets/BelleView.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#DDB6C6] bg-opacity-[20%] flex justify-between font-Poppins px-5 lg:px-20 md:p-3 items-center">
      {/* Logo Section */}
      <div>
        <img
          className="scale-75 sm:scale-90 md:scale-100 lg:scale-125 xl:scale-auto"
          src="/assets/BelleView.png"
          alt="Logo"
        />
      </div>

      {/* Links for Desktop */}
      <div>
        <ul className="gap-7 hidden md:flex">
          {["/", "/facilities", "/RoomsSuites", "/contactUs"].map(
            (path, index) => {
              const names = [
                "Home",
                "Facilities",
                "Rooms & Suites",
                "Contact Us",
              ];
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-[18px] font-semibold ${
                        isActive
                          ? "text-[#484C7F] decoration-wavy"
                          : "text-[#DDB6C6]"
                      } hover:text-[#1034A6]`
                    }
                  >
                    {names[index]}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        id="menu-btn"
        className="block md:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        <div className="w-6 h-6 flex flex-col items-center justify-center">
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
        {["/", "/facilities", "/RoomsSuites", "/contactUs"].map(
          (path, index) => {
            const names = [
              "Home",
              "Facilities",
              "Rooms & Suites",
              "Contact Us",
            ];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `text-[16px] font-semibold ${
                    isActive
                      ? "text-[#B4020A] decoration-wavy"
                      : "text-[#1034A6]"
                  } hover:text-[#484C7F]`
                }
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {names[index]}
              </NavLink>
            );
          }
        )}
      </div>
    </nav>
  );
}
