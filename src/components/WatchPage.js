import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  useEffect(() => {
    //    <em> const dispatch = useDispatch();</em>
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // console.log("Video info"+info);
  // const {snippet, statistics} = info;
  // const {channelTitle ,title, thumbnails } = snippet;

  return (
    <div className="flex flex-col w-full m-1 ">
      <div className="p-2 flex w-full">
        <div className="m-1">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full m-1">
          <LiveChat />
        </div>
      </div>
      <div className="w-3/5">
        <CommentsContainer></CommentsContainer>
      </div>
    </div>
  );
};

export default WatchPage;
