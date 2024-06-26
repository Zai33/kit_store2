import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideTop } from "../animation";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/features/UserSlice";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mutation = useMutation({
    mutationFn: async (formData) => {
      try {
        const response = await axios.post(
          "http://192.168.1.11:3000/kids/users/login",
          {
            phone: formData.phone,
            password: formData.password,
          }
        );
        dispatch(addUser(response.data.result));
        return response.data.result;
      } catch (error) {
        // console.error("Api error", error);
        throw error;
      }
    },

    onSuccess: (data) => {
      if (data) {
        const userData = data.user;
        console.log(userData);
        localStorage.setItem("token", data.token);
        toast.success("Login successful");
        navigate("/home");
        // setInterval(() => {
        //   navigate("/home");
        // }, 1000);
      }

      setIsLoading(false);
    },
    onError: (error) => {
      setIsLoading(false);
      if (error.response && error.response.status === 500) {
        setTimeout(() => {
          toast.error("Something went wrong!!!");
        }, 1800);
      } else if (error.response && error.response.status === 404) {
        setTimeout(() => {
          toast.error("User Not found!!!");
        }, 1800);
      } else {
        toast.error(error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    mutation.mutate(formData);
  };

  const handleTogglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  const LoadingDots = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
      <>
        <span className="dot-load">.</span>
        <span className="dot-load">.</span>
        <span className="dot-load">.</span>
      </>
    );
  };

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
        <div className="flex flex-col items-center justify-center w-3/5 px-8 py-4 gap-y-10 mr-10">
          <div className="flex flex-col items-start">
            <p className=" text-5xl font-bold text-teal-500 mt-2">Login</p>
            <p className=" mt-4">
              Didn't have an account?
              <Link
                to="/SignUp"
                className=" text-blue-500 underline cursor-pointer ml-4"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-center content-center gap-4 w-[300px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="ph_no">PhoneNumber</label>
              <input
                type="tel"
                name="phone"
                id="ph_no"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter you Ph number"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
              {/* {error.phone && (
                <p className="text-red-500 text-sm font-noto mt-2 -mb-3">
                  {error.phone}
                </p>
              )} */}
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="user_pass">Password</label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="user_pass"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter you password"
                className=" px-4 py-2 rounded-md shadow-md shadow-teal-400 outline-none"
                required
              />
              <button
                className=" absolute right-3 top-10"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </button>
            </div>
            {/* {error.password && (
              <p className="text-red-500 text-sm font-noto mt-2 -mb-3">
                {error.password}
              </p>
            )} */}
            <p className=" underline text-blue-600 cursor-pointer">
              forget password?
            </p>

            <button
              // {...buttonClick}
              // {...slideTop}
              onClick={(e) => handleSubmit(e)}
              disabled={loading}
              className="flex items-center justify-center w-full gap-3 bg-emerald-600 rounded-md shadow-md shadow-teal-400  py-2 text-white cursor-pointer mb-2 hover:bg-blue-500"
            >
              {loading ? (
                <>
                  Loading
                  <LoadingDots isLoading={loading} />
                </>
              ) : (
                "Login"
              )}
            </button>
            {/* {error && <p>{error}</p>} */}
          </div>
        </div>
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
