// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function HotDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const deals = [
    {
      title: "GOLDEN SUITE",
      price: "5,000",
      sale: "30%",
      image: "golden-suite.jpg", // Replace with actual image paths
    },
    {
      title: "SILVER SUITE",
      price: "3,500",
      sale: "30%",
      image: "silver-suite.jpg",
    },
    {
      title: "PLATINUM SUITE",
      price: "7,000",
      sale: "30%",
      image: "platinum-suite.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? deals.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === deals.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#f9f2f5] py-10 px-5">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-[#4B2A63] text-2xl font-bold mb-2">Hot Deals</h2>
        <div className="w-16 h-[3px] bg-[#4B2A63] mx-auto"></div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          {/* Slide */}
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-5 bg-white rounded-lg shadow-lg text-center">
                {/* Sale Badge */}
                <span className="absolute top-5 left-5 bg-[#4B2A63] text-white text-sm px-3 py-1 rounded">
                  SALE {deal.sale}
                </span>

                {/* Image */}
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="rounded-lg w-full h-64 object-cover"
                />

                {/* Title */}
                <h3 className="text-[#4B2A63] font-semibold text-lg mt-4">
                  {deal.title}
                </h3>

                {/* Price */}
                <p className="text-[#4B2A63] text-lg font-bold">
                  {deal.price} naira
                </p>
                <p className="text-[#4B2A63] text-sm">per night</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-5">
          <button
            onClick={handlePrev}
            className="bg-[#4B2A63] text-white p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#4B2A63] text-white p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
