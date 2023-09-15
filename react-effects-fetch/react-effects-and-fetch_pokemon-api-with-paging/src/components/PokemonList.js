import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0)
 

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  const goToPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    setPage(page + 1); 
  };

  return (
    <main>
      <button type="button" onClick={goToPreviousPage}>Previous Page</button>
      <button type="button" onClick={goToNextPage}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
