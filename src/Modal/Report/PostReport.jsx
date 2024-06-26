import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Close } from "@mui/icons-material";
import { buttonClick } from "../../animation";

const PostReport = ({ onClose }) => {
  const [selectOption, setSelectOption] = useState("");
  const [otherText, setOtherText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectOption(value);
    if (value !== "Other") {
      setOtherText("");
    }
  };

  const handleTextChange = (e) => {
    setOtherText(e.target.value);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!setSelectOption) {
      setError("Please Select an option!");
      return;
    }

    const data = {
      selectOption,
      otherText: selectOption === "Other" ? otherText : "",
    };

    try {
      await axios.post("http://192.168.1.14:3000/kids/reports", data);
      alert("Report Submitted Successfully");
      onClose();
    } catch (error) {
      console.error("There was an error submitting the report!", error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        if (error.response.status === 500) {
          setError(
            "An internal server error occurred. Please try again later."
          );
        } else {
          // Handle other non-500 errors
          setError(
            "There was an error submitting your report. Please try again later."
          );
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
        setError(
          "No response received from the server. Please check your internet connection and try again."
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error setting up the request:", error.message);
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className=" fixed z-50 top-36 left-[550px] max-w-[450px] h-fit px-8 py-4 gap-y-4 flex flex-col items-center justify-center bg-slate-300 bg-opacity-0 rounded-lg shadow-md shadow-blue-400 backdrop:filter backdrop-blur-lg">
      <div className=" flex flex-col gap-y-3">
        <div className=" flex justify-between">
          <h3 className=" font-roboto text-2xl font-bold">
            Please select a problem
          </h3>
          <motion.div
            {...buttonClick}
            onClick={onClose}
            className=" rounded-full bg-white shadow-md shadow-blue-400 w-fit h-fit p-[2px] cursor-pointer"
          >
            <Close />
          </motion.div>
        </div>
        <p>
          If someone is in immediate danger,get help before reporting to our
          system.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-start justify-center gap-y-3"
      >
        <div>
          <label>
            <input
              type="radio"
              value="It contains inaccurate information"
              checked={selectOption === "It contains inaccurate information"}
              onChange={handleChange}
            />{" "}
            It contains inaccurate information
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="It is inappropriate"
              checked={selectOption === "It is inappropriate"}
              onChange={handleChange}
            />{" "}
            It is inappropriate
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="It is sexually explict"
              checked={selectOption === "It is sexually explict"}
              onChange={handleChange}
            />{" "}
            It is sexually explict
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="It contains spam"
              checked={selectOption === "It contains spam"}
              onChange={handleChange}
            />{" "}
            It contains spam
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Other"
              checked={selectOption === "Other"}
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>
        {selectOption === "Other" && (
          <div>
            <textarea
              placeholder="Please enter your proble"
              style={{
                width: "100%",
                height: "100px",
                marginTop: "10px",
                padding: "8px 16px",
                outline: "none",
              }}
              value={otherText}
              onChange={handleTextChange}
              className=" rounded-md shadow-md shadow-blue-400 justify-center"
            ></textarea>
          </div>
        )}
        {error && <p className=" text-red-500">{error}</p>}
        <button
          type="submit"
          className=" px-4 py-2 bg-green-500 rounded-md text-white border-none ml-20"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostReport;
