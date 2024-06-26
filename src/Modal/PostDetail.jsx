import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  FaBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa";
import { getImageUrl } from "../Api/Post";

const PostDetail = ({ data, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState([]);
  const [currenImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (data.user.image) {
          const userImage = await getImageUrl(data.user.image);
          setUserImage(userImage);
        }
        const urls = await Promise.all(
          data.images.map(async (image) => {
            const url = await getImageUrl(image);
            return url;
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Failed to fetch post detail", error);
      }
    };
    fetchImages();
  }, [data]);

  // console.log("Detal", data);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleSave = () => {
    setIsSaved((prev) => !prev);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };
  //  comm section
  const handleClick = (e) => {};

  return (
    <div className=" fixed z-50 w-[70%] h-[90%] bg-white backdrop-blur-md rounded-md flex top-10 left-56">
      {/* Left Side image */}
      <div className=" w-1/2 h-full relative">
        {data.images.length > 0 && (
          <img
            src={imageUrls[currenImageIndex]}
            alt="Bag"
            className=" w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        )}
        <div
          onClick={handlePrevImage}
          className=" w-fit p-2 rounded-full bg-white shadow-sm shadow-blue-300 absolute left-2 top-[320px] cursor-pointer  active:scale-110 duration-200"
        >
          <FaChevronLeft
            size={20}
            className=" z-10 text-gray-500 content-center"
          />
        </div>
        <div
          onClick={handleNextImage}
          className=" w-fit p-2 rounded-full bg-white shadow-sm shadow-blue-300 absolute right-2 top-[320px] cursor-pointer active:scale-110 duration-200"
        >
          <FaChevronRight size={20} className=" z-10 text-gray-500" />
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {imageUrls.map((_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 rounded-full ${
                index === currenImageIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
      {/* Top Bar */}
      <div className="flex flex-1 flex-col items-start justify-center px-4 py-2 mt-2">
        <div className=" flex w-full items-center justify-between">
          <div className=" flex gap-2 items-center">
            <div className=" avatar online rounded-full w-11">
              <img src={userImage} alt="" className=" rounded-full w-12 h-12" />
            </div>
            <p className=" font-semibold text-lg">{data.user.name}</p>
          </div>
          <Close
            onClick={onClose}
            className=" cursor-pointer hover:text-red-600"
          />
        </div>
        <div className=" divider h-1 my-0 py-2" />
        {/* Comment session */}
        <div className=" flex flex-col h-[70%] overflow-y-auto"></div>
        <div className=" divider h-1 my-0 py-2" />
        {/* Third Session */}
        <div className=" w-full flex flex-col gap-y-2">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-x-4">
              {/* <FaRegHeart size={25} className="" /> */}
              <button onClick={toggleLike}>
                {isLiked ? (
                  <FaHeart size={25} className=" text-red-500" />
                ) : (
                  <FaRegHeart size={25} />
                )}
              </button>
            </div>
            <button onClick={toggleSave}>
              {isSaved ? (
                <FaBookmark
                  size={25}
                  className=" text-gray-500 cursor-pointer"
                />
              ) : (
                <FaRegBookmark size={25} className=" cursor-pointer" />
              )}
            </button>
            {/* <FaRegBookmark size={25} /> */}
          </div>
          <div className="flex items-center gap-x-4">
            <p className=" font-bold">
              <span>{data.likeCount}</span> likes{" "}
            </p>
            <p className=" font-bold">{data.commentCount} Comments</p>
          </div>
        </div>
        <div className=" divider h-1 my-0 py-2" />
        {/* Post comments */}
        <div className=" flex items-center gap-x-4 w-full">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className="input w-full max-w-lg bg-white"
          />
          <button
            onClick={handleClick}
            className=" px-4 py-2 rounded-md bg-sky-500 text-white shadow-md shadow-sky-300 hover:bg-sky-700 cursor-pointer"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
