import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpenFlag);

  //early return
  if(!isMenuOpen) return null

  return (
    <div className="my-2 px-4 w-48 shadow-md">
      <h1 className=" font-bold py-2">Subscription</h1>

      <ul className="flex flex-col">
        <Link to="/">
          <li className="flex">
            <span className="material-symbols-outlined">Home</span>
            <span >Home</span>
          </li>
        </Link>
        <li className="flex">
          <span className="material-symbols-outlined">slideshow</span>
          <span >Shorts</span>
        </li>
        <li className="flex">
          <span className="material-symbols-outlined">subscriptions</span>
          <span >Subscriptions</span>
        </li>
      </ul>
      <h1 className="font-bold py-2"> Library</h1>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold py-2">Explore</h1>
      <ul>
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
