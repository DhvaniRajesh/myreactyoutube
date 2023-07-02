import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpenFlag);

  //early return
  if(!isMenuOpen) return null

  return (
    <div className="w-48 p-3 m-3 shadow-md">
        <h1 className=" font-bold py-2">Subscription</h1>

      <ul >
        <li> <Link to="/">Home</Link> </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold py-2"> Library</h1>
      <ul >
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold py-2">Explore</h1>
      <ul >
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Live</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
