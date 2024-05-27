import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLogin } from "react-icons/ai";
import { buttonClick, slideTop } from "../animation";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-300 h-screen gap-y-4">
      {/* Title */}
      <div className="flex  items-center justify-start">
        <p className=" text-4xl font-bold text-white">Kiddo Kloset</p>
      </div>
      {/* Sign Up Form */}
      <motion.div
        {...slideTop}
        className=" flex h-[75%] w-[80%] justify-between rounded-2xl shadow-md shadow-gray-400 bg-white"
      >
        {/* image */}
        <div>
          <img
            src={require("../Assets/img/LoginImg.jpg")}
            alt="loginimg"
            className=" h-full rounded-2xl shadow-md shadow-gray-400"
          />
        </div>
        {/* Form */}
        <form
          action=""
          method="get"
          className="flex flex-col items-center justify-center px-8 py-4 gap-y-8 mr-16"
        >
          <div className=" flex flex-col items-start">
            <p className=" text-5xl font-bold text-teal-500 mt-2">
              Sign up to continue
            </p>
            <p className=" mt-4">
              Already have an account?
              <span className=" text-blue-500 underline cursor-pointer ml-4">
                Login
              </span>
            </p>
          </div>
          {/* input form */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-[600px]">
            <div className="flex flex-col justify-center gap-2">
              <label for="user-name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Enter your name"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label for="phone_no">Phone</label>
              <input
                type="tel"
                id="phone_no"
                name="user_phno"
                placeholder="Enter your ph no"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-centerd gap-2">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label for="user_address">Address</label>
              <input
                type="text"
                id="user_address"
                name="address"
                placeholder="Enter your address"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label for="user_pass">Password</label>
              <input
                type="password"
                id="user_pass"
                name="user_pass"
                placeholder="Enter your password"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <lable for="comfirm_pass">Comfirm Password</lable>
              <input
                type="password"
                id="comfirm_pass"
                name="comfirm_pass"
                placeholder="Comfirm your password"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
          </div>
          {/* button */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <input type="checkbox" for="user_agree" />
              <label for="user_agree">
                I agree{" "}
                <span className=" text-blue-600 underline cursor-pointer">
                  Terms of Services{" "}
                </span>
                and
                <span className=" text-blue-600 underline cursor-pointer">
                  {" "}
                  Privacy Policy
                </span>
              </label>
            </div>
            <motion.button
              {...buttonClick}
              {...slideTop}
              className="flex items-center justify-center gap-3 bg-emerald-600 w-[300px] rounded-md shadow-md shadow-teal-400 px-16 py-2 text-white cursor-pointer mb-2 hover:bg-blue-500"
            >
              <AiOutlineLogin size={25} />
              SignUp
            </motion.button>
          </div>
        </form>
      </motion.div>
      {/* bottom text */}
      <div>
        <p className=" text-slate-500 mt-2">
          We keep your information safe.We never use your information outside
          the website.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
