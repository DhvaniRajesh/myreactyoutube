import React from "react";

const ChatMessage = ({name,message}) => {

    

  return (
    <div className="flex items-center mx-3">
      <img
        className="h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MN2uWvy0I6MA1V2a-yJaQC5k8W9Cn0DO0A&usqp=CAU"
      ></img>
      <span className="font-bold p-1">{name}: </span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
