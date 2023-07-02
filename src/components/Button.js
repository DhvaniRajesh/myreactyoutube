import React from "react";




const Button = (props) => {
    const {name} = props;

    const alertPlay = (message1) => alert(message1);

    return(
        <button className="px-5 py-1 m-1 bg-gray-200 rounded-lg"
        onClick={()=>{alertPlay("hellotherealeter")}}> {name}</button>
    )
}

export default Button;