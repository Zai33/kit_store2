import axios from "axios";

const API_BASE_URL = "http://192.168.1.11:3000/kids";
// const API_IMAGE = "http://192.168.1.16:3000/uploads";

export const fetchPost = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/recentPosts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching Posts", error);
    throw error;
  }
};

export const getImageUrl = async (image) => {
  try {
    const response = await axios.get(
      `http://192.168.1.11:3000/uploads/${image}`,
      {
        responseType: "blob",
      }
    );

    // console.log("image response", response.data);
    // return response.data.type;
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    console.error("Error fetching images", error);
  }
};
