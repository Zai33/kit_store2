import React from "react";
import {} from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";

const Chat = () => {
  return (
    <div className=" flex">
      {/* First section */}
      <div className=" h-screen flex flex-col items-center justify-between py-4 px-2 bg-blue-400">
        <AiTwotoneMessage size={25} className=" text-white" />
        <div className=" rounded-full shadow-md shadow-blue-400 cursor-pointer hover:scale-105 duration-150">
          <img
            src={require("../Assets/img/boy.png")}
            alt=""
            className=" object-cover w-12 h-12"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="flex flex-col items-center bg-secondary-600 px-4 py-4">
        <input
          type="text"
          name="msg_search"
          placeholder="search conversation"
          className=" rounded-full w-[300px] px-4 py-2 outline-none text-sm font-roboto text-gray-500"
        />
        <div></div>
      </div>
      {/* Third Section */}
      <div></div>
    </div>
  );
};

export default Chat;
