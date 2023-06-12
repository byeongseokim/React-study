import React, { useReducer, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if (action.type === "UP") {
      return oldCount + action.number;
    } else if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    }
  }
  const [count, countDispath] = useReducer(countReducer, 0);
  function down() {
    countDispath({type: "DOWN", number: number});
  }
  function reset() {
    countDispath({type: "RESET", number: number});
  }
  function up() {
    countDispath({type: "UP", number: number});
  }

  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }
  
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <br></br>
      <input type="text" value={number} onChange={changeNumber} />
      <span>&nbsp;&nbsp;&nbsp;{count}</span>
    </div>
  );
}
