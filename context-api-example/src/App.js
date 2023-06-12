import "./style.css";
import React, { createContext, useContext } from "react";

const themeDefault = { border: "10px solid lightpink" };
const themeContext = createContext(themeDefault);

function App() {
  const theme = useContext(themeContext);
  console.log("theme", theme);
  return (
    <themeContext.Provider value={{ border: "10px solid lightskyblue" }}>
      <div className="root" style={theme}>
        <h1>Hello World!</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: "10px solid lightgreen" }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() { 
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

export default App;
