import { todos } from "./storetodos.js";
import { displayTodo } from "./displaytodo.js";
const darkOverlay = document.getElementById("dark-overlay");
const editTodoForm = document.getElementById("edit-todo");
const lowPriorityButton = document.getElementById("low-edit");
const midPriorityButton = document.getElementById("mid-edit");
const highPriorityButton = document.getElementById("high-edit");
let counter = 0;
let todoTitleCounter = 1;
function editFormUI() {
  editTodoForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "edit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-edit") {
        lowPriorityButton.style.border = "2px solid black";
        midPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "mid-edit") {
        midPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "high-edit") {
        highPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        midPriorityButton.style.border = "none";
      }
    }
  });
}
function submitFormEdit() {
  editTodoForm.addEventListener("submit", function (ev) {
    const titleEdit = document.getElementById("title-edit").value;
    ev.preventDefault();
    if (todoTitle[counter].getAttribute("class").includes("todo-title" + todoTitleCounter)) {
      for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        if (todoTitleCounter != element.number) {
          continue;
        }
        element.title = titleEdit;
        todoTitle[counter].textContent = element.title;
        console.log(todoTitle, counter);
      }
    }
    counter++;
    todoTitleCounter++;
    if (lowPriorityButton.style.border.includes("solid")) {
      element.priority = "low";
    } else if (midPriorityButton.style.border.includes("solid")) {
      element.priority = "mid";
    } else if (highPriorityButton.style.border.includes("solid")) {
      element.priority = "high";
    }
    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
  });
}
export { editFormUI, submitFormEdit };
