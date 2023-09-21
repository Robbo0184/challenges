import "./Tab-bar.css";
export function TabBar({ onClick, onShowAllEntries, onShowFavouriteEntries, entries, filter, isActive }) {
    const isAllActive = filter === "all";
    const isFavoritesActive = filter === "favorites";

    return (
        <div className="tabs">
            <h2>All Entries</h2>
            <span onClick={onShowAllEntries} className={`badge ${isAllActive ? "active" : ""}`}>3</span>

            <h2>Favourites</h2>
            <span onClick={onShowFavouriteEntries}  className={`badge ${isFavoritesActive ? "active" : ""}`} >7</span>

        </div>
    )
}