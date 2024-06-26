import React, { useEffect, useState } from "react";
// import ActiveUser from "./ActiveUser";
// import { getImageUrl } from "../Api/Post";
import UploadBox from "./Post/UploadBox";
import Post from "./Post/Post";
import { fetchPost } from "../Api/Post";
import { useSelector } from "react-redux";

const MiddlePart = () => {
  const [posts, setPosts] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPost(userInfo._id);
        setPosts(data.result);
        console.log(data.result);
      } catch (error) {
        console.error("Error fetching post data", error);
      }
    };
    getPost();
  }, [userInfo._id]);

  // console.log("api", posts);
  return (
    <div className=" w-3/5 bg-white flex flex-col gap-y-4 p-4">
      {/* <ActiveUser /> */}
      <UploadBox />
      {/* <Post /> */}
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default MiddlePart;
