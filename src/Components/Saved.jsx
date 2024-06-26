import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getImageUrl } from "../Api/Post";

const Saved = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [savedPosts, setSavedPosts] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.11:3000/kids/saves/items/${userInfo._id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setSavedPosts(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("Errorfetching Saveposts", error);
      }
    };
    fetchPosts();
  }, [userInfo]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const postImages = await Promise.all(
          savedPosts.map(async (post) => {
            if (post.images && post.images.length > 0) {
              const postImage = await getImageUrl(post.images[0]);
              return postImage;
            }
            return null;
          })
        );
        setImage(postImages);
      } catch (error) {
        console.error("Error fetchng images", error);
      }
    };
    fetchImages();
  });

  return (
    <div className="bg-white w-full h-screen">
      <p className=" font-noto text-2xl font-bold ml-4  mt-4">Saved Posts</p>
      {savedPosts.length > 0 ? (
        <div className=" grid grid-cols-4 gap-4 m-4">
          {savedPosts.map((post, index) => (
            <div
              key={post._id}
              className=" rounded-lg shadow-md w-[250px] h-[350px] flex flex-col"
            >
              {post.images.length > 0 && (
                <img
                  src={image[index]}
                  alt=""
                  className=" object-fill rounded-lg"
                />
              )}
              <div className=" flex items-center justify-between px-4">
                <div className=" mt-4">
                  <p>{post.name}</p>
                  <p>{post.price}</p>
                  <p>{post.availability}</p>
                </div>
                <FaRegBookmark size={25} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" text-3xl font-noto align-middle">
          No Posts have been saved
        </div>
      )}
    </div>
  );
};

export default Saved;
