import React, { useState } from "react";
import {
  FaBars,
  FaFacebookMessenger,
  FaSearch,
  FaUser,
  FaPlus,
  FaHome,
  FaSave,
  FaUserFriends,
  FaTimes,
} from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import {} from "react-icons/pi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animation";

const TitleBar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
      icon: <FaHome size={25} />,
    },
    {
      id: 2,
      link: "Create",
      icon: <FaPlus size={25} />,
    },
    {
      id: 3,
      link: "Following",
      icon: <FaSave size={25} />,
    },
    {
      id: 4,
      link: "Saved",
      icon: <FaUserFriends size={25} />,
    },
    {
      id: 5,
      link: "Contact Us",
      icon: <FaHome size={25} />,
    },
    {
      id: 6,
      link: "About Us",
      icon: <FaHome size={25} />,
    },
    {
      id: 7,
      link: "See More...",
      icon: <FaHome size={25} />,
    },
  ];
  const [isLogin, isSetLogin] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between h-[60px] bg-gradient-to-r from-cyan-500 to-blue-400 w-full px-4 md:px-8 fixed">
      <motion.div
        {...slideTop}
        className="flex items-center justify-center gap-4"
      >
        <div
          onClick={() => setNav(!nav)}
          className=" text-white sm:hidden cursor-pointer"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        {nav && (
          <ul className=" flex flex-col absolute top-[60px] left-0 z-10 bg-slate-500 w-[200px] rounded-br-md cursor-pointer">
            {links.map(({ id, link, icon }) => (
              <li
                key={id}
                className=" flex items-center content-center gap-8 px-4 py-4 hover:scale-105 duration-100"
              >
                <div className=" text-white">{icon}</div>
                <Link
                  to={link}
                  onClick={() => setNav(!nav)}
                  className=" text-white"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <p className=" text-2xl md:text-3xl font-bold text-white">
          Kiddo Kloset
        </p>
      </motion.div>
      {/* Search Bar */}
      <motion.div
        {...slideTop}
        className=" items-center justify-evenly gap-2 bg-white relative rounded-full shadow-sm shadow-teal-800 hidden sm:flex"
      >
        <input
          type="search"
          placeholder="search"
          className="px-4 md:px-6 py-2 rounded-full shadow-md shadow-teal-400 w-[200px] md:w-[300px] lg:w-[400px] text-slate-400 outline-none"
        />
        <FaSearch
          size={20}
          className=" text-slate-400 font-light absolute right-4"
        />
      </motion.div>
      {/* # Menu */}
      <motion.div
        {...slideTop}
        className="flex items-center justify-center gap-2 md:gap-4"
      >
        <div className="flex relative">
          <FaFacebookMessenger
            size={25}
            className=" text-white hover:scale-110 duration-150 cursor-pointer"
          />
          <div className=" flex items-center justify-center w-4 h-4 rounded-full bg-red-500 absolute -top-2 -right-1">
            <p className=" text-white text-xs md:text-sm">2</p>
          </div>
        </div>

        <motion.div {...slideTop} className="flex relative">
          <MdNotifications
            size={30}
            className=" text-white hover:scale-110 duration-150 cursor-pointer"
          />
          <div className=" flex items-center justify-center w-4 h-4 rounded-full bg-red-500 absolute -top-1 -right-0">
            <p className=" text-white text-xs md:text-sm">2</p>
          </div>
        </motion.div>

        {isLogin ? (
          <FaUser
            size={25}
            className=" text-white hover:scale-110 duration-150 cursor-pointer"
          />
        ) : (
          <>
            <motion.button
              {...buttonClick}
              className=" px-2 md:px-4 py-1 md:py-2 bg-teal-600 rounded-md text-white hover:bg-sky-800 hover:scale-105 duration-100 cursor-pointer"
              onClick={() => isSetLogin(!isLogin)}
            >
              Login
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default TitleBar;
