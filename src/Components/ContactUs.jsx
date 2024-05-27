import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12    bg-green-300 w-[70%] h-[350px] rounded-lg shadow-lg shadow-green-400 mt-10">
      <div>
        <p className=" font-noto text-5xl font-bold">Contact Us</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2sss">
        <p className=" text-3xl font-semibold text-gray-400">
          Get in touch with us
        </p>
        <p className=" text-lg font-roboto text-slate-400">
          We will always with you
        </p>
      </div>
      <div className="flex items-center justify-center gap-16">
        <div className=" flex items-center justify-center gap-4 h-28 w-[250px] bg-white rounded-xl shadow-md shadow-blue-500 hover:scale-105 duration-200 cursor-pointer">
          <div className=" flex flex-col items-start justify-center">
            <p>Call Anytime</p>
            <p>+(95)9424881686</p>
          </div>
          <div className=" relative w-[65px] h-[65px] rounded-full shadow-md shadow-blue-400">
            <FaPhone
              size={25}
              className=" absolute top-5 left-5 text-gray-400"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center gap-4 h-28 w-[250px] bg-white rounded-xl shadow-md shadow-blue-500 hover:scale-105 duration-200 cursor-pointer">
          <div className=" flex flex-col items-start justify-center">
            <p>Email us</p>
            <p>www.gmail.com</p>
          </div>
          <div className=" relative w-[65px] h-[65px] rounded-full shadow-md shadow-blue-400">
            <FaEnvelope
              size={25}
              className=" absolute top-5 left-5 text-gray-400"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center gap-4 h-28 w-[250px] bg-white rounded-xl shadow-md shadow-blue-500 hover:scale-105 duration-200 cursor-pointer">
          <div className=" flex flex-col items-start justify-center">
            <p>Address</p>
            <p>Yangon,Myanmar</p>
          </div>
          <div className=" relative w-[65px] h-[65px] rounded-full shadow-md shadow-blue-400">
            <FaLocationDot
              size={25}
              className=" absolute top-5 left-5 text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
