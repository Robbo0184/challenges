import React from "react";
import "./styles.css";

export default function App() {

  return (
    <>
      <Button onButtonclick={() => {console.log('Hi from buton1')}} disabled={false} text={'haha'} colour={'green'} />;
      <Button onButtonclick={() => {console.log('Hi from buton2')}} disabled={false} text={'hehe'} colour={'red'} />;
    </>
  )
}

function Button({ colour, disabled, text, onButtonclick }) {
  return <button
    onClick={onButtonclick}
    style={{ backgroundColor: colour }}
    disabled={disabled}>
    {text}
    </button>
  
}