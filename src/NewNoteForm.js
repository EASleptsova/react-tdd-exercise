import { useState } from "react";

export default function NewNoteForm({ onSave }) {
  const [inputText, setInputText] = useState("");

  function handleTextChange(event) {
    setInputText(event.target.value);
  }

  function handleSave() {
    onSave(inputText);
    setInputText("");
  }
  return (
    <>
      <input
        type="text"
        data-testid="noteText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid="saveButton" onClick={handleSave}>
        Save
      </button>
    </>
  );
}
