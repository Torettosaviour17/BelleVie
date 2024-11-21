// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Kingsutuies from "../../assets/Kingsutuies.png";
import SilverSUiteimg from "../../assets/silversuiteimg.png";
import specialimg from "../../assets/specialimg.png";

// Carousel items data
const carouselItems = [
  { id: 1, image: Kingsutuies, title: "GOLDEN SUITE", price: "5,000" },
  { id: 2, image: specialimg, title: "SPECIAL SUITE", price: "4,500" },
  { id: 3, image: SilverSUiteimg, title: "SILVER SUITE", price: "3,500" },
];

export default function HotDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous item
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Move to the next item
  const handleNext = () => {
    if (currentIndex < carouselItems.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="relative w-full">
      <h2 className="text-2xl font-semibold text-[#484C7F] mb-6">
        Hot Deals <span className="border-b-4 border-[#AC8DAF]"></span>
      </h2>

      {/* Carousel Wrapper */}
      <div className="flex justify-center items-center relative overflow-hidden">
        {carouselItems.map((item, index) => {
          // Determine whether the current item is the center, left, or right
          const isCenter = index === currentIndex;
          const isLeft = index === currentIndex - 1;
          const isRight = index === currentIndex + 1;

          return (
            <div
              key={item.id}
              className={`transition-transform w-full duration-500 ease-in-out transform ${
                isCenter
                  ? "scale-100 opacity-100 z-10" // Center item (active)
                  : "scale-75 opacity-50 z-0" // Non-center items (inactive)
              }`}
              style={{
                transform: isCenter
                  ? "translateX(0)"
                  : isLeft
                  ? "translateX(-200px)"
                  : isRight
                  ? "translateX(200px)"
                  : "translateX(100%)", // Hidden items off-screen
              }}
            >
              {/* Image Section */}
              <div
                className="bg-cover bg-center h-[351px] md:h-[472px] lg:h-[581px] w-full"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="font text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-2xl font-bold inline-block bg-[#484C7F] p-4">
                  SALE 30%
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full bg-[#484C7F] bg-opacity-[5%] p-3 text-center">
                <h3 className="font-semibold text-[#AC8DAF] text-[24px] sm:text-[30px] md:text-[38px] lg:text-4xl">
                  {item.title}
                </h3>
                <p className="text-2xl my-2 font-bold text-[#484C7F]">
                  {item.price}{" "}
                  <span className="text-sm font-normal">naira</span>
                </p>
                <p className="text-sm text-[#484C7FBD]">per night</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons (Arrows) */}
      <div className="flex justify-center gap-4 mt-6  bottom-4 w-full">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-[#484C7F] text-white rounded-full hover:scale-110"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-[#484C7F] text-white rounded-full hover:scale-110"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
