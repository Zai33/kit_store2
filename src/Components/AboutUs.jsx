import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="flex bg-slate-800 gap-y-10 px-16 py-10">
        <div className=" w-1/2">
          <p className=" text-3xl font-noto text-white mb-6 font-bold">
            About Us
          </p>
          <p className=" text-white font-roboto">
            "At our online platform, we strive to redefine the second-hand
            shopping experience by providing a seamless interface where sellers
            connect with buyers, fostering a sustainable cycle of reuse and
            giving pre-loved items a new lease on life."
          </p>
        </div>
        <div className="flex justify-center w-1/2 gap-x-10">
          <div className=" flex flex-col gap-2">
            <p className=" text-white mb-6 underline cursor-pointer hover:scale-105 duration-150">
              Product
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              How it works
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              Feactures
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              Pricing
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-white mb-6 underline cursor-pointer hover:scale-105 duration-150">
              About
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              Our teams
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              Careers
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-white mb-6 underline cursor-pointer hover:scale-105 duration-150">
              Contact
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              Kiddo Kloset
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              09424881686
            </p>
            <p className=" text-white cursor-pointer hover:scale-105 duration-150 hover:underline">
              Yangon,Myanmar
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-black w-full h-10 flex items-center justify-center px-8 py-2 text-white gap-x-4 font-roboto">
        <FaRegCopyright size={20} />
        <p className="">copyright-2024 - KiddoKloset | all rights reserved</p>
      </div>
    </div>
  );
};

export default AboutUs;
