// eslint-disable-next-line no-unused-vars
import React from "react";
// import component from "../../../public/assets/Componentimg.png";
// import comforableimg from "../../../public/assets/comforableimg.png";

export default function comforablesuties() {
  return (
    <div>
      <section
        className="flex flex-col md:flex-row  justify-center md:pl-24 p-7 gap-10 pb-28"
        style={{
          backgroundImage: `url("/assets/Componentimg.png")`,
          backgroundSize: "178px 409px", // Controls background image size
          backgroundPosition: "0px 400px", // Positions background on the left side
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="font-bold  text-[42px] sm:text-[52px] lg:text-[100px] text-[#DDB6C6] leading-[1]">
            Comfortable
            <span className="text-[#DDB6C6] inline-block">Suites</span>
            <hr className="bg-[#484C7FBD] inline-block rounded-[20px] w-[74px] h-[10px]" />
          </h1>
          <p className="sm:text-[16px] text-[14px] md:text-[18px]  mt-4 font-semibold text-[#484C7FBD]">
            Explore the spacious rooms and elegant suites at BelleView Hotel.
            All hotel rooms feature large windows with city views, comfortable
            beds, work desks, WiFi access, marble bathrooms and more. Browse
            below and book a room or suite on Hilton website for our best
            available rates.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full h-auto" src="/assets/comforableimg.png" alt="Hero" />
        </div>
      </section>
    </div>
  );
}
