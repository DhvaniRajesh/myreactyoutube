import React from "react";


const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle ,title, thumbnails } = snippet;


    return(
        <div className="p-2 m-2 w-[400px] shadow-md">
           <img alt="video" src={thumbnails.high.url}
           className="rounded-lg"></img>
           <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
           </ul>
        </div>
    )
}

//higher order component
// const AdVideoCard = (VideoCard) => {
//     return (
//         <div className="p-1 m-1 border border-red-400">
//             <VideoCard/>
//         </div>
//     )
// }


export default VideoCard;