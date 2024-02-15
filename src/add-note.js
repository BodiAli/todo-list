const addNoteForm = document.getElementById("add-note");
const content = document.getElementById("content");
const darkOverlay = document.getElementById("dark-overlay");
const notes = [];
const localNotes = JSON.parse(localStorage.getItem("localNotes")) || [];

class Note {
  constructor(title, details) {
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
  noteResultRow.setAttribute("id", "note-result-row");
  noteResultRow.classList.add("h-100");
  noteResultRow.classList.add("row");
  noteResultRow.classList.add("w-100");
  noteResultRow.classList.add("gap-4");

  noteResult.setAttribute("id", "note-result");
  noteResult.classList.add("column");
  noteResult.classList.add("col-6");
  noteResult.classList.add("mb-1");
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
  noteResultText.classList.add("pe-3");
  noteResultText.classList.add("pt-3");
  noteResultText.classList.add("pb-3");

  myDivTitleNote.classList.add("mb-0");
  myDivTitleNote.classList.add("fs-4");
  myDivTitleNote.classList.add("custom-line-break");
  myDivTitleNote.classList.add("border-note");
  myDivTitleNote.classList.add("fw-bold");
  myDivTitleNote.classList.add("note-title");
  myDivTitleNote.classList.add("ps-2");
  myDivTitleNote.classList.add("pe-2");
  myDivTitleNote.setAttribute("contenteditable", "true");
  myDivTitleNote.setAttribute("spellcheck", "false");

  myDivTitleNote.style.outline = "2px dotted gray";

  myDivParagraphNote.classList.add("mb-0");
  myDivParagraphNote.classList.add("fs-5");
  myDivParagraphNote.classList.add("h-100");
  myDivParagraphNote.classList.add("w-100");
  myDivParagraphNote.classList.add("overflow-auto");
  myDivParagraphNote.classList.add("border-note");
  myDivParagraphNote.classList.add("note-paragraph");
  myDivParagraphNote.setAttribute("contenteditable", "true");
  myDivParagraphNote.setAttribute("spellcheck", "false");
  noteResultText.appendChild(myDivTitleNote);
  noteResultText.appendChild(myDivParagraphNote);
  noteResult.appendChild(myCloseNoteButton);
  noteResult.appendChild(noteResultText);

  content.appendChild(noteResultRow);

  for (let i = 0; i < localNotes.length; i++) {
    const element = localNotes[i];
    const newNoteResult = noteResult.cloneNode(true);
    const newDivNote = newNoteResult.querySelector(".note-title");
    const newDivParagraph = newNoteResult.querySelector(".note-paragraph");
    const newCloseNoteButton = newNoteResult.querySelector(".btn-close");
    newCloseNoteButton.noteID = element.noteID;
    newDivNote.textContent = element.title;
    newDivParagraph.textContent = element.details;
    newDivNote.addEventListener("input", function () {
      limitText(this, 25);
      element.title = newDivNote.textContent;
      localStorage.setItem("localNotes", JSON.stringify(localNotes));
    });
    newDivParagraph.addEventListener("input", function () {
      element.details = newDivParagraph.textContent;
      localStorage.setItem("localNotes", JSON.stringify(localNotes));
    });
    noteResultRow.appendChild(newNoteResult);
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
    localNotes.push(note);
    localStorage.setItem("localNotes", JSON.stringify(localNotes));
    addNoteForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay4");
    addNote();
  });
}
export { saveNotesOnSubmit, notes, addNote, localNotes };
