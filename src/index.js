import "./reset.css";
import "./style.css";
import * as bootstrap from "bootstrap";
import addImages from "./add-images.js";

addImages();
const addTodoButton = document.getElementById("add");
addTodoButton.addEventListener("click", showForm);
const addForm = document.getElementById("add-todo");
const darkOverlay = document.getElementById("dark-overlay");

document.addEventListener("click", (event) => {
  if (!addForm.contains(event.target) && event.target.tagName !== "I") {
    addForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
  }
});
function showForm(ev) {
  addForm.style.display = "block";
  darkOverlay.classList.add("dark-overlay");
}
