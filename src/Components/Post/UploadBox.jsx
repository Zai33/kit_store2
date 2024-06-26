import React, { useEffect, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getImageUrl } from "../../Api/Post";

const UploadBox = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [userImageUrl, setUserImageUrl] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (userInfo.image) {
          const userImage = await getImageUrl(userInfo.image);
          setUserImageUrl(userImage);
        } else {
          setUserImageUrl(require("../../Assets/img/avatar.png"));
        }
      } catch (error) {
        console.log("Faild to fetch image", error);
      }
    };
    fetchImages();
  }, [userInfo]);

  return (
    <div className=" flex items-center justify-center px-8 py-2 gap-x-6 bg-slate-300 w-[550px] rounded-lg shadow-md shadow-blue-400 cursor-pointer">
      <div className=" w-12 h-10  rounded-full shadow-md shadow-blue-400">
        <img
          src={userImageUrl}
          alt=""
          className=" w-12 h-10 rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full bg-white"
        />
      </div>
      <div>
        <FaRegPlusSquare size={25} className=" text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default UploadBox;
