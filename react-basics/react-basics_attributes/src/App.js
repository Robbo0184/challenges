import React from "react";
import "./styles.css";

export default function App() {
  return john();
}

function john() {
  return <article className="article">
    <h2 className="article__title">Billy Joel is playing live tonight!</h2>
    <label id="label" htmlFor="input"></label>
    <input id="input"></input>
    <a href="https://en.wikipedia.org/wiki/Mallard" className="article__link">Find out why HERE!!!!</a>
  </article>
}