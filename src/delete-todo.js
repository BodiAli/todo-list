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
    const indexRes = todosToday.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    todosToday.splice(indexRes, 1);
  }
  if (todosWeeks.includes(todoToEdit)) {
    const indexRes = todosWeeks.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    todosWeeks.splice(indexRes, 1);
  }
  if (projects !== "" && clickedObj.thisProjectClicked) {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });

        project.projectTodos.splice(indexRes, 1);
        renderProjectTodo(project.projectTodos);
      }
    }
    todos.splice(index, 1);
    return;
  } else if (projects !== "" && clickedObj.homeClicked) {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });
        console.log("hiiiiiii");
        project.projectTodos.splice(indexRes, 1);
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
