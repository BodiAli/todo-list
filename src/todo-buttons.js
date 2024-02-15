import { localTodos } from "./storetodos.js";
import { editTodos } from "./form-edit-submit.js";
import { deleteTodo } from "./delete-todo.js";
const content = document.getElementById("content");
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetailsModal = document.getElementById("display-details");
const lowPriorityButtonEdit = document.getElementById("low-edit");
const midPriorityButtonEdit = document.getElementById("mid-edit");
const highPriorityButtonEdit = document.getElementById("high-edit");
const titleEditValue = document.getElementById("title-edit");
const descriptionEditValue = document.getElementById("textarea-edit");
const dueDateEditValue = document.getElementById("date-edit");

function todoCheckedButton() {
  content.addEventListener("click", function (ev) {
    if (ev.target.tagName === "INPUT" && ev.target.checked) {
      ev.target.parentElement.parentElement.parentElement.querySelector("#details").classList.add("disabled");
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#edit-button")
        .classList.add("disabled");
      ev.target.parentElement.parentElement.parentElement.querySelector("#todo-title").style.textDecoration =
        "line-through";
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#todo-date")
        .classList.add("text-secondary");
    } else if (ev.target.tagName === "INPUT" && !ev.target.checked) {
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#details")
        .classList.remove("disabled");
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#edit-button")
        .classList.remove("disabled");
      ev.target.parentElement.parentElement.parentElement.querySelector("#todo-title").style.textDecoration =
        "none";
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#todo-date")
        .classList.remove("text-secondary");
    }
  });
}
function todoDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < localTodos.length; i++) {
      const element = localTodos[i];
      if (
        ev.target.todoID === element.todoID &&
        (ev.target.classList.contains("delete") || ev.target.classList.contains("bi-trash3-fill"))
      ) {
        const resID = ev.target.todoID;
        deleteTodo(resID);
      }
    }
  });
}
function todoEditButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < localTodos.length; i++) {
      const element = localTodos[i];
      if (
        ev.target.todoID === element.todoID &&
        (ev.target.classList.contains("edit") || ev.target.classList.contains("bi-pencil-fill"))
      ) {
        const resID = ev.target.todoID;
        titleEditValue.value = "";
        descriptionEditValue.value = "";
        dueDateEditValue.value = "";
        lowPriorityButtonEdit.style.outline = "none";
        midPriorityButtonEdit.style.outline = "none";
        highPriorityButtonEdit.style.outline = "none";
        editTodoForm.style.display = "block";
        darkOverlay.classList.add("dark-overlay2");
        editTodos(resID);
        break;
      }
    }
  });
}

function todoDetailsButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < localTodos.length; i++) {
      const element = localTodos[i];
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
        } else if (element.priority === undefined) {
          displayTodoPriority.textContent = "NOT DEFINED";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.classList.add("fw-bold");
          displayTodoPriority.classList.add("bg-secondary");
        }
        displayTodoDetailsModal.style.display = "block";
        darkOverlay.classList.add("dark-overlay3");
      }
    }
  });
}

export { todoDeleteButton, todoEditButton, todoDetailsButton, todoCheckedButton };
