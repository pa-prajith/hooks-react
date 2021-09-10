import React, { useState, useEffect, useMemo } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const uri = "https://jsonplaceholder.typicode.com/comments";
      const result = await fetch(uri);
      const jsonResults = await result.json();
      setData(jsonResults);
    }
    fetchData();
  }, []);
  const findLongestName = (data) => {
    let longestName = "";
    if (data.length > 0) {
      data.forEach((d) => {
        longestName = longestName.length > d.name.length ? longestName : d.name;
      });
    }
    console.log(longestName);
    return longestName;
  };
  const displayLongestName = useMemo(() => findLongestName(data), [data]);
  return (
    <div>
      <h1>Use Memo Hook Implementation</h1>
      {toggle && <h3>{displayLongestName}</h3>}
      <div>
        <button onClick={() => setToggle(!toggle)}> Toggle Text </button>
      </div>
    </div>
  );
};

export default UseMemoHook;
