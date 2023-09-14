import "./Entry-List.css";
import { Entry } from "../Entry/Entry";



export function EntryList() {
    return (
        <section className="entry-list">
            
        <Entry
        date= "Jan 06, 2022"
        motto= "I just want some more cranberries."
        notes= "Rory lives in Uganda these days, he's writing his thesis." />
        
        <Entry
        date= "Jan 07, 2022"
        motto= "I just want can't have any more cranberries."
        notes= "Rory lives in Uganda these days, he's moving to Morocco soon though." />

        <Entry 
        date= "Jan 08, 2022"
        motto= "Hi Im Rory."
        notes= "I just got back from Ireland it was really hot."/>
            

        </section>

    )
}