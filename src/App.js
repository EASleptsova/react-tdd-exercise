import { useState } from "react";
import NewNoteForm from "./NewNoteForm";
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  function handleSave(newNote) {
    setNotes([newNote, ...notes]);
  }
  return (
    <>
      <NewNoteForm onSave={handleSave} />
      <NoteList data={notes} />
    </>
  );
}

export default App;
