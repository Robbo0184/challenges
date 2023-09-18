import "./styles.css";
import { useState } from "react";

export default function App() {
  
  let [isActive, setActive] = useState(false)
 
  
  function handleClick() {
    // isActive = !isActive;
    
    function toggleActive() {
      setActive(!isActive)
      
    }
    toggleActive()
    

    // console.log(isActive)
    
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
      {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
