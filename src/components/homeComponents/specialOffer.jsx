// import React from 'react'
import specialimg from "../../assets/specialimg.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function specialOffer() {
  return (
    <div>
      <section className="md:flex justify-center gap-10 p-8 items-center w-full pl-14">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <div>
            <h1 className="font-bold md:text-[100px] text-[#AC8DAF] leading-[1  ]">
              Special
            </h1>
            <span className="block font-bold md:text-[100px] text-[#484C7F] -mt-4 leading-[0.9]">
              Deals
              <hr className="bg-[#AC8DAF] inline-block rounded-[20px] w-[74px] h-[10px]" />
            </span>
          </div>

          <p className="md:text-[18px] font-semibold text-[#484C7FBD]">
            BelleView is the best choice for you and your loved ones to feel at
            home, away from home. With a combination of charm and convenience,
            you are sure of a pleasant stay.
          </p>
          {/* Button */}
          <button className="w-[150px] h-[50px] bg-[#484C7F] text-white rounded-[10px] text-[16px] font-semibold transition-all duration-300">
            CHECK ALL NOW
          </button>
        </div>
        <div className="w-full flex flex-col md:w-1/2">
          <div
            className=" h-[581px] bg-cover w-full"
            style={{
              backgroundImage: `url(${specialimg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="font text-white text-2xl font-bold inline-block bg-[#484C7F] p-4">
              SALE 30%
            </div>
          </div>
          <div className="w-full bg-[#484C7F] bg-opacity-[5%]">
            <div className=" p-3">
              <h3 className=" font-semibold text-[#AC8DAF] text-4xl">
                GOLDEN SUITE
              </h3>
              <p className="text-2xl my-2 font-bold text-[#484C7F]">
                5,000 <span className="text-sm font-normal">naira</span>
              </p>
              <p className="text-sm text-[#484C7FBD]">per night</p>
            </div>
            <div className="w-full">
              <div className="flex p-4 gap-5 items-end justify-end">
                <button className="w-14 h-14 flex items-center justify-center bg-[#484C7F] text-white rounded-full">
                  <FaArrowLeft />
                </button>
                <button className="w-14 h-14 flex items-center justify-center bg-[#484C7F] text-white rounded-full">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
