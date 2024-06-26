import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { FaLockOpen } from "react-icons/fa";

const ComfrimPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    comfirmPasword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [comfirmPasword, setComfirmPassword] = useState(false);

  const handleChagne = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleComfirmPass = () => {
    setComfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {};

  return (
    <div className=" w-[400px] h-fit px-8 py-4 rounded-md flex flex-col items-center justify-center gap-y-4 shadow-md shadow-blue-500">
      <div>
        <FaLockOpen size={60} className=" text-green-500" />
      </div>
      <p className=" font-roboto font-bold text-3xl">Create New Passowrd</p>
      <div className=" flex flex-col items-center justify-center gap-y-8">
        <div className=" relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChagne}
            placeholder="Enter new Password"
            className=" px-6 py-2 rounded-md shadow-md shadow-blue-500 outline-none w-[300px]"
          />
          <button
            className=" absolute right-2 top-2"
            onClick={handlePasswordToggle}
          >
            {showPassword ? (
              <Visibility style={{ color: "gray" }} />
            ) : (
              <VisibilityOff style={{ color: "gray" }} />
            )}
          </button>
        </div>
        <div className="relative">
          <input
            type={comfirmPasword ? "text" : "password"}
            name="comfirmPasword"
            value={formData.comfirmPasword}
            onChange={handleChagne}
            placeholder="Comfirm your Password"
            className=" px-6 py-2 rounded-md shadow-md shadow-blue-500 outline-none w-[300px]"
          />
          <button
            className=" absolute right-2 top-2"
            onClick={handleComfirmPass}
          >
            {comfirmPasword ? (
              <Visibility style={{ color: "gray" }} />
            ) : (
              <VisibilityOff style={{ color: "gray" }} />
            )}
          </button>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className=" px-8 py-2 rounded-md bg-green-500 text-white font-bold shadow-md shadow-gray-500 hover:bg-blue-500"
      >
        Submit
      </button>
    </div>
  );
};

export default ComfrimPassword;
