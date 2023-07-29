import React from "react";


const Comment = ({data}) => {

    const {name,text} = data;

    return(
        <div className="p-2 ml-2 my-2 flex rounded bg-gray-100">
           <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        ></img>
        <div>
           <div className=""> {name} </div>
           <div className=""> {text} </div>
           </div>
            </div>
    )
}

export default Comment;