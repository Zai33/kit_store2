import React, { useEffect, useState } from "react";
import { Close, Edit } from "@mui/icons-material";
import { getImageUrl } from "../Api/Post";

const EditProfile = ({ user, onSave, onClose }) => {
  const [userImageUrl, setUserImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      if (user.image) {
        try {
          const imageUrl = await getImageUrl(user.image);
          setUserImageUrl(imageUrl);
        } catch (error) {
          console.error("Failed to fetch image", error);
        }
      }
    };
    fetchImage();
  }, [user.image]);

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",
  });
  const handleChagne = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setImagePreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = new FormData();
    profileData.append("name", formData.name);
    profileData.append("email", formData.email);
    profileData.append("phone", formData.phone);
    profileData.append("address", formData.address);
    if (selectedImage) {
      profileData.append("image", selectedImage);
    }
    onSave(profileData, user._id);
  };

  return (
    <div className=" w-full h-full fixed top-0 left-0 flex items-center justify-center bg-slate-300 bg-opacity-50">
      <div className="bg-white p-6 px-8 rounded-lg shadow-lg w-[420px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className=" font-noto text-2xl font-bold">Edit Profile</h3>
          <div className=" bg-primary rounded-full p-1">
            <Close
              onClick={onClose}
              className=" text-black font-bold cursor-pointer"
            />
          </div>
        </div>
        <div className=" relative mb-4">
          <label htmlFor="imageUpload">
            <img
              src={
                imagePreviewUrl ||
                userImageUrl ||
                require("../Assets/img/avatar.png")
              }
              alt="profileimg"
              className=" w-28 h-28 mx-auto rounded-full"
            />
            <div className="absolute top-20 bg-gray-400 rounded-full right-32 cursor-pointer p-1">
              <Edit className=" text-white" />
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center justify-center gap-y-4 mt-4"
        >
          <div className=" flex items-center justify-center gap-x-8">
            <label htmlFor="name" className=" mr-3">
              Name
            </label>
            <input
              type="text"
              className=" px-4 py-2 w-[264px] rounded-md outline-none shadow-md shadow-blue-400"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChagne}
            />
          </div>
          <div className=" flex items-center justify-center gap-x-8">
            <label htmlFor="email" className=" mr-3">
              Email
            </label>
            <input
              type="email"
              className=" px-4 py-2 w-[264px] rounded-md outline-none shadow-md shadow-blue-400"
              id="name"
              name="email"
              value={formData.email}
              onChange={handleChagne}
            />
          </div>
          <div className=" flex items-center justify-center gap-x-8">
            <label htmlFor="phno" className=" mr-3">
              Phone
            </label>
            <input
              type="tel"
              className=" px-4 py-2 w-[264px] rounded-md outline-none shadow-md shadow-blue-400"
              id="phno"
              name="phone"
              value={formData.phone}
              onChange={handleChagne}
            />
          </div>
          <div className=" flex items-center justify-center gap-x-8">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className=" px-4 py-2 w-[264px] rounded-md outline-none shadow-md shadow-blue-400"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChagne}
            />
          </div>
          <button
            type="submit"
            className=" px-8 py-2 text-white bg-blue-400 rounded-lg shadow-md shadow-blue-400 hover:bg-blue-700"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
