import "./Entry-List.css";
import emptyStarImage from "../../assets/star.svg"

export function EntryList() {
    return (
        <section className="entry-list">
        <div className="entry-card">
            <h2 className="date">July 23rd 2022</h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">Thats why I still dont eat bananas</h2>
            <p className="text">Hthtnrnrnrsgnsrngrsnsrnsgsnrsnrnsn</p>
        </div>

        <div className="entry-card">
            <h2 className="date">July 24th 2022</h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">Started eating bananas again</h2>
            <p className="text">Hthtnrnrnrsgnsrngrsnsrnsgsnrsnrnsn</p>
        </div>

        <div className="entry-card">
            <h2 className="date">July 25th 2022</h2>
            <img className="star-image" src={emptyStarImage} />
            <h2 className="heading">Im stopping again starting from now</h2>
            <p className="text">Hthtnrnrnrsgnsrngrsnsrnsgsnrsnrnsn</p>
        </div>
    </section>

    )
}