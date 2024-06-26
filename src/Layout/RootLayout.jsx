import React from "react";
import LeftSideBar from "../Components/LeftSideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full flex">
      <LeftSideBar />
      <section className="flex flex-1 h-full ml-[300px]">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
