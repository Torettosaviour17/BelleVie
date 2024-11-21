// import React from "react";
import aboutimg from "../../../public/assets/aboutimg.png";

export default function aboutus() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#DDB6C6] bg-opacity-[20%] md:pl-0 p-7 gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full h-auto" src={aboutimg} alt="Hero" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:pr-28 ">
          <h1 className="font-bold text-[42px] sm:text-[52px] lg:text-[100px]  text-transparent bg-clip-text bg-gradient-to-r from-[#484C7F] to-[#DDB6C6]">
            About Us
            <hr className="bg-[#484C7F] inline-block rounded-[20px] w-[74px] h-[10px]" />
          </h1>
          <p className="sm:text-[16px] text-[14px] md:text-[18px]  font-semibold text-[#484C7FBD]">
            BelleView is the most preferred hotel in Africa and it is all about
            the right mix! Located in the heart of Nigeria and shielded from the
            hustle and bustle of theAbuja metropolis, we offer our corporate
            clients and walk in guests a perfect blend of relaxation,
            activities, and African tradition delicately infused to meet the
            highest international standards.
          </p>
          {/* Button */}
          <button className=" bg-[#484C7F] text-white rounded-[10px] w-[40%] inline py-2 sm:text-[14px] text-[12px] md:text-[16px] font-semibold transition-all duration-300">
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
