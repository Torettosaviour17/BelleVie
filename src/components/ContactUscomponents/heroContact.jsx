// eslint-disable-next-line no-unused-vars
import React from "react";

export default function heroContact() {
  return (
    <div>
      <section
        className="font-Poppins md:h-[100vh] md:flex justify-center gap-9 items-center"
        style={{
          backgroundImage: `url("/assets/Componentimg.png")`,
          backgroundSize: "140px 345px", // Controls background image size
          backgroundPosition: "0px 367px", // Positions background on the left side
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full md:w-1/2 flex flex-col p-7 md:pb-44 gap-4">
          <h1 className="font-bold text-[42px] sm:text-[52px] lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-[#484C7F] to-[#DDB6C6]">
            Contact Us
            <hr className="bg-[#484C7F] inline px-9 text-[14px]  rounded-[20px]" />
          </h1>
          <p className="md:text-[18px] font-semibold text-[#484C7FBD]">
            For more information about our services, <br /> you can visit our:
          </p>
          <div className="sm:flex justify-center text-[#484C7FBD]">
            <div>
              <h3 className="text-[24px] text-[#484C7F] font-semibold">
                Abuja Branch
              </h3>
              <p className="text-[18px]">
                No. 5 Aliyu Babangida Street, Maitama, Abuja.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] text-[#484C7F] font-semibold">
                Kaduna Branch
              </h3>
              <p className="text-[18px]">
                No. 5 Aliyu Babangida Street, Narayi, Kaduna.
              </p>
            </div>
          </div>
        </div>
        <form className="w-full md:w-1/2 md:max-w-md bg-white p-6 pt-34">
          {/* Form Title */}
          <h2 className="text-right text-[#4B2A63] text-xl font-semibold mb-12">
            You can also leave us a message at:
          </h2>

          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-[#4B2A63]  focus:outline-none "
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail Address"
              className="w-full px-4 py-2 border border-[#4B2A63]  focus:outline-none "
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-[#4B2A63]  focus:outline-none "
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-2 border border-[#4B2A63]  focus:outline-none "
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[30%] bg-[#4B2A63] text-white font-bold py-2 rounded-lg hover:bg-[#3a2150] transition duration-300"
          >
            SEND
          </button>
        </form>
      </section>
    </div>
  );
}
