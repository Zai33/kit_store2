import React from "react";
import TitleBar from "../Components/TitleBar";
import LeftSideBar from "../Components/LeftSideBar";
// import RightSideBar from "../Components/RightSideBar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <TitleBar />
      <div>
        <LeftSideBar />
        {/* <RightSideBar /> */}
      </div>
    </div>
  );
};

export default Home;
