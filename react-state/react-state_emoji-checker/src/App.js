import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  let [code, setCode] = useState('')
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji)
  }

  function handleReset() {
    setCode('')
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => handleClick('🐡')
          }
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick('🐋')}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick('🐠')}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        // onClick={() => setCode("")}
        onClick={() => handleReset()}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
