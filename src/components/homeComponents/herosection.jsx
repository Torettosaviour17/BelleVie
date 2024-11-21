import heroImg from "../../../public/assets/heroimg.png";
import component from "../../../public/assets/Componentimg.png";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center bg-[#DDB6C6] bg-opacity-[20%] md:pl-24 p-7 gap-10 pb-28"
      style={{
        backgroundImage: `url(${component})`,
        backgroundSize: "201px 422px", // Controls background image size
        backgroundPosition: "0px 520px", // Positions background on the left side
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Area */}
      <div className="w-full md:w-1/2 flex flex-col  md:text-left justify-center gap-4">
        <h1 className="font-bold text-[42px] sm:text-[52px] lg:text-[100px] text-[#484C7F] hover:scale-100">
          Welcome
          <hr className="bg-[#AC8DAF] inline-block rounded-[20px] w-[74px] h-[10px]" />
        </h1>
        <p className="md:text-[18px] font-semibold text-[#484C7FBD]">
          BelleView is the best choice for you and your loved ones to feel at
          home, away from home. With a combination of charm and convenience, you
          are sure of a pleasant stay.
        </p>
        {/* Button */}
        <button className="w-[150px] h-[50px] bg-[#484C7F] text-white rounded-[10px] text-[16px] font-semibold transition-all duration-300">
          Book Now
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full h-auto" src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}
