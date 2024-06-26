import { Close } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";

const MessageReport = ({ onCloseModal }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectOption) {
      setError("Please Select an option");
      return;
    }
    const data = {
      selectOption,
      otherText: selectOption === "Other" ? otherText : "",
    };

    try {
      await axios.post("", data);
      alert("Report submitted successfully");
    } catch (error) {
      console.error("There was an error submmting reports", error);
      setError("There was an error submitting your report.");
    }
  };
  return (
    <div className=" fixed z-10 top-0 left-0 max-w-[450px] h-fit px-8 py-4 gap-y-4 flex flex-col items-center justify-center rounded-lg bg-slate-300 bg-opacity-50 shadow-md shadow-blue-400">
      <div>
        <div className=" flex justify-between">
          <h3 className=" font-roboto text-2xl font-bold">
            Please select a problem
          </h3>
          <div
            onClick={onCloseModal}
            className=" rounded-full bg-white shadow-md shadow-blue-400 w-fit h-fit p-[2px] cursor-pointer"
          >
            <Close />
          </div>
        </div>
        <p className=" font-noto mt-3">
          If someone is in immediate danger,get help before reporting to our
          system.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-start justify-center gap-y-2"
      >
        <div onChange={handleChange}>
          <label>
            <input
              type="radio"
              value="Harassment"
              name="selectOption"
              checked={selectOption === "Harassment"}
            />{" "}
            Harassment
          </label>
        </div>
        <div onChange={handleChange}>
          <label>
            <input
              type="radio"
              value="Hate Speech"
              name="selectOption"
              checked={selectOption === "Hate Speech"}
            />{" "}
            Hate Speech
          </label>
        </div>
        <div onChange={handleChange}>
          <label>
            <input
              type="radio"
              name="selectOption"
              value="Scam"
              checked={selectOption === "Scam"}
            />{" "}
            Scam
          </label>
        </div>
        <div onChange={handleChange}>
          <label>
            <input
              name="selectOption"
              type="radio"
              value="Sharing inapporiate things"
              checked={selectOption === "Sharing inapporiate things"}
            />{" "}
            Sharing inapporiate things
          </label>
        </div>
        <div onChange={handleChange}>
          <label>
            <input
              type="radio"
              name="selectOption"
              value="Other"
              checked={selectOption === "Other"}
            />{" "}
            Other
          </label>
        </div>
        {selectOption === "Other" && (
          <div>
            <textarea
              placeholder="Please enter your problem"
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
          className=" px-4 py-2 bg-green-500 rounded-md text-white border-none ml-14"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MessageReport;
