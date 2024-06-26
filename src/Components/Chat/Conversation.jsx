import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center text-gray-500 hover:text-white hover:bg-sky-500 rounded-md py-2 px-1 cursor-pointer">
        <div className=" avatar online">
          <div className=" w-12 rounded-full">
            <img src={require("../../Assets/img/boy.png")} alt="" />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className=" flex gap-3 justify-between">
            <p className=" font-bold">Kyaw Gyi</p>
            <span>time</span>
          </div>
        </div>
      </div>
      <div className=" divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
