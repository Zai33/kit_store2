import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigator;
