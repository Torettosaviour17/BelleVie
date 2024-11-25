// eslint-disable-next-line no-unused-vars
import React from "react";
// import spaimg from "../../../public/assets/spaimg.png";
// import faciliteshero from "../../../public/assets/faciliteshero.png";

export default function Spa() {
  return (
    <div>
      <section
        className="flex flex-col bg-[#DDB6C6] bg-opacity-[20%] md:flex-row items-center justify-center md:pl-20 p-7 gap-10 pb-28"
        style={{
          backgroundImage: `url(/assets/faciliteshero.png)`,
          backgroundSize: "138px 339px", // Controls background image size
          backgroundPosition: "1224px 450px", // Positions background on the left side
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full h-auto" src="/assets/spaimg.png" alt="Hero" />
        </div>

        {/* Content Area */}
        <div className="w-full md:w-1/2 flex md:pb-48 flex-col justify-center gap-4">
          <h1 className="font-bold text-[42px] sm:text-[52px] lg:text-[100px] text-[#484C7FBD] leading-[1] ">
            Spa
            <hr className="bg-[#DDB6C6] inline rounded-[20px] px-9 text-[14px]" />
          </h1>
          <p className="sm:text-[16px] text-[14px] md:text-[18px]  mt-4 font-semibold text-[#484C7FBD]">
            BelleView is the best choice for you and your loved ones to feel at
            home, away from home. With a combination of charm and convenience,
            you are sure of a pleasant stay.
          </p>
        </div>
      </section>
    </div>
  );
}
