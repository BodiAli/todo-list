const addNoteForm = document.getElementById("add-note");
const content = document.getElementById("content");
const darkOverlay = document.getElementById("dark-overlay");
const notes = [];
class Note {
  constructor(title, details, noteID) {
    (this.title = title), (this.details = details), (this.noteID = notes.length + 1);
  }
}
function addNote() {
  content.innerHTML = "";
  const noteResultRow = document.createElement("div");
  const noteResult = document.createElement("div");
  const noteResultText = document.createElement("div");
  const myDivTitleNote = document.createElement("div");
  const myDivParagraphNote = document.createElement("div");
  const myCloseNoteButton = document.createElement("button");
  myCloseNoteButton.setAttribute("id", "close-note");
  myCloseNoteButton.classList.add("btn-close");
  noteResultRow.setAttribute("id", "project-result-row");
  noteResultRow.classList.add("h-100");
  noteResultRow.classList.add("row");
  noteResultRow.classList.add("w-100");
  noteResultRow.classList.add("gap-4");

  noteResult.setAttribute("id", "project-result");
  noteResult.classList.add("column");
  noteResult.classList.add("col-6");
  noteResult.classList.add("h-50");
  noteResult.classList.add("w-25");
  noteResult.classList.add("mb-4");
  noteResult.classList.add("border");
  noteResult.classList.add("border-3");
  noteResult.classList.add("border-dark");
  noteResult.classList.add("bg-secondary");
  noteResult.classList.add("custom-shadow");
  noteResult.classList.add("position-relative");

  noteResultText.classList.add("d-flex");
  noteResultText.classList.add("flex-column");
  noteResultText.classList.add("justify-content-between");
  noteResultText.classList.add("align-items-center");
  noteResultText.classList.add("w-100");
  noteResultText.classList.add("h-100");
  noteResultText.classList.add("gap-3");
  noteResultText.classList.add("p-3");

  myDivTitleNote.classList.add("mb-0");
  myDivTitleNote.classList.add("fs-3");
  myDivTitleNote.classList.add("custom-line-break");
  myDivTitleNote.classList.add("border-note");
  myDivTitleNote.classList.add("fw-bold");
  myDivTitleNote.classList.add("note-title");
  myDivTitleNote.setAttribute("contenteditable", "true");
  myDivParagraphNote.classList.add("mb-0");
  myDivParagraphNote.classList.add("fs-3");
  myDivParagraphNote.classList.add("h-100");
  myDivParagraphNote.classList.add("w-100");
  myDivParagraphNote.classList.add("overflow-auto");
  myDivParagraphNote.classList.add("border-note");
  myDivParagraphNote.classList.add("note-paragraph");
  myDivParagraphNote.setAttribute("contenteditable", "true");
  noteResultText.appendChild(myDivTitleNote);
  noteResultText.appendChild(myDivParagraphNote);
  noteResult.appendChild(myCloseNoteButton);
  noteResult.appendChild(noteResultText);

  content.appendChild(noteResultRow);

  for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    const newNoteResultRow = noteResult.cloneNode(true);
    const newDivNote = newNoteResultRow.querySelector(".note-title");
    const newDivParagraph = newNoteResultRow.querySelector(".note-paragraph");
    const newCloseNoteButton = newNoteResultRow.querySelector(".btn-close");
    newCloseNoteButton.noteID = element.noteID;
    newDivNote.textContent = element.title;
    newDivParagraph.textContent = element.details;
    newDivNote.addEventListener("input", function () {
      limitText(this, 25);
    });
    noteResultRow.appendChild(newNoteResultRow);
  }
}
function limitText(element, maxLength) {
  if (element.textContent.length > maxLength) {
    element.textContent = element.textContent.slice(0, maxLength);
  }
}
function saveNotesOnSubmit() {
  addNoteForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const addNoteTitle = document.getElementById("add-note-title").value;
    const addNoteDetails = document.getElementById("textarea-note").value;
    const note = new Note(addNoteTitle, addNoteDetails);
    notes.push(note);
    console.log(notes);
    addNoteForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay4");
    addNote();
  });
}
export { saveNotesOnSubmit, notes, addNote };
