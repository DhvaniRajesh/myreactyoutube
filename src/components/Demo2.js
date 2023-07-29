import React, { useRef, useState } from "react";

const Demo2 = () => {

    let x=10;

    const [y, setY] = useState(0);

    const ref = useRef(0);


  return (
    <div className="m-2 p-2 w-10/12 border border-black">
      {" "}
      Demo
      <div>
        <button
          className="bg-red-200 rounded-md px-2 py-1 m-1"
          onClick={(e) => {
            x = x + 1;
          }}
        >
          {" "}
          Change
        </button>
        <h1> Let x = {x}</h1>
      </div>
      <div>
        <button
          className="bg-red-200 rounded-md px-2 py-1 m-1"
          onClick={(e) => {
            setY(y + 1);
          }}
        >
          Change
        </button>
        <h1> Let x = {y}</h1>
      </div>
      <div>
        <button
          className="bg-red-200 rounded-md px-2 py-1 m-1"
          onClick={(e) => {
           ref.current = ref.current +1;
          }}
        >
          Change
        </button>
        <h1> Let x = {ref.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;
