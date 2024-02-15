import { todos,todosWeeks,todosToday,localTodos,localTodosToday,localTodosWeeks } from "./storetodos.js";
import { renderDOM, renderProjectTodo } from "./renderDOM.js";
import { clickedObj } from "./index.js";
import {  localProjects } from "./add-projects.js";
import { differenceInDays, differenceInHours } from "date-fns";
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const content = document.getElementById("content");
const currentDate = new Date();
function editTodos(todoID) {
  const todoToEdit = localTodos.find((todo) => todo.todoID === todoID);
  const indexWeeks = localTodosWeeks.findIndex(function (value) {
    return value.noteID === todoToEdit.noteID;
  });
  const indexToday = localTodosToday.findIndex(function (value) {
    return value.noteID === todoToEdit.noteID;
  });

  editTodoForm.addEventListener("submit", function saveEdit(ev) {
    ev.preventDefault();
    const titleEditValue = document.getElementById("title-edit").value;
    const descriptionEditValue = document.getElementById("textarea-edit").value;
    const dueDateEditValue = document.getElementById("date-edit").value;
    const lowPriorityEditButton = document.getElementById("low-edit");
    const midPriorityEditButton = document.getElementById("mid-edit");
    const highPriorityEditButton = document.getElementById("high-edit");
    if (titleEditValue !== "") {
      todoToEdit.title = titleEditValue;
    }
    if (descriptionEditValue !== "") {
      todoToEdit.description = descriptionEditValue;
    }
    if (dueDateEditValue !== "") {
      todoToEdit.dueDate = dueDateEditValue;
    }

    if (lowPriorityEditButton.style.outline.includes("solid")) {
      todoToEdit.priority = "low";
    } else if (midPriorityEditButton.style.outline.includes("solid")) {
      todoToEdit.priority = "mid";
    } else if (highPriorityEditButton.style.outline.includes("solid")) {
      todoToEdit.priority = "high";
    }
    if(((differenceInDays(todoToEdit.dueDate, currentDate)) < 7) && ((differenceInDays(todoToEdit.dueDate, currentDate)) >= 0)){
      if(localTodosWeeks.find((todo)=> todo === todoToEdit) === undefined){

        localTodosWeeks.push(todoToEdit)
        localStorage.setItem("localTodosWeeks", JSON.stringify(localTodosWeeks));

      }
    } else {
      localTodosWeeks.splice(indexWeeks,1)
      localStorage.setItem("localTodosWeeks", JSON.stringify(localTodosWeeks));

    }
    if (((differenceInHours(todoToEdit.dueDate, currentDate) >= 0) && (differenceInHours(todoToEdit.dueDate, currentDate) <= 24))||((differenceInHours(todoToEdit.dueDate, currentDate) <= 0) && (differenceInHours(todoToEdit.dueDate, currentDate) >= -24))){
      if(localTodosToday.find((todo)=> todo === todoToEdit) === undefined){
        localTodosToday.push(todoToEdit)
        localStorage.setItem("localTodosToday", JSON.stringify(localTodosToday));

      }
    }else {
      localTodosToday.splice(indexToday, 1)
      localStorage.setItem("localTodosToday", JSON.stringify(localTodosToday));
    }
  

    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
    editTodoForm.removeEventListener("submit", saveEdit);
    if (localProjects !== "" && clickedObj.thisProjectClicked) {
      for (let i = 0; i < localProjects.length; i++) {
        const project = localProjects[i];
        if (project.projectTodos.includes(todoToEdit)) {
          renderProjectTodo(project.projectTodos);
        }
      }
      return;
    }
    renderDOM();
  });
}

export { editTodos };
