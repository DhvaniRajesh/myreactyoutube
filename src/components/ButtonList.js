import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Songs",
  "Cooking",
  "Skating",
  "Valentine",
  "Bollywood",
  "Movies",
  "News",
  "All",
  "Songs",
  "Cooking",
  "Skating",
  "Valentine",
  "Bollywood",
  "Movies",
  "News",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-hidden">
      {list.map((item, index) => {
        return <Button name={item} key={index}></Button>;
      })}
    </div>
  );
};

export default ButtonList;
