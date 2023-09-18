import React from "react";
import "./styles.css";
import Form from "./components/Form.js";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // function handleCreateUser (name, email) {
  //    name = setName(event.target.elements.name.value)
  //    email = setEmail(event.target.elements.name.value)
  // }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onChangeName = {setName} onChangeEmail = {setEmail} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
