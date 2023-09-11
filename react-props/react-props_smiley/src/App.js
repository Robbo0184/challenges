import React from "react";
import "./styles.css";

export default function App() {
  return <Sum isHappy= {false} / >
}


function Sum ({isHappy}) {
   return isHappy ? <p>😄</p> : <p>😔</p>
}