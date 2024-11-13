// import React icons (Twitter, Facebook, LinkedIn) from react-icons
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#49468B] p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="flex w-[50%] flex-col items-start space-y-16">
          <div className="space-y-6">
            <h2 className="text-xl font-bold">
              Belle<span className="text-[#AC8DAF]">View</span>
            </h2>
            {/* Social Icons */}
            <div className="flex space-x-4 text-4xl">
              <FaTwitter className="bg-[#AC8DAF] p-2 rounded-full" />
              <FaFacebook className="bg-[#AC8DAF] p-2 rounded-full" />
              <FaLinkedin className="bg-[#AC8DAF] p-2 rounded-full" />
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col w-full space-y-2">
            <h3 className="text-lg pb-2 font-semibold">
              Subscribe to our Newsletter
            </h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="E-mail Address"
                className="p-3 border border-[#AC8DAF] text-black bg-[#484C7F] w-[70%] outline-none"
              />
              <button className="bg-[#AC8DAF] border border-[#AC8DAF] text-white px-6 py-3 font-semibold">
                SEND
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col  text-left space-y-1">
          <h4 className="text-lg font-semibold">About Us</h4>
          <ul className="space-y-1 font-semibold opacity-[50%]">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Locations</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col text-left space-y-1">
          <h4 className="text-lg font-semibold">Suites</h4>
          <ul className="space-y-1 font-semibold opacity-[50%]">
            <li>Golden Suite</li>
            <li>Silver Suite</li>
            <li>King&apos;s Suite</li>
            <li>Royal Suite</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
