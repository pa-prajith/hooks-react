import React, { useRef } from "react";

import ChildButton from "./useimperativehandleChild";

const UseImperativeHandleHook = () => {
  const btnRef = useRef(null);

  const clickHandler = () => {
    btnRef.current.toggleText();
  };
  return (
    <div>
      <h1>UseImperativeHandle Implementation</h1>
      <button onClick={clickHandler}>Parent Button</button>
      <ChildButton ref={btnRef} />
    </div>
  );
};

export default UseImperativeHandleHook;
