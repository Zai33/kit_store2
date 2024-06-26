import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhone((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className=" w-[400px] h-fit px-8 py-4 rounded-md flex flex-col items-center justify-center gap-y-4 shadow-md shadow-blue-500">
      <div>
        <FaLock size={50} className=" text-red-800" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-1">
        <p className="font-roboto text-3xl font-bold">Forgot Password?</p>
        <p>You can reset your Password with OTP.</p>
      </div>
      <div className=" flex items-center justify-center gap-x-4">
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="px-6 py-2 rounded-md shadow-md shadow-blue-400 outline-none w-[300px]"
          placeholder="Enter Your Phone No"
        />
      </div>
      {otpSent && (
        <div>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            className="px-6 py-2 rounded-md shadow-md shadow-blue-400 outline-none w-[300px]"
          />
        </div>
      )}
      <div className=" flex items-center justify-center gap-x-4">
        <button className="  px-8 py-2 bg-red-500 rounded-md cursor-pointer shadow-md shadow-red-300 text-white font-bold">
          Cancle
        </button>
        <button className=" px-5 py-2 bg-blue-500 rounded-md cursor-pointer shadow-md shadow-blue-300 text-white font-bold">
          {otpSent ? "Verify OTP" : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
