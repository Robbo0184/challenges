import { Header } from "./components/Header/Header";
import { EntryForm } from './components/Entry-form/Entry-form';
import { TabBar } from './components/Tab-Bar/Tab-bar';
import { EntryList } from './components/Entry-List/Entry-list';
import { Entry } from "./components/Entry/Entry";
import { useState } from 'react';
import { uid } from "uid";
import './App.css';

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    isFavourite: false,
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    isFavourite: false,
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    isFavourite: false,
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    isFavourite: false,
    notes: "My React-ion when I learned about React: 😍",
  },
];



function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [filter, setFilter] = useState('all')
  const favouriteEntries = entries.filter((entry) => {
    return entry.isFavourite
  })

  console.log(favouriteEntries)

  function handleEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });
    setEntries([{ id: uid(), isFavourite: false, date, ...newEntry }, ...entries]);
  }

  function handleToggleFavourites(id) {
    setEntries(
      entries.map((entry) => {
        return entry.id === id ? { ...entry, isFavourite: !entry.isFavourite } : entry
      })
    )
  }

  function handleShowFavouriteEntries() {
    setFilter("favourites")
  }

  function handleShowAllEntries() {
    setFilter('all')
  }

  return (
    <>
      <Header>
      </Header>
      <main>
        <EntryForm addOnEntry={handleEntry} />
        <TabBar onShowAllEntries={handleShowAllEntries} onShowFavouriteEntries={handleShowFavouriteEntries} />
        <EntryList filter={filter} entries={entries} onToggleFavourite={handleToggleFavourites} />
      </main>
    </>
  )
}

export default App
