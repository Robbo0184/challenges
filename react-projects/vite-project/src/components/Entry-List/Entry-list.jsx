import "./Entry-List.css";
import { Entry } from "../Entry/Entry";
import { useState } from "react";




export function EntryList({entries, onToggleFavourite}) {
    
    return (
        <section className="entry-list">
            
       {entries.map((entry) => {
           return <Entry id={entry.id} isFavourite={entry.isFavourite} key={entry.id} onToggleFavourite={onToggleFavourite} date={entry.date} motto={entry.motto} notes={entry.notes}/>
       })}
            

        </section>

    )
}