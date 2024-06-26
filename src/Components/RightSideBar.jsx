import React, { useState } from "react";
import { FaBook, FaRedhat } from "react-icons/fa";
import { IoIosShirt, IoMdBed } from "react-icons/io";
import { TiWatch } from "react-icons/ti";
import { MdTableRestaurant, MdToys } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { GiBabyBottle } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animation";
import { Backpack, Stroller } from "@mui/icons-material";

const RightSideBar = () => {
  const [isActiveCategory, setIsActiveCategory] = useState(null);
  const [isActiveAge, setIsActiveAge] = useState(null);

  const activeHandler = (id) => {
    setIsActiveCategory((prev) => (prev === id ? null : id));
  };

  const ageActiveHandler = (id) => {
    setIsActiveAge((prev) => (prev === id ? null : id));
  };

  const categories = [
    {
      id: 1,
      link: "All",
      icon: <CgMenuGridR size={25} />,
    },
    {
      id: 2,
      link: "Clothes",
      icon: <IoIosShirt size={25} />,
    },
    {
      id: 3,
      link: "Hats",
      icon: <FaRedhat size={25} />,
    },
    {
      id: 4,
      link: "Shoes",
      icon: <TbShoe size={25} />,
    },
    {
      id: 5,
      link: "BackPack",
      icon: <Backpack size={25} />,
    },
    {
      id: 6,
      link: "Toys",
      icon: <MdToys size={25} />,
    },
    {
      id: 7,
      link: "Feeding",
      icon: <GiBabyBottle size={25} />,
    },
    {
      id: 8,
      link: "Funiture",
      icon: <MdTableRestaurant size={25} />,
    },
    {
      id: 9,
      link: "Accessoris",
      icon: <TiWatch size={25} />,
    },
    {
      id: 10,
      link: "Books",
      icon: <FaBook size={25} />,
    },
    {
      id: 11,
      link: "Vehicle",
      icon: <Stroller size={25} />,
    },
    {
      id: 12,
      link: "Bedding",
      icon: <IoMdBed size={25} />,
    },
  ];

  const ageRate = [
    {
      id: 1,
      link: " 0 - 3 ",
    },
    {
      id: 2,
      link: " 3  - 6 ",
    },
    {
      id: 3,
      link: " 6 - 9 ",
    },
    {
      id: 4,
      link: " 9 - 12 ",
    },
    {
      id: 5,
      link: " 12 - 15 ",
    },
    {
      id: 6,
      link: " above 15",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center h-full px-8 py-4 shadow-md shadow-slate-400">
      <p className=" text-xl text-emerald-500">
        <span className=" text-3xl text-teal-500 font-bold"> Categories</span>
      </p>

      <div className=" grid grid-cols-2 gap-4 w-full h-fit mt-4 rounded-md px-2 py-2">
        {categories.map(({ id, link, icon }) => (
          <motion.div
            {...slideTop}
            {...buttonClick}
            onClick={() => activeHandler(id)}
            key={id}
            className={`w-[150px] h-full rounded-md p-3 cursor-pointer shadow-md shadow-slate-400 ${
              isActiveCategory === id
                ? "bg-violet-700"
                : "bg-gradient-to-r from-sky-300 to-blue-500"
            }`}
          >
            <motion.div
              {...slideTop}
              className=" flex items-start justify-center gap-2 px-4 text-white"
            >
              <div>{icon}</div>
              <p>{link}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <span className=" text-3xl text-teal-500 font-bold mt-3"> Age Rate</span>

      <div className=" grid grid-cols-2 gap-4 w-full h-fit mt-4 rounded-md px-2 py-2">
        {ageRate.map(({ id, link }) => (
          <motion.div
            {...slideTop}
            {...buttonClick}
            key={id}
            onClick={() => ageActiveHandler(id)}
            className={`w-[150px] h-full rounded-md p-3 cursor-pointer shadow-md shadow-slate-400 ${
              isActiveAge === id
                ? "bg-violet-700"
                : "bg-gradient-to-r from-sky-300 to-blue-500"
            } `}
            // className=" w-[150px] h-full bg-sky-400 rounded-md p-3 cursor-pointer shadow-md shadow-slate-400 focus:bg-violet-700"
          >
            <motion.div
              {...slideTop}
              className=" flex items-start justify-center gap-2 px-4 text-white"
            >
              <p className=" font-bold">{link}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
