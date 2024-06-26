import React, { useEffect, useState } from "react";
import { FaRegBookmark, FaHeart, FaRegHeart, FaBookmark } from "react-icons/fa";
import PostReport from "../../Modal/Report/PostReport";
import { buttonClick, slideTop } from "../../animation/index";
import { motion } from "framer-motion";
import { FaEllipsis, FaRegComment, FaXmark } from "react-icons/fa6";
import PostDetail from "../../Modal/PostDetail";
import { getImageUrl } from "../../Api/Post";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSaveList,
  deleteFromSaveList,
} from "../../Redux/features/saveList";
import Profile from "../Profile";

const Post = ({ post }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const savedPosts = useSelector((state) => state.saveList.saveListArr);
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const [isOpenReport, setIsOpenReport] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [userImageUrl, setUserImageUrl] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setLikeCount(post.likeCount);

    const fetchImages = async () => {
      try {
        if (post.user.image) {
          const userImage = await getImageUrl(post.user.image);
          setUserImageUrl(userImage);
        } else {
          setUserImageUrl(require("../../Assets/img/avatar.png"));
        }

        if (post.images.length > 0) {
          const postImage = await getImageUrl(post.images[0]);
          setPostImageUrl(postImage);
        }
      } catch (error) {
        console.log("Failed to fetch images", error);
      }
    };
    fetchImages();
    setIsSaved(savedPosts.some((savedPost) => savedPost._id === post._id));
  }, [post, savedPosts]);

  const toggleSaved = async () => {
    setIsSaved((prev) => !prev);

    try {
      const response = await axios.post(
        `http://192.168.1.20:3000/kids/saves/saveProduct`,
        {
          user: userInfo._id,
          product: post._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (isSaved) {
        dispatch(deleteFromSaveList(post._id));
      } else {
        dispatch(addToSaveList(post));
      }
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error saving post", error);
      setIsSaved((prev) => !prev);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleModalOpen = () => {
    setIsOpenReport((prev) => !prev);
  };

  const handlePostOpen = () => {
    setIsOpenPost((prev) => !prev);
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked((prev) => !prev);
  };

  // console.log("post", post);
  return (
    <>
      <div
        key={post._id}
        // onClick={handlePostOpen}
        className="flex flex-col gap-y-1 bg-slate-200 rounded-lg shadow-md shadow-blue-200 w-[550px] h-fit"
      >
        {/* Menu Bar */}
        <div className=" flex items-center justify-between  px-6 py-2 ">
          <div className=" flex items-center justify-center gap-x-6">
            <img
              src={userImageUrl}
              alt=""
              onClick={() => (
                <>
                  <Profile id={post.user._id} />
                </>
              )}
              className=" w-12 h-12 rounded-full shadow-md shadow-blue-300 cursor-pointer"
            />

            <div>
              <h3 className=" text-xl font-semibold font-roboto">
                {post.user ? post.user.name : "Anonymonus"}
              </h3>

              <p className=" font-noto">{post.createdAt}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <FaEllipsis
              size={25}
              onMouseEnter={() => setIsOption(true)}
              className=" cursor-pointer text-gray-700"
            />
            {isOption && (
              <motion.div
                {...buttonClick}
                {...slideTop}
                onMouseLeave={() => setIsOption(false)}
                onClick={handleModalOpen}
                className=" absoluate px-2 py-1 bg-red-500 text-sm rounded-md text-whitecursor-pointer text-white"
              >
                Report
              </motion.div>
            )}
            <FaXmark size={25} className=" cursor-pointer text-gray-700" />
          </div>
        </div>
        {/* Description  */}
        <p className=" px-6 py-0">{post.name}</p>
        <p className=" px-6 py-0">{post.price} Kyats</p>
        {/* <p className=" px-6 py-0">{post.category}</p> */}
        {/* Image Section  */}
        <div className=" relative shadow-md shadow-blue-300">
          <img
            src={postImageUrl}
            alt=""
            className=" object-cover w-full max-h-[400px]"
          />
        </div>
        {/* like & comment  */}
        <div className=" flex items-center justify-between px-6 py-2">
          <div className=" flex items-center justify-center gap-x-6">
            <button onClick={toggleLike}>
              {/* <FaHeart size={25} className=" cursor-pointer text-slate-800" /> */}
              {isLiked ? (
                <FaHeart size={25} className=" text-red-500 cursor-pointer" />
              ) : (
                <FaRegHeart size={25} className=" cursor-pointer" />
              )}
            </button>
            <FaRegComment size={25} className=" cursor-pointer" />
          </div>
          <button onClick={toggleSaved}>
            {isSaved ? (
              <FaBookmark size={25} className=" text-blue-500 cursor-pointer" />
            ) : (
              <FaRegBookmark size={25} className=" cursor-pointer" />
            )}
          </button>
        </div>

        <div className=" flex items-center justify-between">
          <p className=" px-6 py-0">
            <span>{post.likeCount}</span>
            {"  "} likes
          </p>
          <p
            onClick={handlePostOpen}
            className=" cursor-pointer underline px-6 mb-2"
          >
            View all {post.commentCount} comments
          </p>
        </div>
      </div>

      {isOpenReport && <PostReport onClose={handleModalOpen} />}
      {isOpenPost && <PostDetail data={post} onClose={handlePostOpen} />}
    </>
  );
};

export default Post;
