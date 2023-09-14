
import { FavouriteButton } from "../Favourite-Button/Favourite-button"

export function Entry({ date, motto, notes }) {
    return (
        <div className="entry-card">
            <h2 className="date">{date}</h2>
            <FavouriteButton />
            <h2 className="heading">{motto}</h2>
            <p className="text">{notes}</p>
        </div>
    )
}