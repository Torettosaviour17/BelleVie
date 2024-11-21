// eslint-disable-next-line no-unused-vars
import React from "react";
import Gymnasiumimg from "../../../public/assets/Gymnasiumimg.png";
import faciliteshero from "../../../public/assets/faciliteshero.png";

export default function Gymnasiumsec() {
  return (
    <div>
      <section
        className="flex flex-col bg-[#DDB6C6] py-28 bg-opacity-[20%] md:flex-row items-center justify-center md:pl-20 p-7 gap-10 pb-28"
        style={{
          backgroundImage: `url(${faciliteshero})`,
          backgroundSize: "138px 339px", // Controls background image size
          backgroundPosition: "1224px 420px", // Positions background on the left side
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full h-auto" src={Gymnasiumimg} alt="Hero" />
        </div>

        {/* Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="font-semibold text-[42px] sm:text-[52px] lg:text-[100px] text-[#484C7FBD]">
            Gymnasium
            <hr className="bg-[#aa758b] inline rounded-[20px]  px-9 text-[12px]" />
          </h1>
          <p className="sm:text-[16px] text-[14px] md:text-[18px] font-semibold text-[#484C7FBD]">
            With a mix of equipment and weights, our hotel gym will cater to you
            whether you want to do a cardio workout, or if you want to give your
            muscles some strength training or toning exercises. Once you&apos;ve
            worked up a sweat, head to Haxells and replenish your energy before
            you take on the rest of the day.
          </p>
        </div>
      </section>
    </div>
  );
}
