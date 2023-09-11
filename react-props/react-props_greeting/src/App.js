import "./styles.css";

export default function App() {
  return greeting('Ahab')
}


function greeting ({name}) {
   return <h1>Hello {name}!</h1>
}