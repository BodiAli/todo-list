import "./reset.css";
import "./style.css";
import addImages from "./add-images.js";
import getFormData from "./form-ui.js";
import { todoDeleteButton, todoEditButton, todoDetailsButton, todoCheckedButton } from "./todo-buttons.js";
import { editFormUI } from "./form-edit-ui.js";
import { saveTodosOnSubmit, test } from "./storetodos.js";
import { renderDOM, renderTodayTodos, renderWeeksTodos } from "./renderDOM.js";
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
test();
document.addEventListener("click", (ev) => {
  if (!addForm.contains(ev.target) && ev.target.tagName !== "I") {
    addForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
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
  if (!clickedObj.projectsClicked) {
    addForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay");
  } else if (!clickedObj.projectsClicked) {
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
});
