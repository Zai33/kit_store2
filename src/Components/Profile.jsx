import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlusSquare } from "react-icons/fa";
import { buttonClick, slideTop } from "../animation/index";
import { Edit, Logout, Message } from "@mui/icons-material";
import EditProfile from "../Modal/EditProfile";
import axios from "axios";
import { getImageUrl } from "../Api/Post";
import LogoutModal from "../Modal/LogoutModal";
import ImageModal from "../Modal/ImageModal";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/features/UserSlice";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [logoutModal, setLogoutModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userImageUrl, setUserImageUrl] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const reduxUserInfo = useSelector((state) => state.user.userInfo);
  const id = reduxUserInfo._id;

  useEffect(() => {
    setUserInfo(reduxUserInfo);
  }, [reduxUserInfo]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.11:3000/kids/products/posts/user/${reduxUserInfo._id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setPosts(response.data.result);
        console.log(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error(`Failed to fetch profile data`, error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [reduxUserInfo._id]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (reduxUserInfo.image) {
          const userImage = await getImageUrl(reduxUserInfo.image);
          setUserImageUrl(userImage);
        } else {
          setUserImageUrl(require("../Assets/img/avatar.png"));
        }
        const postImages = await Promise.all(
          posts.map(async (post) => {
            if (post.images && post.images.length > 0) {
              const postImage = await getImageUrl(post.images[0]);
              return postImage;
            }
            return null;
          })
        );
        setPostImageUrl(postImages);
      } catch (error) {
        console.log("Failed to fetch images", error);
      }
    };
    if (posts.length > 0) {
      fetchImages();
    }
  }, [posts, reduxUserInfo.image]);

  if (loading) {
    return (
      <div className=" items-center justify-center text-5xl block">
        Loading....
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const isOwnProfile = true;

  const handleLogoutModal = () => {
    setLogoutModal((prev) => !prev);
  };

  const handleImageModal = () => {
    setImageModal((prev) => !prev);
  };

  const handleEditProfile = () => {
    setEditProfileModal((prev) => !prev);
  };

  const editProfile = async (profileData, id) => {
    try {
      const response = await axios.patch(
        `http://192.168.1.11:3000/kids/users/${id}`,
        profileData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to update profile ");
      }
      // setUserInfo({ ...reduxUserInfo, ...profileData });
      console.log("Profile update successfully", response.data);
      setEditProfileModal(false);
    } catch (error) {
      console.error("Error profile editing", error);
    }
  };

  console.log("edit", userInfo);
  return (
    <>
      <div className=" flex flex-col items-center justify-normal gap-8 px-16 py-8 bg-white shadow-md">
        {/* <EditProfile user={user} onSave={() => editProfile()} /> */}

        {/* Upper Section */}
        <div className=" flex items-center justify-center gap-x-32">
          <div className=" flex flex-col gap-y-4 items-center justify-centersss">
            <div
              onClick={handleImageModal}
              className=" w-40 h-40 rounded-full shadow-md shadow-blue-300 cursor-pointer"
            >
              <img
                src={userImageUrl}
                alt=""
                className=" w-40 h-40 rounded-full"
              />
            </div>
            <span className=" text-2xl">{userInfo.name}</span>
          </div>
          <div className=" flex flex-col items-start justify-center gap-y-4">
            <div className=" flex items-center justify-center gap-8 font-roboto">
              {isOwnProfile ? (
                <>
                  <motion.button
                    {...buttonClick}
                    onClick={handleEditProfile}
                    className=" px-4 py-2 rounded-lg shadow-md bg-blue-500 text-white shadow-blue-300 cursor-pointer hover:bg-blue-700"
                  >
                    <Edit />
                    Edit Profile
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    {...buttonClick}
                    className=" px-8 py-2 rounded-lg shadow-md flex items-center justify-center bg-blue-500 text-white shadow-blue-300 cursor-pointer hover:bg-blue-700 gap-1"
                  >
                    <FaPlusSquare size={20} />
                    Follow
                  </motion.button>
                </>
              )}
              {isOwnProfile ? (
                <>
                  <motion.button
                    {...buttonClick}
                    onClick={handleLogoutModal}
                    className=" px-[28px] py-2 rounded-lg shadow-md bg-red-500 text-white shadow-red-300 cursor-pointer hover:bg-red-700"
                  >
                    <Logout />
                    Logout
                  </motion.button>
                  {/* <LogoutModal
                onClose={() => handleCloseModal()}
                show={logoutModal}
              /> */}
                </>
              ) : (
                <>
                  <motion.button
                    {...buttonClick}
                    className=" px-[22px] py-2 rounded-lg shadow-md bg-blue-500 text-white shadow-blue-300 cursor-pointer hover:bg-blue-700"
                  >
                    <Message />
                    Message
                  </motion.button>
                </>
              )}
            </div>
            <div className=" flex gap-10 text-lg">
              <span>{userInfo.postCount} Posts</span>
              <span>{userInfo.followerCount} Follower</span>
              <span>{userInfo.followingCount} Following</span>
            </div>
            <p>
              {" "}
              <span className=" mr-8">Phone</span> {userInfo.phone}
            </p>
            <p>
              {" "}
              <span className=" mr-5">Address</span> {userInfo.address}
            </p>
            <p>
              {" "}
              <span className=" mr-10">Email</span> {userInfo.email}
            </p>
          </div>
        </div>
        <hr
          style={{
            background: "gray",
            color: "gray",
            height: "2px",
            borderColor: "gray",
            width: "900px",
          }}
        />
        {/* Lower Section */}
        <div className=" flex-1 overflow-y-auto px-16 py-8">
          <div className=" grid grid-cols-3 gap-4">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <>
                  <div
                    key={post._id}
                    {...slideTop}
                    className=" rounded-md w-[300px] hover:opacity-70 shadow-md shadgray-400"
                  >
                    <img
                      src={postImageUrl[index]}
                      loading="lazy"
                      alt=""
                      className=" object-cover rounded-md"
                    />
                  </div>
                </>
              ))
            ) : (
              <>No posts available</>
            )}
          </div>
        </div>
      </div>
      {imageModal && (
        <ImageModal
          isOpen={imageModal}
          onClose={handleImageModal}
          imgSrc={userImageUrl}
        />
      )}
      {logoutModal && <LogoutModal onClose={handleLogoutModal} />}
      {editProfileModal ? (
        <EditProfile
          user={reduxUserInfo}
          onSave={editProfile}
          onClose={handleEditProfile}
        />
      ) : null}
    </>
  );
};

export default Profile;
