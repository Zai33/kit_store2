import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideTop } from "../animation";

const Profile = () => {
  return (
    <div>
      <motion.div className="flex items-center justify-start gap-8 bg-teal-500 w-full h-16 px-8 ">
        <FaArrowLeft
          {...slideTop}
          size={25}
          className=" text-gray-500 cursor-pointer"
        />
        <p {...slideTop} className=" text-3xl font-bold font-noto">
          Profile
        </p>
      </motion.div>
    </div>
  );
};

export default Profile;
