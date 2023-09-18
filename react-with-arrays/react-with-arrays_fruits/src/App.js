import Card from "./components/Card";

export default function App() {
  const fruits = [{ id: 1, name: 'Banana', colour: "Yellow" }, { id: 2, name: 'Bolelo', colour: 'Green' }, { id: 3, name: "Orange", colour: 'Orange' }, { id: 4, name: "Old Banana", colour: "Black" }, { id: 5, name: "Plajühlo", colour: "White" }];

  return (
    <div className="app">
      {fruits.map(({id, name, colour}) => {
        return <Card key={id} name={name} colour={colour} />
      })}


    </div>
  );
}
