import React from "react";
import { FaHome } from "react-icons/fa";

const RightSideBar = () => {
  const categories = [
    {
      id: 1,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 2,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 3,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 4,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 5,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 6,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 7,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 8,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 9,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 10,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 11,
      link: "All",
      icon: <FaHome size={25} />,
    },
    {
      id: 12,
      link: "All",
      icon: <FaHome size={25} />,
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center h-full w-[350px] top-20 bg-slate-300 px-8 py-4">
      <p className=" text-xl text-emerald-500">
        Filter by
        <span className=" text-3xl text-teal-500 font-bold"> Categories</span>
      </p>

      <div className=" grid grid-cols-2 gap-4 bg-green-500 w-full h-full mt-8">
        <div className=" w-full h-20 bg-fuchsia-400 grid grid-cols-2">
          {categories.map(({ id, link, icon }) => (
            <div key={id}>
              <div>{icon}</div>
              <p>{link}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
