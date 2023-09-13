import "./Favourite-button.css"
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export function FavouriteButton () {
    const isFavorite = false;

    return (
      <button
        className="favorite-button"
        onClick={() => {
          console.log("favorite button clicked");
        }}
        aria-label="favorite"
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    );
  }