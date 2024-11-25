// eslint-disable-next-line no-unused-vars
import React from "react";
// import faciliteshero from "../../../public/assets/faciliteshero.png";

export default function HeroFacilites() {
  return (
    <div>
      <section className="flex pl-10 items-center justify-between bg-[#DDB6C6] bg-opacity-[20%] md:pl-24 gap-10 pb-20 pt-10">
        <div className="">
          <h1 className=" text-[42px] sm:text-[52px] lg:text-[100px]  font-semibold text-[#484C7F]  leading-[1]">
            We are passionate{" "}
            <span className="text-[#DDB6C6] block">about your</span>
            pleasure
            <hr className="bg-[#AC8DAF] inline-block rounded-[20px] w-[74px] h-[10px]" />
          </h1>
          <p className="text-[#484C7FBD] font-semibold sm:text-[16px] text-[14px] md:text-[18px] leading-[27px] my-10">
            BelleView is the best choice for you and your loved ones to feel at
            home, away <br /> from home. With a combination of charm and
            convenience, you are sure of a <br /> pleasant stay.
          </p>
          <button className="w-[150px] h-[50px] bg-[#484C7F] text-white rounded-[10px] text-[16px] font-semibold transition-all duration-300">
            Book Now
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto"
            src="/assets/faciliteshero.png"
            alt="Hero"
          />
        </div>
      </section>
    </div>
  );
}
