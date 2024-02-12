import { todos, todosToday, todosWeeks } from "./storetodos.js";
import { renderDOM, renderTodayTodos, renderWeeksTodos } from "./renderDOM.js";
import { projects } from "./add-projects.js";
import { clickedObj } from "./index.js";
import { renderProjectTodo } from "./renderDOM.js";
function deleteTodo(todoID) {
  const todoToEdit = todos.find((todo) => todo.todoID === todoID);
  const index = todos.findIndex(function (value) {
    return value.todoID === todoID;
  });
  if (todosToday.includes(todoToEdit)) {
    todosToday.splice(index, 1);
  }
  if (todosWeeks.includes(todoToEdit)) {
    todosWeeks.splice(index, 1);
  }
  if (projects !== "" && clickedObj.thisProjectClicked) {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        project.projectTodos.splice(index, 1);
        renderProjectTodo(project.projectTodos);
      }
    }
    todos.splice(index, 1);
    return;
  } else if (projects !== "" && clickedObj.homeClicked) {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        console.log("hiiiiiii");
        project.projectTodos.splice(index, 1);
        renderProjectTodo(project.projectTodos);
      }
    }
    todos.splice(index, 1);
    renderDOM();
    return;
  }

  renderDOM();
}
export { deleteTodo };
