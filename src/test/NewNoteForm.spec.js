import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewNoteForm from "../NewNoteForm";

describe("<NewNoteForm />", () => {
  describe("clicking the save button", () => {
    let saveHandler;

    beforeEach(async function saveNote() {
      saveHandler = jest.fn().mockName("saveHandler");
      render(<NewNoteForm onSave={saveHandler} />);

      await userEvent.type(screen.getByTestId("noteText"), "New note");
      userEvent.click(screen.getByTestId("saveButton"));
    });
    it("clears the text field", () => {
      expect(screen.getByTestId("noteText").value).toEqual("");
    });

    it("calls the save handler", async () => {
      expect(saveHandler).toHaveBeenCalledWith("New note");
    });
  });
});
