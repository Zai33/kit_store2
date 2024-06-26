import axios from "axios";
import React, { useEffect, useState } from "react";

const ActiveUser = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://192.168.1.28:3000/kids/users");
        setUser(response.data);
      } catch (error) {
        setError("Failed to fetch User");
      }
    };
    fetchUser();
  }, []);

  return (
    <div className=" w-[150px] rounded-full shadow-md shadow-blue-400">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className="flex list-none p-0">
        {user.map((user) => (
          <li key={user.id} className=" relative mr-5">
            <img
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              className=" w-[50px] rounded-full object-cover"
            />

            {user.isActive && (
              <span
                className=" w-[10px] absolute rounded-full bg-green-600 bottom-0 right-0"
                style={{ border: "2px solid white" }}
              ></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUser;
