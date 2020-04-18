import React, { useState } from "react";

const NewNoteForm = ({ onSave, props }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    if (input !== "") {
      onSave(input);
      setInput("");
    }
  };

  return (
    <form {...props} className="new_note_form">
      <input
        value={input}
        onChange={handleChange}
        type="text"
        data-testid="noteText"
        placeholder="Note + enter"
      />
      <button data-testid="saveButton" onClick={save}>
        Save
      </button>
    </form>
  );
};

export default NewNoteForm;
