import React from "react";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className=" flex flex-col flex-1 w-full">
      <>
        {/* Header */}
        <div className=" bg-slate-500 px-4 py-2 mb-2 w-full">
          <span className=" label-text">To: </span>
          <span className=" text-white font-noto font-bold">Kyaw Gyi</span>
        </div>
        <Messages />
        {/* <MessageInput /> */}
      </>
    </div>
  );
};

export default MessageContainer;
