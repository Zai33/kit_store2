import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaSleigh, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getImageUrl } from "../../Api/Post";

const PostUpload = () => {
  const [selectOption, setSelectOption] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectAge, setSelectAge] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [price, setPrice] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [userImageUrl, setUserImageUrl] = useState("");
  const [available, setAvailable] = useState("available");
  const [success, setSuccess] = useState(false);

  const userInfo = useSelector((state) => state.user.userInfo);
  const id = userInfo._id;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (userInfo.image) {
          const userImage = await getImageUrl(userInfo.image);
          setUserImageUrl(userImage);
        } else {
          setUserImageUrl(require("../../Assets/img/avatar.png"));
        }
      } catch (error) {
        console.log("Faild to fetch image", error);
      }
    };
    fetchImages();
  }, [userInfo]);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePhoto = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 3) {
      const newImages = [...images, ...files];
      setImages(newImages);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageURLs((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    } else {
      alert("You can upload up to 3 images");
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newImageURLs = [...imageURLs];
    newImageURLs.splice(index, 1);
    setImageURLs(newImageURLs);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategories = (e) => {
    setSelectOption(e.target.value);
  };

  const handleAgeRate = (e) => {
    setSelectAge(e.target.value);
  };
  // categories fetch
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.4:3000/kids/categories`
        );
        setCategories(response.data.result);
        setSelectOption(response.data.result[0]._id);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("user", id);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", selectOption);
    formData.append("ageRange", selectAge);
    formData.append("availability", available);
    images.forEach((photo) => {
      formData.append("files", photo);
    });

    try {
      const response = await axios.post(
        "http://192.168.1.20:3000/kids/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data.result);
      setUploading(false);
      restForm();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.log("Error Uploading Post", error);
      setError("Failed to upload post, Try again.");
      setUploading(false);
    }
  };
  const restForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImages([]);
    setImageURLs([]);
    setSelectOption("");
    setSelectAge("");
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center px-4 py-2 bg-white">
      <div className=" bg-slate-300 w-fit h-full flex flex-col items-center justify-center gap-y-4 px-4 py-4 rounded-lg ">
        <p className=" font-roboto text-3xl font-bold">Upload Post</p>
        <div className="flex items-center justify-center gap-x-4">
          <div className="rounded-full shadow-md shadow-blue-300">
            <img
              src={userImageUrl}
              // src={require("../../Assets/img/profile-picture.jpeg")}
              alt=""
              className=" w-14 h-14 object-fill rounded-full"
            />
          </div>
          <h3 className="text-xl text-gray-700">{userInfo.name}</h3>
        </div>
        <div className=" flex items-center gap-x-5 w-full">
          <div className=" w-full">
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Name of your product"
              className=" px-4 py-2 bg-white rounded-md w-full outline-none"
              required
            />
          </div>
          <div className=" w-full">
            <input
              type="text"
              value={price}
              onChange={handlePrice}
              placeholder="price ( Kyats )"
              className=" px-4 py-2 bg-white rounded-md w-full outline-none"
              required
            />
          </div>
        </div>
        <div className=" w-full">
          <textarea
            onChange={handleDescription}
            value={description}
            style={{ width: "100%" }}
            placeholder="Describe your categories"
            className=" rounded-md shadow-md shadow-blue-300 outline-none px-4 py-2 bg-white"
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-[400px] py-4 bg-white -mt-3 rounded-md shadow-md shadow-blue-400">
          <input
            type="file"
            multiple
            onChange={handlePhoto}
            className=" flex flex-col items-center justify-center"
          ></input>
          <FaCloudUploadAlt size={25} />
          <p className=" font-noto text-xl">Upload Photo From Device</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {imageURLs.map((url, index) => (
              <div key={index} className=" relative">
                <img
                  src={url}
                  alt={`Uploaded ${index + 1}`}
                  className=" w-32 h-32 object-cover rounded-md shadow-md"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <div className=" flex flex-col gap-y-2">
            <label htmlFor="categories">Select your Categories</label>
            <select
              name="selectOption"
              id="categories"
              onChange={handleCategories}
              value={selectOption}
              required
              className=" outline-none px-4 py-2 mr-4 rounded-md w-64 bg-cyan-600 text-white cursor-pointer"
            >
              <option value="" disabled hidden>
                Choose one
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {/* <option value="">
                  {selectOption ? <p>{selectOption}</p> : "Choose One"}
                </option>
                <option value="clothe">Clothe</option>
                <option value="hat">Hat</option>
                <option value="shoe">Shoe</option>
                <option value="backpack">Backpack</option>
                <option value="toy">Toy</option>
                <option value="feeding">Feeding</option>
                <option value="funiture">Funiture</option>
                <option value="accessories">Accessories</option>
                <option value="vehicle">Vehicle</option>
                <option value="book">Book</option>
                <option value="bedding">Bedding</option> */}
          </div>
          <div className=" flex flex-col gap-y-2">
            <label htmlFor="categories">Select your Age Rate</label>
            <select
              name="selectAge"
              id="age"
              onChange={handleAgeRate}
              value={selectAge}
              required
              className=" outline-none px-4 py-2 rounded-md w-64 bg-cyan-600 text-white cursor-pointer"
            >
              <option value="">
                {selectAge ? <p>{selectAge}</p> : "Choose One"}
              </option>
              <option value="new born- 3 years">new born - 3</option>
              <option value="3 - 6 years">3 - 6</option>
              <option value="6 - 9 years">6 - 9</option>
              <option value="9 - 12 years">9 - 12</option>
              <option value="12 - 15 years">12 - 15</option>
              <option value="above 15 years">above 15</option>
            </select>
          </div>
        </div>
        {success && (
          <p className="text-green-500">Post uploaded successfully!</p>
        )}
        {error && <p className=" text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          disabled={uploading}
          className=" px-8 py-2 w-64 rounded-md text-white bg-blue-500 shadow-md shadow-white hover:bg-blue-600"
        >
          {uploading ? "Uploading..." : "Post"}
        </button>
      </div>
    </div>
  );
};

export default PostUpload;
