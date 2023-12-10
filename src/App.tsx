import React from 'react';
import './App.css';
import {NotesList} from "./components/NotesList/NotesList";
import {CreateNotes} from "./components/CreateNotes/CreateNotes";
import {TagsList} from "./components/TagsList/TagsList";

function App() {
  return (
      <div className="App">
        <header></header>
        <main className="main">
          <CreateNotes/>
          <TagsList/>
          <NotesList/>
        </main>
      </div>
  );
}

export default App;
