import { renderDOM, renderTodayTodos, renderProjectTodo } from "./renderDOM.js";
import { differenceInDays, differenceInHours } from "date-fns";
const currentDate = new Date();
const darkOverlay = document.getElementById("dark-overlay");
const lowPriorityButton = document.getElementById("low");
const midPriorityButton = document.getElementById("mid");
const highPriorityButton = document.getElementById("high");
const todos = [];
const todosToday = [];
const todosWeeks = [];
const todosProject = [];

const localTodos = JSON.parse(localStorage.getItem("localTodos")) || [];
const localTodosToday = JSON.parse(localStorage.getItem("localTodosToday")) || [];
const localTodosWeeks = JSON.parse(localStorage.getItem("localTodosWeeks")) || [];
const localTodosProject = JSON.parse(localStorage.getItem("localTodosProject")) || [];


class Todos {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoID = localTodos.length + 1;
  }
}

const addTodoForm = document.getElementById("add-todo");
function saveTodosOnSubmit() {
  addTodoForm.addEventListener("submit", saveTodos);

  function saveTodos(ev) {
    ev.preventDefault();

    const todoTitleValue = document.getElementById("title").value;
    const todoDetailsValue = document.getElementById("textarea").value;
    const todoDateValue = document.getElementById("date").value;
    let priority;
    if (lowPriorityButton.style.outline.includes("solid")) {
      priority = "low";
    } else if (midPriorityButton.style.outline.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButton.style.outline.includes("solid")) {
      priority = "high";
    }
    const todo = new Todos(todoTitleValue, todoDetailsValue, todoDateValue, priority);
    
    todos.push(todo);
    localTodos.push(todo);
    if(((differenceInDays(todo.dueDate, currentDate)) < 7) && ((differenceInDays(todo.dueDate, currentDate)) >= 0)){
      localTodosWeeks.push(todo)
      todosWeeks.push(todo)
    }
    if (((differenceInHours(todo.dueDate, currentDate) >= 0) && (differenceInHours(todo.dueDate, currentDate) <= 24))||((differenceInHours(todo.dueDate, currentDate) <= 0) && (differenceInHours(todo.dueDate, currentDate) >= -24))){
      localTodosToday.push(todo)
      todosToday.push(todo);   
    }
    localStorage.setItem("localTodos", JSON.stringify(localTodos));
    localStorage.setItem("localTodosWeeks", JSON.stringify(localTodosWeeks));
    localStorage.setItem("localTodosToday", JSON.stringify(localTodosToday));


    renderDOM();
    addTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
  }
}
export { saveTodosOnSubmit, todos, todosToday, todosWeeks, todosProject, Todos,localTodos, localTodosToday,localTodosWeeks };
