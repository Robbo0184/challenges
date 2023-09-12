import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hi</Button>
      <Button>John</Button>
      <Button>My</Button>
      <Button>Name</Button>
      <Button>Is not John</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
