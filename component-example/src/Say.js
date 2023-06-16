import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <p></p>
      &nbsp;
      <button onClick={onClickEnter}>입장</button>
      &nbsp;
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      &nbsp;
      <button style={{ color: "red" }} onClick={() => setColor("lightpink")}>
        빨간색
      </button>
      &nbsp;
      <button style={{ color: "green" }} onClick={() => setColor("lightgreen")}>
        초록색
      </button>
      &nbsp;
      <button style={{ color: "blue" }} onClick={() => setColor("skyblue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
