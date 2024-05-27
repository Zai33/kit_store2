import React from "react";
import { motion } from "framer-motion";
import { buttonClick } from "../animation/index";

const ReachOut = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 bg-blue-500 w-full mt-10 px-8 py-8">
      <div className="flex items-center justify-center gap-4">
        <p className=" font-bold">________________</p>
        <p className=" font-dancing text-3xl font-bold">Connect with us</p>
        <p className=" font-bold">________________</p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-y-4 mt-4">
        <p className=" text-5xl font-bold font-roboto">
          Feel Free to Reach Out
        </p>
        <p className=" text-lg font-roboto">
          Feel free to contact us for any assistance you may need.
        </p>
      </div>
      <div className=" flex items-center justify-center gap-x-20">
        <div className=" w-[400px] h-[400px] rounded-lg shadow-lg shadow-blue-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.623562757758!2d96.1230479103472!3d16.845020818136828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19524b390c47b%3A0x17e7f578d7814858!2sSan%20Development!5e0!3m2!1sen!2smm!4v1716785104119!5m2!1sen!2smm"
            width="400"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          action=""
          method="get"
          className=" flex flex-col items-start justify-center gap-y-4 mt-4 "
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="user_name">Full Name</label>
            <input
              type="text"
              id="user_name"
              name="fullname"
              required
              autoSave="false"
              className=" px-4 py-2 rounded-lg outline-none w-[300px] shadow-lg shadow-purple-400"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className=" px-4 py-2 rounded-lg outline-none w-[300px] shadow-lg shadow-purple-400"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={26}
              rows={5}
              className=" rounded-lg outline-none px-4 py-2 shadow-lg shadow-purple-400"
            ></textarea>
          </div>
          <motion.div
            {...buttonClick}
            className=" bg-white rounded-md w-32 cursor-pointe ml-[82px] shadow-md shadow-purple-500 hover:bg-green-500"
          >
            <button className=" px-8 py-2">Request</button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ReachOut;
