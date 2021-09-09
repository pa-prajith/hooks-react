import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

const UseContextHook = () => {
  const [userName, setUserName] = useState("");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <h1>Use Context Implementation</h1>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContextHook;

const Login = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

const User = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h3>{userName}</h3>
    </div>
  );
};
