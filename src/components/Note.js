import React from "react";
import { relativeDate } from "../utils/helpers";
const Note = ({ note, id, deleteNote, editNote, ...props }) => {
  const handleClick = (event) => {
    event.preventDefault();
    deleteNote(id);
  };
  const handleChange = (event) => {
    const noteText = event.target.innerText;
    if (noteText === "") return deleteNote(id);
    editNote(id, noteText);
  };
  if (!note) return null;
  return (
    <li {...props} className="note" data-testid="note" data-note-id={id}>
      <p contentEditable onBlur={handleChange} data-testid="note_text">
        {note.text}
      </p>
      <span
        className="note__delete_button"
        data-testid="note-delete-button"
        onClick={handleClick}
      >
        x
      </span>
      <span className="note__date">{relativeDate(note.modifiedAt)}</span>
    </li>
  );
};

export default Note;
