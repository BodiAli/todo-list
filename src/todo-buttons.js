import { todos } from "./storetodos.js";
import { saveTodosOnEdit } from "./form-edit-submit.js";
const content = document.getElementById("content");
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetailsModal = document.getElementById("display-details");
function todoDeleteButton() {
  content.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("delete")) {
      ev.target.parentElement.parentElement.parentElement.remove();
    }
  });
}
function todoEditButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < todos.length; i++) {
      const element = todos[i];
      if (ev.target.todoID === element.id && ev.target.classList.contains("edit")) {
        editTodoForm.style.display = "block";
        const res = todos.find(function (item) {
          return item.todoID === ev.target.todoID;
        });
        console.log(res);
      }
    }
  });
}
function todoDetailsButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < todos.length; i++) {
      const element = todos[i];
      if (ev.target.todoID === element.todoID && ev.target.classList.contains("details")) {
        const displayTodoTitle = displayTodoDetailsModal.querySelector(".display-todo-title");
        const displayTodoDetails = displayTodoDetailsModal.querySelector(".display-todo-details");
        const displayTodoPriority = displayTodoDetailsModal.querySelector(".display-todo-priority");
        displayTodoTitle.textContent = element.title;
        displayTodoDetails.textContent = element.description;
        if (element.priority === "low") {
          displayTodoPriority.textContent = "LOW";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.style.backgroundColor = "green";
          displayTodoPriority.classList.add("fw-bold");
        } else if (element.priority === "mid") {
          displayTodoPriority.textContent = "MID";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.style.backgroundColor = "darkorange";
          displayTodoPriority.classList.add("fw-bold");
        } else if (element.priority === "high") {
          displayTodoPriority.textContent = "HIGH";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.style.backgroundColor = "rgba(255, 0, 0, 0.883)";
          displayTodoPriority.classList.add("fw-bold");
        }
        displayTodoDetailsModal.style.display = "block";
        darkOverlay.classList.add("dark-overlay3");
      }
    }
  });
}

export { todoDeleteButton, todoEditButton, todoDetailsButton };
