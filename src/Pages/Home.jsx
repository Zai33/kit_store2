import React from "react";
import MiddlePart from "../Components/MiddlePart";
import RightSideBar from "../Components/RightSideBar";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-y-auto ml-[120px] hide-scrollbar">
        <MiddlePart />
      </div>
      <div className="fixed right-0 top-0 h-full">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
