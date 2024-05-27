import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Chat from "../Pages/Chat";
import Contact from "../Pages/Contact";

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/profile" Component={Profile} />
        <Route path="/chat" Component={Chat} />
        <Route path="/contactus" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigator;
