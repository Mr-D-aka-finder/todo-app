import { useState } from "react";
import "./App.css";

export const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input type="submit" value="add" onSubmit={(e) => e.preventDefault()} />
      </form>
    </div>
  );
};
