import { displayTodo } from "./displaytodo.js";
export const todos = [];
let counter = 0;
const lowPriorityButton = document.getElementById("low");
const midPriorityButton = document.getElementById("mid");
const highPriorityButton = document.getElementById("high");
const form = document.getElementById("add-todo");
const darkOverlay = document.getElementById("dark-overlay");
export default function storeTodos() {
  class Todos {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.todoID = todos.length + 1;
    }
    set todoTitle(value) {
      this.title = value;
    }
    set todoDescription(value) {
      this.description = value;
    }
    set todoDueDate(value) {
      this.dueDate = value;
    }
    set todoPriority(value) {
      this.priority = this.priority;
    }
    get todoTitle() {
      return this.title;
    }
    get todoDescription() {
      return this.description;
    }
    get todoDueDate() {
      return this.dueDate;
    }
    get todoPriority() {
      return this.priority;
    }
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    form.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
    const todoTitle = document.getElementById("title").value;
    const todoDetails = document.getElementById("textarea").value;
    const todoDate = document.getElementById("date").value;
    let priority;
    if (lowPriorityButton.style.border.includes("solid")) {
      priority = "low";
    } else if (midPriorityButton.style.border.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButton.style.border.includes("solid")) {
      priority = "high";
    }
    const todo = new Todos(todoTitle, todoDetails, todoDate, priority, counter++);
    todos.push(todo);
    displayTodo();
  });
}
