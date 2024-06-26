import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Components/Profile";
import Chat from "../Pages/Chat";
import Contact from "../Pages/Contact";
import RootLayout from "../Layout/RootLayout";
import PostUpload from "../Components/Post/PostUpload";
import Following from "../Components/Following";
import Saved from "../Components/Saved";
import Search from "../Components/Search";

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="postupload" element={<PostUpload />} />
          <Route path="following" element={<Following />} />
          <Route path="chat" element={<Chat />} />
          <Route path="search" element={<Search />} />
          <Route path="save" element={<Saved />} />
          <Route path="contactus" element={<Contact />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigator;
