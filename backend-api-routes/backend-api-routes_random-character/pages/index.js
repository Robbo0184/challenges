import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const { data: character, error } = useSWR("/api/random-character", fetcher);

  if (error) {
    return <p>Error loading character data.</p>;
  }

  if (!character) {
    return <p>Loading...</p>;
  }
  
  console.log(character)
  return <div>Hi {character.firstName} {character.lastName}, you owe us 35000€!!!!!!!!</div>

  
  
}