import React from "react";
// import { AiTwotoneMessage } from "react-icons/ai";
// import { Link } from "react-router-dom";
import SideBar from "../Components/Chat/SideBar";
import MessageContainer from "../Components/Chat/MessageContainer";

const Chat = () => {
  return (
    <div className=" flex h-screen">
      {/* First section */}
      {/* <div className=" h-screen flex flex-col items-center justify-between py-4 px-2 bg-blue-400">
        <AiTwotoneMessage size={25} className=" text-white outline-none" />
        <Link
          to="/profile"
          className=" rounded-full shadow-md shadow-blue-400 cursor-pointer hover:scale-105 duration-150"
        >
          <img
            src={require("../Assets/img/boy.png")}
            alt=""
            className=" object-cover w-12 h-12"
          />
        </Link>
      </div> */}
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Chat;
