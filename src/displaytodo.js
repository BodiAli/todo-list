import { todos } from "./storetodos.js";

const todoRow = document.getElementById("todo-row");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetails = document.getElementById("display-details");

const content = document.getElementById("content");

let displayedTodoTitles = [];
let counter = 0;

function displayTodo() {
  counter++;
  for (let i = 0; i < todos.length; i++) {
    const element = todos[i];

    if (displayedTodoTitles.includes(element.number)) {
      continue;
    }

    const newRow = todoRow.cloneNode(true);

    const newTodoTitle = newRow.querySelector("#todo-title");
    const newTodoDate = newRow.querySelector("#todo-date");
    const detailsButton = newRow.querySelector("#details");
    detailsButton.classList.add(counter);
    newTodoTitle.classList.add("todo-title" + counter);
    if (element.number === counter) {
      detailsButton.addEventListener("click", function (ev) {
        darkOverlay.classList.add("dark-overlay3");
        displayTodoDetails.style.display = "block";
        const modalTodoTitle = document.querySelector(".display-todo-title");
        const modalTodoDetails = document.querySelector(".display-todo-details");
        const modalTodoPriority = document.querySelector(".display-todo-priority");
        modalTodoTitle.textContent = element.title;
        modalTodoDetails.textContent = element.description;
        if (element.priority === "low") {
          modalTodoPriority.textContent = "LOW";
          modalTodoPriority.style.backgroundColor = "green";
          modalTodoPriority.style.textAlign = "center";
          modalTodoPriority.style.fontWeight = "bold";
          modalTodoPriority.style.color = "black";
        } else if (element.priority === "mid") {
          modalTodoPriority.textContent = "MEDIUM";
          modalTodoPriority.style.backgroundColor = "orange";
          modalTodoPriority.style.textAlign = "center";
          modalTodoPriority.style.fontWeight = "bold";
          modalTodoPriority.style.color = "black";
        } else if (element.priority === "high") {
          modalTodoPriority.textContent = "HIGH";
          modalTodoPriority.style.backgroundColor = "red";
          modalTodoPriority.style.textAlign = "center";
          modalTodoPriority.style.fontWeight = "bold";
          modalTodoPriority.style.color = "black";
        } else if (element.priority === undefined) {
          modalTodoPriority.textContent = "Not Defined";
          modalTodoPriority.style.backgroundColor = "gray";
          modalTodoPriority.style.textAlign = "center";
          modalTodoPriority.style.fontWeight = "bold";
          modalTodoPriority.style.color = "black";
        }
      });
    }

    newTodoTitle.textContent = element.title;
    newTodoDate.textContent = element.dueDate;
    if (element.priority === "low") {
      newTodoTitle.classList.remove("bg-dark");
      newTodoTitle.classList.remove("bg-opacity-10");
      newTodoTitle.classList.add("bg-opacity-25");
      newTodoTitle.classList.add("bg-success");
    } else if (element.priority === "mid") {
      newTodoTitle.classList.remove("bg-dark");
      newTodoTitle.classList.remove("bg-opacity-10");
      newTodoTitle.classList.add("bg-opacity-25");
      newTodoTitle.classList.add("bg-warning");
    } else if (element.priority === "high") {
      newTodoTitle.classList.remove("bg-dark");
      newTodoTitle.classList.remove("bg-opacity-10");
      newTodoTitle.classList.add("bg-opacity-25");
      newTodoTitle.classList.add("bg-danger");
    }

    content.appendChild(newRow);

    displayedTodoTitles.push(element.number);
  }
}

export { displayTodo };
