// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ourserviceimg from "../../../public/assets/ourserviceimg.png";
import Restaurantimg from "../../../public/assets/Restaurantimg.png";
import Gymnasiumimg from "../../../public/assets/Gymnasiumimg.png";
import aboutimg from "../../../public/assets/aboutimg.png";

export default function OurService() {
  const [activeTab, setActiveTab] = useState("Massage");

  const tabs = [
    {
      label: "Massage",
      title: "Relax & Get Massaged",
      description:
        "BelleView offers the best spa services and great massages at our highly organized and worldclass Spa at very affordable rates. Our masseurs are professionals with several years of expertise.",
      imgSrc: ourserviceimg,
    },
    {
      label: "Restaurant",
      title: "Dine in Style",
      description:
        "Experience gourmet dining at our luxurious restaurant with a range of delicious cuisines crafted by top chefs.",
      imgSrc: Restaurantimg,
    },
    {
      label: "Swimming Pool",
      title: "Enjoy the Pool",
      description:
        "Dive into relaxation with our crystal clear swimming pool, open for all guests.",
      imgSrc: aboutimg,
    },
    {
      label: "Gymnasium",
      title: "Stay Fit",
      description:
        "Our gym is fully equipped with modern fitness equipment for a complete workout experience.",
      imgSrc: Gymnasiumimg,
    },
  ];

  const activeContent = tabs.find((tab) => tab.label === activeTab);

  return (
    <div className="flex flex-col  items-center font-Poppins p-7">
      {/* Title Section */}
      <h1 className="text-[42px] sm:text-[52px] lg:text-[100px] font-bold text-[#49468B]">
        Our <span className="text-[#D49FAC]">Services</span>
        <hr className="bg-[#49468B] inline-block rounded-[20px] w-[74px] h-[10px]" />
      </h1>

      {/* Tabs Section */}
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 mt-6 w-full lg:w-[69.3%]">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={` py-2 ${
              activeTab === tab.label
                ? "bg-[#49468B] text-white"
                : "text-[#49468B] bg-white"
            } font-bold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] border border-[#49468B]`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row border border-[#49468B]  mb-4 w-full max-w-4xl text-white">
        <img
          src={activeContent.imgSrc}
          alt={activeContent.label}
          className="w-full md:w-1/2 "
        />
        <div className="p-5 space-y-5 bg-[#49468B]">
          <h2 className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] font-semibold">
            {activeContent.title}
          </h2>
          <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] font-semibold  ">
            {activeContent.description}
          </p>
          <button className="mt-4 w-[30%] inline py-2  px] sm:text-[14px] text-[12px] md:text-[16px] font-semibold bg-[#AC8DAF] text-white rounded-md">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
