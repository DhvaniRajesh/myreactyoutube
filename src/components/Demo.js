import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);
  console.log("Render");

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-2 p-2 w-10/12 border border-black " +
        (isDark && "bg-black text-white")
      }
    >
      Demo
      <div>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          type="number"
          className="px-2 py-1 mx-2 border-black text-red-500"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <h1> nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
