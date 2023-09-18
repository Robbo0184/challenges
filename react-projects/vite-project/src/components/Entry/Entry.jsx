
import { FavouriteButton } from "../Favourite-Button/Favourite-button"

export function Entry({ date, motto, notes, id, onToggleFavourite, isFavourite  }) {
    return (
        <div className="entry-card">
            
            <h2 className="date">{date}</h2>
            <FavouriteButton onToggleFavourite={onToggleFavourite} isFavourite={isFavourite} id={id} />
            <h2 className="heading">{motto}</h2>
            <p className="text">{notes}</p>
        </div>
    )
}