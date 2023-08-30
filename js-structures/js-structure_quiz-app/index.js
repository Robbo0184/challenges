// Store the cards in a global state
import {cards, CardList} from './components/CardList/Cardlist.js'
import { Header } from './components/Header/Header.js';
import {Form, handleFormSubmit} from './components/Form/Form.js';
import { Bookmark } from './components/Bookmark/Bookmark.js';
import {Card} from './components/Card/Card.js'
import { App } from './components/App/App.js'










// The render function renders the app to the DOM
// function render() {
//   const root = document.querySelector("#root");
//   root.append(App());
// }

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}


render();
