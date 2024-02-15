import { addNote, localNotes } from "./add-note.js";
const content = document.getElementById("content");
function noteDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < localNotes.length; i++) {
      const element = localNotes[i];
      if (ev.target.noteID === element.noteID && ev.target.classList.contains("btn-close")) {
        const index = localNotes.findIndex(function (value) {
          return value.noteID === element.noteID;
        });
        localNotes.splice(index, 1);
        localStorage.setItem("localNotes", JSON.stringify(localNotes));

        addNote();
      }
    }
  });
}
export { noteDeleteButton };
