import "./styles.css";
import { useState } from "react";

export default function App() {
  let color = "red";
  let Text = "Yellow";
  const [bg, setBg] = useState(color);
  const [text, setText] = useState(Text);

  const handelColorBg = () => {
    bg === "red" ? (color = "yellow") : (color = "red");
    setBg(color);
    text === "Yellow" ? (Text = "Red") : (Text = "Yellow");
    setText(Text);
  };
  return (
    <div style={{ backgroundColor: bg }} className="App">
      <h1>Ram</h1>
      <button onClick={handelColorBg}>{text}</button>
    </div>
  );
}
