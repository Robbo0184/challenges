import "./styles.css";

export default function App() {
  return <Greeting name = "Klaus" />
}


function Greeting ({name}) {
   const isCoach = name === "Marcell" || name === "Klaus" 
   return isCoach ? <h1>Hello, coach!</h1> : <h1>Hello {" "} {name}!</h1>
 
}

