import "./Entry-List.css";
import emptyStarImage from "../../assets/star.svg"

export function EntryList({date, headline, text}) {
    return (
        <section className="entry-list">
        <div className="entry-card">
            <h2 className="date">{date}</h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">{headline}</h2>
            <p className="text">{text}</p>
        </div>

        <div className="entry-card">
            <h2 className="date">{date}</h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">{headline}</h2>
            <p className="text">{text}</p>
        </div>

        <div className="entry-card">
            <h2 className="date"></h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">{headline}</h2>
            <p className="text">{text}</p>
        </div>
    </section>

    )
}