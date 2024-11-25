// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Trending() {
  return (
    <div>
      <section className="p-8 md:p-24 pt-12">
        <div>
          <h1 className="text-[#484C7F] pb-12 text-[36px] font-semibold">
            Trending{" "}
            <hr className="bg-[#AC8DAF] inline-block rounded-[20px] w-[74px] h-[10px]" />
          </h1>
        </div>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-24">
          {/* one */}
          <div className="bg-[#484C7F] bg-opacity-[5%]">
            <div>
              <img className="w-full" src="/assets/Kingsutuies.png" alt="" />
            </div>
            <div className="p-9 pt-3">
              <h3 className="text-[#484C7F] text-[36px] font-semibold">
                King’s SUite
              </h3>
              <div className="flex space-x-12 mt-3 items-center ">
                <p className="text-[12px] text-[#484C7FBD] font-semibold">
                  Our King’s Suite provides plenty of space and superb levels of{" "}
                  <br />
                  comfort. Each room features a complimentary fully stocked{" "}
                  <br />
                  minibar and Nespresso® coffee machine. With comfortable <br />
                  furnishings and air conditioning, they are a great place to{" "}
                  <br />
                  relax at the end of the day.
                </p>
                <button className="w-12 h-12 flex items-center justify-center bg-[#484C7F] text-white rounded-full">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* two */}
          <div className="bg-[#484C7F] bg-opacity-[5%]">
            <div>
              <img
                className="rounded-[20px] w-full h-[543px]"
                src="/assets/specialimg.png"
                alt=""
              />
            </div>
            <div className="p-9 pt-3">
              <h3 className="text-[#484C7F] text-[36px] font-semibold">
                Golden SUite
              </h3>
              <div className="flex space-x-12 mt-3 items-center">
                <p className="text-[12px] text-[#484C7FBD] font-semibold">
                  Our Golden Suites feature soothing air conditioning and a{" "}
                  <br />
                  range of luxury bathroom amenities to rejuvenate body <br />{" "}
                  and soul. Each room is equipped with an art deco Carrara{" "}
                  <br />
                  marble-effect table and a comfortable chair or stool.
                </p>
                <button className="w-12 h-12 flex items-center justify-center bg-[#484C7F] text-white rounded-full">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* three */}
          <div className="bg-[#484C7F] bg-opacity-[5%]">
            <div>
              <img className="w-full" src="/assets/SilverSUiteimg.png" alt="" />
            </div>
            <div className="p-9 pt-3">
              <h3 className="text-[#484C7F] text-[36px] font-semibold">
                Silver SUite
              </h3>
              <div className="flex space-x-12 mt-3 items-center">
                <p className="text-[12px] text-[#484C7FBD] font-semibold">
                  Our Silver Suite provides plenty of space and superb levels of{" "}
                  <br />
                  comfort. Each room features a complimentary fully stocked{" "}
                  <br />
                  minibar and Nespresso® coffee machine. With comfortable <br />
                  furnishings and air conditioning, they are a great place to{" "}
                  <br />
                  relax at the end of the day.
                </p>
                <button className="w-12 h-12 flex items-center justify-center bg-[#484C7F] text-white rounded-full">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/* four */}
          <div className="bg-[#484C7F] bg-opacity-[5%]">
            <div>
              <img className="w-full" src="/assets/royalSUiteimg.png" alt="" />
            </div>
            <div className="p-9 pt-3">
              <h3 className="text-[#484C7F] text-[36px] font-semibold">
                Royal Suite
              </h3>
              <div className="flex space-x-12 mt-3 items-center">
                <p className="text-[12px] text-[#484C7FBD] font-semibold">
                  Our Royal Suite provides plenty of space and superb levels of{" "}
                  <br />
                  comfort. Each room features a complimentary fully stocked{" "}
                  <br />
                  minibar and Nespresso® coffee machine. With comfortable <br />
                  furnishings and air conditioning, they are a great place to{" "}
                  <br />
                  relax at the end of the day.
                </p>
                <button className="w-12 h-12 flex items-center justify-center bg-[#484C7F] text-white rounded-full">
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
