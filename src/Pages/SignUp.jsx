/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineLogin } from "react-icons/ai";
import { buttonClick, slideTop } from "../animation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/features/UserSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    comfirmPassword: "",
    acceptedTerm: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showComPass, setShowComPass] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleComfirmPassword = () => {
    setShowComPass((prev) => !prev);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    if (isSignUp) {
      navigate("/home");
    }
  }, [isSignUp, navigate]);

  const validateForm = () => {
    const newError = {};

    if (!/^(\+?959|\+?95|09|9)\d{7,9}$/.test(formData.phone)) {
      newError.phone = "please correct phone number";
    }

    if (formData.password.length < 8 && formData.password !== "") {
      newError.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.comfirmPassword) {
      newError.comfirmPassword = "Password do not match!";
    }

    if (!formData.acceptedTerm) {
      newError.acceptedTerm = "You must accept terms and policy";
    }

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = validateForm();
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    setError({});

    try {
      const response = await axios.post(
        "http://192.168.1.11:3000/kids/users/register",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      );
      dispatch(addUser(formData));
      setMessage(response.data.message);
      setIsSignUp(true);
      console.log("Sign Up Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        comfirmPassword: "",
        acceptedTerm: false,
      });
    } catch (error) {
      console.log("Something Error Wrong :", error);
      setMessage("Something went wrong.Please try again!");
    }
  };

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
        <div
          // action=""
          // method="get"
          className="flex flex-col items-center justify-center px-8 py-4 gap-y-8 mr-16"
        >
          <div className=" flex flex-col items-start">
            <p className=" text-5xl font-bold text-teal-500 mt-2">
              Sign up to continue
            </p>
            <p className=" mt-4">
              Already have an account?
              <Link
                to="/"
                className="hover:underline text-xl cursor-pointer ml-4 hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
          {/* input form */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-[600px]">
            <div className="flex flex-col justify-center gap-2">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label htmlFor="phone_no">Phone</label>
              <input
                type="tel"
                id="phone_no"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                // pattern="[09][0-9]{3}-[0-9]{3}-[0-9]{3}"
                placeholder="Enter your ph no"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
                maxLength="11"
              />
              {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}
            </div>
            <div className="flex flex-col justify-centerd gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label htmlFor="user_address">Address</label>
              <input
                type="text"
                id="user_address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 relative">
              <label htmlFor="user_pass">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="user_pass"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
              <button
                className="absolute right-2 top-10"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </button>
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            <div className="flex flex-col justify-center gap-2 relative">
              <label htmlFor="comfirm_pass">Comfirm Password</label>
              <input
                type={showComPass ? "text" : "password"}
                id="comfirm_pass"
                name="comfirmPassword"
                value={formData.comfirmPassword}
                onChange={handleChange}
                placeholder="Comfirm your password"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
              <button
                className="absolute right-2 top-10"
                onClick={handleToggleComfirmPassword}
              >
                {showComPass ? <Visibility /> : <VisibilityOff />}
              </button>
            </div>
          </div>
          {error.comfirmPassword && (
            <p style={{ color: "red" }}>{error.comfirmPassword}</p>
          )}
          {/* button */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <input
                type="checkbox"
                id="user_agree"
                name="acceptedTerm"
                checked={formData.acceptedTerm}
                onChange={handleChange}
              />
              <label htmlFor="user_agree">
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
            {error.acceptedTerm && (
              <p style={{ color: "red" }}>{error.acceptedTerm}</p>
            )}

            <motion.button
              {...buttonClick}
              {...slideTop}
              onClick={(e) => handleSubmit(e)}
              disabled={!formData.acceptedTerm}
              className="flex items-center justify-center gap-3 bg-emerald-600 w-[300px] rounded-md shadow-md shadow-teal-400 px-16 py-2 text-white cursor-pointer mb-2 hover:bg-blue-500"
            >
              <AiOutlineLogin size={25} />
              SignUp
            </motion.button>
          </div>
        </div>
        {message && <p>{message}</p>}
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
