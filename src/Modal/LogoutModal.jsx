import React from "react";
import { motion } from "framer-motion";
import { buttonClick } from "../animation";
import { useDispatch } from "react-redux";
import { removeUser } from "../Redux/features/UserSlice";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <div className=" fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-slate-300 bg-opacity-50">
      <div className=" bg-white rounded-md p-5 w-[300px]">
        <h2 className=" text-2xl font-noto text-red-500">Comfirm Logout</h2>
        <p className=" font-roboto mt-4">Are you want to logout?</p>
        <div className=" flex justify-center items-center gap-x-6 mt-2">
          <motion.button
            {...buttonClick}
            onClick={onClose}
            className=" bg-gray-500 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-300 hover:text-black"
          >
            Cancle
          </motion.button>
          <motion.button
            {...buttonClick}
            onClick={handleLogout}
            className=" bg-blue-400 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-500"
          >
            Logout
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
