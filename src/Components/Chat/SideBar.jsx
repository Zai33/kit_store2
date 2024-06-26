import React from "react";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const SideBar = () => {
  return (
    <div className=" px-4 py-4 w-[350px] border-r border-slate-400 flex flex-col">
      <SearchInput />
      <div className=" divider px-3"></div>
      <Conversations />
    </div>
  );
};

export default SideBar;
