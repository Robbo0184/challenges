import { Header } from "./components/Header/Header";
import { EntryForm } from './components/Entry-form/Entry-form';
import { TabBar } from './components/Tab-Bar/Tab-bar';
import { EntryList } from './components/Entry-List/Entry-list';
import './App.css'

function App() {


  return (
    <>
      <Header>
      </Header>
      <main>
        <EntryForm />
        <TabBar />
        <EntryList />
      </main>
    </>
  )
}

export default App
