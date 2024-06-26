import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className=" chat-image avatar">
        <div className=" rounded-full w-10">
          <img src={require("../../Assets/img/boy.png")} alt="" />
        </div>
      </div>
      <div className={` chat-bubble text-white bg-blue-500`}>
        Hi! what's up?
      </div>
      <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:00
      </div>
    </div>
  );
};

export default Message;
