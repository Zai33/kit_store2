import {
  FaEnvelope,
  FaFacebookMessenger,
  FaHome,
  FaPlus,
  FaSave,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImageUrl } from "../Api/Post";
import { useEffect, useState } from "react";

const LeftSideBar = () => {
  const [userImageUrl, setUserImageUrl] = useState("");
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (userInfo.image) {
          const userImage = await getImageUrl(userInfo.image);
          setUserImageUrl(userImage);
        } else {
          setUserImageUrl(require("../Assets/img/avatar.png"));
        }
      } catch (error) {
        console.log("faild to fetch image", error);
      }
    };
    fetchImages();
  });

  const links = [
    {
      id: 1,
      text: "Home",
      link: "home",
      icon: <FaHome />,
    },
    {
      id: 2,
      text: "Create",
      link: "postupload",
      icon: <FaPlus />,
    },
    {
      id: 3,
      text: "Following",
      link: "following",
      icon: <FaUserFriends />,
    },
    {
      id: 4,
      text: "Chat",
      link: "chat",
      icon: <FaFacebookMessenger />,
    },
    {
      id: 5,
      text: "Search",
      link: "search",
      icon: <FaSearch />,
    },
    {
      id: 6,
      text: "Saved",
      link: "save",
      icon: <FaSave />,
    },
    {
      id: 7,
      text: "Contact Us",
      link: "contactus",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className=" bg-white sm:flex md:w-[200px] h-screen lg:w-[300px] px-1 py-3 fixed flex-col items-start justify-normal hidden shadow-md shadow-slate-400">
      <p className=" text-5xl font-beauty font-bold text-cyan-700">
        Kiddo Kloset
      </p>
      {/* Uppper */}

      <ul className="flex flex-col px-0 py-2 w-full">
        {links.map(({ id, text, icon, link }) => (
          <li
            key={id}
            className=" flex items-start px-8 py-4 cursor-pointer hover:underline rounded-lg text-black hover:text-white hover:bg-gradient-to-r from-blue-400 to-sky-300"
          >
            <NavLink
              to={link}
              className=" hidden md:flex gap-x-8 items-center p-1 lg:text-xl font-noto "
            >
              <div className="">{icon}</div>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className=" divider my-0 py-0 h-1 text-gray-500 font-bold" />
      {/* Lower */}
      <NavLink
        to={"/profile"}
        className="w-full flex items-center justify-normal gap-x-4 mt-2 rounded-md p-4 cursor-pointer hover:bg-blue-500 hover:text-white hover:underline"
      >
        <div className=" w-10 rounded-full">
          <img
            src={userImageUrl}
            alt=""
            className=" h-10 object-cover rounded-full"
          />
        </div>
        <p className="font-noto text-lg text-black">Profile</p>
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
