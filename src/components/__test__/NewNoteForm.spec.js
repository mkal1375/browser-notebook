import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import NewNoteForm from "../NewNoteForm";

describe("<NewNoteForm />", () => {
  let getByTestId;
  afterEach(cleanup);

  describe("clicking the save button", () => {
    let saveHandler;
    beforeEach(() => {
      saveHandler = jest.fn();
      ({ getByTestId } = render(<NewNoteForm onSave={saveHandler} />));

      fireEvent.change(getByTestId("noteText"), {
        target: {
          value: "New note",
        },
      });
      fireEvent.click(getByTestId("saveButton"));
    });

    it("clears the text field", () => {
      expect(getByTestId("noteText").value).toEqual("");
    });
    it("calls the save handler", () => {
      expect(saveHandler).toHaveBeenCalledWith("New note");
    });
  });
});
