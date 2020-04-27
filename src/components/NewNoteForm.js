import React, { useState } from "react";

const NewNoteForm = ({ onSave, props }) => {
  const [input, setInput] = useState("");
  const [buttonText, setButtonText] = useState("Save");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    if (input !== "") {
      onSave(input);
      setInput("");
      setButtonText("Saved!");
      setTimeout(() => setButtonText("Save"), 3000);
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
      <button
        data-testid="saveButton"
        className={buttonText === "Saved!" ? "saved" : ""}
        onClick={save}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default NewNoteForm;
