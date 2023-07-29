import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, makeid } from "../utils/helper";
const LiveChat = () => {

  const [liveMsg, setLiveMsg] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(15),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[500px] p-2 border border-black shadow-lg bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chatmessage, index) => {
            return (
              <ChatMessage
                key={index}
                name={chatmessage.name}
                message={chatmessage.message}
              ></ChatMessage>
            );
          })}
        </div>
      </div>
      <form
        className="w-full p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Live message: "+liveMsg);
          dispatch(addMessage({
            name: "Akshay",
            message: liveMsg
          }));
          setLiveMsg("");
        }}

      >
        <input
          className="w-96 mx-2 px-2"
          type="text"
          placeholder="Chat..."
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="px-2 mx-1 bg-red-500 rounded-lg text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;
