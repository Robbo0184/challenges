import emptyStarImage from "../../assets/star.svg"

export function Entry({date, headline, text}) {
    return (
        <section className="entry-list">
        <div className="entry-card">
            <h2 className="date">{date}</h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">{headline}</h2>
            <p className="text">{text}</p>
        </div>

     
    </section>

    )
}