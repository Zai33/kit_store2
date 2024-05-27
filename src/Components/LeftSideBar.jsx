import {
  FaArrowDown,
  FaHome,
  FaPlus,
  FaSave,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-scroll";

const LeftSideBar = () => {
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
      icon: <FaArrowDown size={25} />,
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-blue-500 to bg-cyan-400 sm:flex md:w-[200px] lg:w-[300px] px-6 py-6 fixed  flex-col items-center justify-normal hidden">
      {/* Uppper */}

      <ul className="flex flex-col">
        {links.map(({ id, link, icon }) => (
          <li
            key={id}
            className=" flex items-center  gap-8 py-4 cursor-pointer hover:scale-100 duration-200 hover:underline text-white"
          >
            <div className=" text-white">{icon}</div>
            <Link
              to={link}
              className=" hidden md:block lg:text-xl text-white font-bold "
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div className="flex flex-col items-center justify-center gap-y-6 md:gap-y-8">
        <div className=" flex flex-row items-center justify-between gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <FaHome size={20} className=" text-white" />
          <p className=" hidden md:block md:text-xl font-bold text-white">
            Home
          </p>
        </div>
        <div className=" flex flex-row items-center justify-evenly gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <FaPlus size={25} className=" text-white" />
          <p className=" text-white hidden md:block md:text-2xl font-bold">
            Create
          </p>
        </div>
        <div className=" flex flex-row items-center justify-evenly gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <FaUserFriends size={25} className=" text-white" />
          <p className=" text-white hidden md:block md:text-2xl font-bold">
            Following
          </p>
        </div>
        <div className=" flex flex-row items-center justify-evenly gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <FaSave size={25} className=" text-white" />
          <p className=" text-white hidden md:block md:text-2xl font-bold">
            Saved
          </p>
        </div>
        <div className=" flex flex-row items-center justify-evenly gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <p className=" text-white hidden md:block md:text-2xl font-bold">
            Contact Us
          </p>
        </div>
        <div className=" flex flex-row items-center justify-evenly gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <p className=" text-white hidden md:block md:text-2xl font-bold">
            About Us
          </p>
        </div>
        <div className=" flex flex-row items-center justify-evenly gap-x-4 cursor-pointer hover:scale-105 duration-105">
          <p className=" text-white hidden md:block md:text-2xl font-bold">
            See More...
          </p>
        </div>
      </div> */}
      <hr className=" text-gray-700 text-2xl hidden md:block" />
      {/* Lower */}
      <div className="hidden md:block hover:scale-105 duration-100 mt-6">
        <div className="bg-slate-300 rounded-lg shadow-md shadow-gray-400 px-6 md:px-8 py-6 md:py-8 items-center flex-col justify-between hidden lg:flex md:h-[160px]  md:w-[250px]">
          <span>CopyRight@ 2024</span>
          <div className="flex flex-col items-center">
            <p className=" text-xs md:text-sm">All Righs reserved By</p>
            <p className=" text-xs md:text-sm">San Development Organization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
