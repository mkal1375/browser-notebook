import React, { useState, useEffect, useReducer } from "react";
import Notes from "./Notes";
import NewNoteForm from "./NewNoteForm";

const Notebook = () => {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const [firstAttempt, setFirstAttempt] = useState(true);
  useEffect(() => {
    // load notes from local storage at first render.
    dispatch({ type: "LOAD_NOTES" });
    setFirstAttempt(false);
  }, []);
  useEffect(() => {
    if (!firstAttempt) {
      localStorage.setItem("_$_notes&", JSON.stringify(state.notes));
    }
  }, [state.notes, firstAttempt]);
  const onSave = (noteText) => {
    dispatch({ type: "ADD_NOTE", payload: { text: noteText } });
  };
  const editNote = (noteId, noteText) => {
    dispatch({ type: "EDIT_NOTE", payload: { text: noteText, noteId } });
  };
  const deleteNote = (noteId) => {
    dispatch({ type: "DELETE_NOTE", payload: { noteId } });
  };
  return (
    <div className="notebook">
      <NewNoteForm onSave={onSave} />
      {Object.keys(state.notes).length > 0 ? (
        <Notes notes={state.notes} {...{ deleteNote, editNote }} />
      ) : null}
    </div>
  );
};

const randomId = () => Math.random().toString(36).slice(2);

const initialState = {
  notes: {},
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_NOTES": {
      const notes = JSON.parse(localStorage.getItem("_$_notes&")) || {};
      return { ...state, notes };
    }
    case "ADD_NOTE": {
      const now = new Date();
      return {
        ...state,
        notes: {
          ...state.notes,
          [randomId()]: {
            createdAt: now,
            modifiedAt: now,
            text: action.payload.text,
          },
        },
      };
    }
    case "EDIT_NOTE": {
      if (action.payload.text === state.notes[action.payload.noteId].text)
        return state;
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.payload.noteId]: {
            createdAt: state.notes[action.payload.noteId].creationAt,
            modifiedAt: new Date(),
            text: action.payload.text,
          },
        },
      };
    }
    case "DELETE_NOTE": {
      const newNotes = Object.keys(state.notes).reduce((prev, noteId) => {
        if (noteId !== action.payload.noteId) {
          prev[noteId] = state.notes[noteId];
        }
        return prev;
      }, {});
      return {
        ...state,
        notes: newNotes,
      };
    }
    default: {
      return state;
    }
  }
};

export default Notebook;
