import "./reset.css";
import "./style.css";
import addImages from "./add-images.js";
import getFormData from "./form-ui.js";
import { todoDeleteButton, todoEditButton, todoDetailsButton, todoCheckedButton } from "./todo-buttons.js";
import { editFormUI } from "./form-edit-ui.js";
import { saveTodosOnSubmit } from "./storetodos.js";
import { renderDOM, renderTodayTodos, renderWeeksTodos } from "./renderDOM.js";
import { saveNotesOnSubmit, addNote } from "./add-note.js";
import { noteDeleteButton } from "./delete-note.js";
import { saveProjectsOnSubmit } from "./add-projects.js";
import { projectDeleteButton } from "./delete-project.js";
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
const addProjectForm = document.getElementById("add-project");
const clickedObj = {
  homeClicked: false,
  todayClicked: false,
  weekClicked: false,
  projectsClicked: false,
  thisProjectClicked: false,
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
saveProjectsOnSubmit();
projectDeleteButton();
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
  if (!addProjectForm.contains(ev.target) && ev.target.tagName !== "I") {
    addProjectForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay5");
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
  if (!clickedObj.projectsClicked && !clickedObj.notesClicked && !clickedObj.thisProjectClicked) {
    addForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay");
  } else if (clickedObj.notesClicked) {
    addNoteForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay4");
  } else if (clickedObj.projectsClicked) {
    addProjectForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay5");
  }
}

homeButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  renderDOM();
});
todayButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  renderTodayTodos();
});
weekButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  renderWeeksTodos();
});
projectsButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = false;
  clickedObj.todayClicked = false;
  clickedObj.weekClicked = false;
  clickedObj.projectsClicked = true;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
});

notesButton.addEventListener("click", function () {
  clickedObj.homeClicked = false;
  clickedObj.todayClicked = false;
  clickedObj.weekClicked = false;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = true;
  content.innerHTML = "";
  addNote();
});

export { clickedObj };
