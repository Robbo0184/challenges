import "./Card.css";

export default function Card({ name, colour }) {
  return <p className="card" style={{backgroundColor:`${colour}`}}>{name}</p>;
}
