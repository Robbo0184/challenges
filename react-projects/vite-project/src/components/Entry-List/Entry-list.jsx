import "./Entry-List.css";
import { Entry } from "../Entry/Entry";
import { useState } from "react";




export function EntryList({entries}) {
    
    return (
        <section className="entry-list">
            
       {entries.map((entry) => {
           return <Entry key={entry.id} date={entry.date} motto={entry.motto} notes={entry.notes}/>
       })}
            

        </section>

    )
}