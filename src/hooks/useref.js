import React, { useRef } from "react";

const UseRefHook = () => {
  const inpRef = useRef(null);

  const clickHandler = () => {
    inpRef.current.focus();
  };
  return (
    <div>
      <h1>Use Ref Implementation</h1>
      <div>
        <input ref={inpRef} placeholder="Enter your name" />
        <button onClick={clickHandler}>Write Name</button>
      </div>
    </div>
  );
};

export default UseRefHook;
