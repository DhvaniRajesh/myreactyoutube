import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Body;
