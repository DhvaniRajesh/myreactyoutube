import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return(
        <div className="overflow-hidden w-10/12"> 
            <ButtonList></ButtonList>
            <VideoContainer></VideoContainer>
        </div>
    )
}

export default MainContainer;