import { useState } from "react";
import "./Favourite-button.css"
import StarFilled from "./star-filled.svg";
import Star from "./star.svg";


export function FavouriteButton({onToggleFavourite, isFavourite, id}) {


  return (
    <button
      className="favourite-button"
      onClick={() => {
        onToggleFavourite(id, !isFavourite)
      }}
      aria-label="favourite"
    >
      <img src={isFavourite ? StarFilled : Star} alt="Star Icon" />
    </button>
  );
}