import customerimg from "../../../public/assets/customerimg.png";
import component from "../../../public/assets/Componentimg.png";

export default function CustomerStories() {
  return (
    <section
      className="bg-pink-50  py-12 h-[100vh] flex "
      style={{
        backgroundImage: `url(${component})`,
        backgroundSize: "138px 319px", // Controls background image size
        backgroundPosition: "0px 387px", // Positions background on the left side
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="  relative w-full">
        <div className=" w-[65%] p-7 bg-[#484C7FBD] rounded-tr-[20px] rounded-br-[20px]">
          <div className="">
            <h2 className="text-[32px] leading-[108px] sm:text-[42px] md:text-[58px] lg:text-[72px]  text-white font-bold">
              Customer <br /> <span className="text-[#DDB6C6]">Stories</span>{" "}
              <hr className="bg-white border-none inline-block rounded-[20px] w-[74px] h-[10px]" />
            </h2>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-white py-4 leading-[27px]">
              BelleView is the best choice for you and your loved ones to feel
              at <br />
              home, away from home. With a combination of charm and <br />
              convenience, you are sure of a pleasant stay.
            </p>
            <p className="text-[24px] leading-[36px] font-semibold text-[#DDB6C6]">
              Simmon Haruna
            </p>
          </div>
          <div className="absolute top-[9px] right-48">
            <img className="object-cover" src={customerimg} alt="Customer" />
          </div>
        </div>
      </div>
    </section>
  );
}
