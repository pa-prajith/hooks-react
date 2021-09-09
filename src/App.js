import "./App.css";

import UseReducerHook from "./hooks/usereducer";
import UseRefHook from "./hooks/useref";
import UseImperativeHandleHook from "./hooks/useimperativehandle";
import UseContextHook from "./hooks/usecontext";

function App() {
  return (
    <div className="App">
      <UseReducerHook />
      <UseRefHook />
      <UseImperativeHandleHook />
      <UseContextHook />
    </div>
  );
}

export default App;
