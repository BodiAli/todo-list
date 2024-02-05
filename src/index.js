import "./reset.css";
import "./style.css";
import * as bootstrap from "bootstrap";
import addImages from "./add-images.js";
import getFormData from "./form-ui.js";
import storeTodos from "./storetodos.js";
import { todoDeleteButton, todoEditButton } from "./todo-buttons.js";
import { editFormUI, submitFormEdit } from "./form-edit-ui.js";
const addTodoButton = document.getElementById("add");
const addForm = document.getElementById("add-todo");
const editForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetails = document.getElementById("display-details");
addTodoButton.addEventListener("click", showForm);
getFormData();
addImages();
storeTodos();
todoDeleteButton();
todoEditButton();
submitFormEdit();
editFormUI();

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
  addForm.style.display = "block";
  darkOverlay.classList.add("dark-overlay");
}
