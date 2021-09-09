import React, { useState, useImperativeHandle, forwardRef } from "react";

const ChildImperative = forwardRef((props, ref) => {
  const [flag, setFlag] = useState(false);
  useImperativeHandle(ref, () => ({
    toggleText() {
      setFlag(!flag);
    },
  }));

  return (
    <div style={{ margin: "30px" }}>
      <button onClick={() => setFlag(!flag)}>Child Button</button>
      {flag && <h3>Toogle Text</h3>}
    </div>
  );
});

export default ChildImperative;
