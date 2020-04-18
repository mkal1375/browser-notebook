import React from "react";
import Note from "./Note";

const sortBasedCreationAt = (a, b) => {
  if (a === b) return 0;
  return a.createAt > b.createAt ? 1 : -1;
};

const Notes = ({ notes = {}, deleteNote, editNote }) => {
  return (
    <div data-testid="notes" className="notes">
      {Object.keys(notes)
        .sort(sortBasedCreationAt)
        .map((key) => (
          <Note
            key={key}
            id={key}
            note={notes[key]}
            {...{ deleteNote, editNote }}
          />
        ))}
    </div>
  );
};

export default Notes;
