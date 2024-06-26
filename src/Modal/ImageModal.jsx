import { Close } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-4 rounded shadow-lg relative">
        <button
          className="absolute  bg-red-500 rounded-full -top-2 -right-2 text-black"
          onClick={onClose}
        >
          <Close />
        </button>
        <img src={imgSrc} alt="Enlarged" className="max-w-[400px]" />
      </div>
    </div>
  );
};

export default ImageModal;
