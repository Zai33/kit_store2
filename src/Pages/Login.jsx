import React from "react";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animation";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-300 h-screen gap-y-4 w-full">
      <div>
        <p className=" text-4xl font-bold text-white mr-[900px]">
          Kiddo Kloset
        </p>
      </div>
      <motion.div
        {...slideTop}
        className=" flex h-[75%] w-[80%] justify-between rounded-2xl shadow-md shadow-gray-400 bg-white"
      >
        {/* image */}
        <div>
          <img
            src={require("../Assets/img/LoginImg.jpg")}
            alt="loginimg"
            className=" h-full rounded-2xl shadow-lg shadow-teal-400"
          />
        </div>
        {/* input form */}
        <form
          action=""
          method="get"
          className="flex flex-col items-center justify-center w-3/5 px-8 py-4 gap-y-10 mr-10"
        >
          <div className="flex flex-col items-start">
            <p className=" text-5xl font-bold text-teal-500 mt-2">Login</p>
            <p className=" mt-4">
              Didn't have an account?
              <span className=" text-blue-500 underline cursor-pointer ml-4">
                Sign Up
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center content-center gap-4 w-[300px]">
            <div className="flex flex-col gap-2">
              <lable for="email">Email</lable>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Enter you name"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="user_pass">Password</label>
              <input
                type="password"
                name="user_pass"
                id="user_pass"
                placeholder="Enter you password"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <p className=" underline text-blue-600 cursor-pointer">
              forget password?
            </p>
            <motion.button
              {...buttonClick}
              {...slideTop}
              className="flex items-center justify-center gap-3 bg-emerald-600 rounded-md shadow-md shadow-teal-400  py-2 text-white cursor-pointer mb-2 hover:bg-blue-500"
            >
              <AiOutlineLogin size={25} />
              SignUp
            </motion.button>
          </div>
        </form>
      </motion.div>

      <div>
        <p className=" text-slate-500 mt-2">
          We keep your information safe.We never use your information outside
          the website.
        </p>
      </div>
    </div>
  );
};

export default Login;
