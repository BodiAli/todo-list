import "./reset.css";
import "./style.css";
import addImages from "./add-images.js";
import getFormData from "./form-ui.js";
import { todoDeleteButton, todoEditButton, todoDetailsButton } from "./todo-buttons.js";
import { editFormUI } from "./form-edit-ui.js";
import { saveTodosOnSubmit } from "./storetodos.js";
const addTodoButton = document.getElementById("add");
const addForm = document.getElementById("add-todo");
const editForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetails = document.getElementById("display-details");
addTodoButton.addEventListener("click", showForm);
getFormData();
addImages();
todoDeleteButton();
todoEditButton();
todoDetailsButton();
editFormUI();
saveTodosOnSubmit();
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
