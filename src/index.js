import "./reset.css";
import "./style.css";
import addImages from "./add-images.js";
import getFormData from "./form-ui.js";
import { todoDeleteButton, todoEditButton, todoDetailsButton, todoCheckedButton } from "./todo-buttons.js";
import { editFormUI } from "./form-edit-ui.js";
import { saveTodosOnSubmit } from "./storetodos.js";
import { renderDOM, renderTodayTodos, renderWeeksTodos } from "./renderDOM.js";
import { saveNotesOnSubmit } from "./add-note.js";
import { noteDeleteButton } from "./delete-note.js";
const addTodoButton = document.getElementById("add");
const addForm = document.getElementById("add-todo");
const editForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetails = document.getElementById("display-details");
const homeButton = document.getElementById("home-button");
const todayButton = document.getElementById("today-button");
const weekButton = document.getElementById("week-button");
const projectsButton = document.getElementById("projects-button");
const notesButton = document.getElementById("notes-button");
const content = document.getElementById("content");
const addNoteForm = document.getElementById("add-note");
const clickedObj = {
  homeClicked: false,
  todayClicked: false,
  weekClicked: false,
  projectsClicked: false,
  notesClicked: false,
};
addTodoButton.addEventListener("click", showForm);
getFormData();
addImages();
todoDeleteButton();
todoEditButton();
todoDetailsButton();
todoCheckedButton();
editFormUI();
saveTodosOnSubmit();
saveNotesOnSubmit();
noteDeleteButton();
document.addEventListener("click", (ev) => {
  if (!addForm.contains(ev.target) && ev.target.tagName !== "I") {
    addForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
  }
});
document.addEventListener("click", (ev) => {
  if (!addNoteForm.contains(ev.target) && ev.target.tagName !== "I") {
    addNoteForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay4");
  }
});
document.addEventListener("click", (ev) => {
  if (!editForm.contains(ev.target) && !ev.target.classList.contains("edit")) {
    editForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
  }
});
document.addEventListener("click", (ev) => {
  if (!displayTodoDetails.contains(ev.target) && !ev.target.classList.contains("details")) {
    displayTodoDetails.style.display = "none";
    darkOverlay.classList.remove("dark-overlay3");
  }
});
function showForm(ev) {
  if (!clickedObj.projectsClicked && !clickedObj.notesClicked) {
    addForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay");
  } else if (clickedObj.notesClicked) {
    addNoteForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay4");
  }
}

homeButton.addEventListener("click", function (ev) {
  content.innerHTML = "";
  renderDOM();
});
todayButton.addEventListener("click", function (ev) {
  content.innerHTML = "";
  renderTodayTodos();
});
weekButton.addEventListener("click", function (ev) {
  content.innerHTML = "";
  renderWeeksTodos();
});
projectsButton.addEventListener("click", function (ev) {
  clickedObj.projectsClicked = true;
  content.innerHTML = "";
  const projectResultRow = document.createElement("div");
  const projectResult = document.createElement("div");
  const projectResultText = document.createElement("div");
  const myH3 = document.createElement("h3");
  const myParagraph = document.createElement("p");

  projectResultRow.setAttribute("id", "project-result-row");
  projectResultRow.classList.add("h-100");
  projectResultRow.classList.add("row");
  projectResultRow.classList.add("w-100");
  projectResultRow.classList.add("gap-3");

  projectResult.setAttribute("id", "project-result");
  projectResult.classList.add("column");
  projectResult.classList.add("col-5");
  projectResult.classList.add("h-25");
  projectResult.classList.add("mb-4");
  projectResult.classList.add("border");
  projectResult.classList.add("border-3");
  projectResult.classList.add("border-dark");

  projectResultText.classList.add("d-flex");
  projectResultText.classList.add("justify-content-center");
  projectResultText.classList.add("align-items-center");
  projectResultText.classList.add("w-100");
  projectResultText.classList.add("h-100");
  projectResultText.classList.add("gap-3");

  myH3.classList.add("mb-0");
  myParagraph.classList.add("mb-0");
  myParagraph.classList.add("fs-3");
  myParagraph.classList.add("fw-bold");
  myH3.textContent = "asdas:";
  myParagraph.textContent = "zzzzz";
  projectResultText.appendChild(myH3);
  projectResultText.appendChild(myParagraph);
  projectResult.appendChild(projectResultText);
  projectResultRow.appendChild(projectResult);

  content.appendChild(projectResultRow);
});

notesButton.addEventListener("click", function () {
  clickedObj.notesClicked = true;
  content.innerHTML = "";
});
