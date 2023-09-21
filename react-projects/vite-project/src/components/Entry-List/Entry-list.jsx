import "./Entry-List.css";
import { Entry } from "../Entry/Entry";
import { useState } from "react";




export function EntryList({ entries, filter, onToggleFavourite }) {
    return (
      <section className="entry-list">
        {filter === "all"
          ? entries.map((entry) => {
              return (
                <Entry
                  id={entry.id}
                  isFavourite={entry.isFavourite}
                  key={entry.id}
                  onToggleFavourite={onToggleFavourite}
                  date={entry.date}
                  motto={entry.motto}
                  notes={entry.notes}
                />
              );
            })
          : filter === "favourites"
          ? entries
              .filter((entry) => entry.isFavourite)
              .map((entry) => {
                return (
                  <Entry
                    id={entry.id}
                    isFavourite={entry.isFavourite}
                    key={entry.id}
                    onToggleFavourite={onToggleFavourite}
                    date={entry.date}
                    motto={entry.motto}
                    notes={entry.notes}
                  />
                );
              })
          : null}
      </section>
    );
  }
  