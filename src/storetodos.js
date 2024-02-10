import { renderDOM, renderTodayTodos } from "./renderDOM.js";
import { differenceInDays, differenceInHours } from "date-fns";

const currentDate = new Date();
const darkOverlay = document.getElementById("dark-overlay");
const lowPriorityButton = document.getElementById("low");
const midPriorityButton = document.getElementById("mid");
const highPriorityButton = document.getElementById("high");
const todos = [];
const todosToday = [];
const todosWeeks = []
class Todos {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoID = todos.length + 1;
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
    if (lowPriorityButton.style.border.includes("solid")) {
      priority = "low";
    } else if (midPriorityButton.style.border.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButton.style.border.includes("solid")) {
      priority = "high";
    }
    const todo = new Todos(todoTitleValue, todoDetailsValue, todoDateValue, priority);
    todos.push(todo);
    if(((differenceInDays(todo.dueDate, currentDate)) < 7) && ((differenceInDays(todo.dueDate, currentDate)) >= 0)){
      console.log(differenceInDays(todo.dueDate, currentDate))
      todosWeeks.push(todo)
    }
    if (((differenceInHours(todo.dueDate, currentDate) >= 0) && (differenceInHours(todo.dueDate, currentDate) <= 24))||((differenceInHours(todo.dueDate, currentDate) <= 0) && (differenceInHours(todo.dueDate, currentDate) >= -24))){
      console.log(differenceInHours(todo.dueDate, currentDate));
      todosToday.push(todo);
      
      
    }
    renderDOM();
    addTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
  }
}
export { saveTodosOnSubmit, todos, todosToday, todosWeeks };
