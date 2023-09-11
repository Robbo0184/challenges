import React from "react";
import "./styles.css";


export default function App() {
  return helloWorldArticle()
}

function helloWorldArticle () {
  return <article>
         <h1>The Albatross is extint!</h1>
         <p>This has been the case for a while.</p>
        </article>;
}