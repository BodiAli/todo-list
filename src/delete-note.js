import { notes, addNote } from "./add-note.js";
const content = document.getElementById("content");
function noteDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (ev.target.noteID === element.noteID && ev.target.classList.contains("btn-close")) {
        const resID = ev.target.noteID;
        const index = notes.findIndex(function (value) {
          return value.noteID === element.noteID;
        });
        notes.splice(index, 1);
        addNote();
      }
    }
  });
}
export { noteDeleteButton };
