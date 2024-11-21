// eslint-disable-next-line no-unused-vars
import React from "react";
import Restaurantimg from "../../assets/Restaurantimg.png";
import component from "../../assets/componentimg.png";

export default function Restaurant() {
  return (
    <div>
      <section
        className="flex flex-col md:flex-row items-center justify-center md:pl-24 p-7 gap-10 pb-28"
        style={{
          backgroundImage: `url(${component})`,
          backgroundSize: "138px 339px", // Controls background image size
          backgroundPosition: "0px 367px", // Positions background on the left side
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="font-bold text-[42px] sm:text-[52px] lg:text-[100px] flex items-end text-[#DDB6C6] leading-[1]">
            <h1>Restaurant</h1>
            <hr className="bg-[#484C7FBD] block rounded-[20px] w-[74px] h-[10px]" />
          </h1>
          <p className="sm:text-[16px] text-[14px] md:text-[18px]  mt-4 font-semibold text-[#484C7FBD]">
            Breakfast, lunch and dinner, formal or not. With both indoor and
            outdoor dining, live entertainment and an impressive array of
            worldly flavors, the restaurants at the BelleView hotel offer
            innovative cuisine and impeccable service.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full h-auto" src={Restaurantimg} alt="Hero" />
        </div>
      </section>
    </div>
  );
}
