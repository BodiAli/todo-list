import { todos,todosWeeks,todosToday } from "./storetodos.js";
import { renderDOM, renderProjectTodo } from "./renderDOM.js";
import { clickedObj } from "./index.js";
import { addProjectName, projects } from "./add-projects.js";
import { differenceInDays, differenceInHours } from "date-fns";
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const content = document.getElementById("content");
const currentDate = new Date();
function editTodos(todoID) {
  const todoToEdit = todos.find((todo) => todo.todoID === todoID);
  const indexWeeks = todosWeeks.findIndex(function (value) {
    return value.noteID === todoToEdit.noteID;
  });
  const indexToday = todosToday.findIndex(function (value) {
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

    if (lowPriorityEditButton.style.border.includes("solid")) {
      todoToEdit.priority = "low";
    } else if (midPriorityEditButton.style.border.includes("solid")) {
      todoToEdit.priority = "mid";
    } else if (highPriorityEditButton.style.border.includes("solid")) {
      todoToEdit.priority = "high";
    }
    if(((differenceInDays(todoToEdit.dueDate, currentDate)) < 7) && ((differenceInDays(todoToEdit.dueDate, currentDate)) >= 0)){
      console.log(differenceInDays(todoToEdit.dueDate, currentDate))
      if(todosWeeks.find((todo)=> todo === todoToEdit) === undefined){

        todosWeeks.push(todoToEdit)
      }
    } else {
      todosWeeks.splice(indexWeeks,1)

    }
    if (((differenceInHours(todoToEdit.dueDate, currentDate) >= 0) && (differenceInHours(todoToEdit.dueDate, currentDate) <= 24))||((differenceInHours(todoToEdit.dueDate, currentDate) <= 0) && (differenceInHours(todoToEdit.dueDate, currentDate) >= -24))){
      console.log(differenceInHours(todoToEdit.dueDate, currentDate));
      if(todosToday.find((todo)=> todo === todoToEdit) === undefined){

        todosToday.push(todoToEdit)
      }
    }else {
      todosToday.splice(indexToday, 1)
    }
  

    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
    editTodoForm.removeEventListener("submit", saveEdit);
    if (projects !== "" && clickedObj.thisProjectClicked) {
      for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
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
