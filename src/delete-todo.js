import { todos, todosToday, todosWeeks, localTodos, localTodosToday, localTodosWeeks } from "./storetodos.js";
import { renderDOM } from "./renderDOM.js";
import { localProjects } from "./add-projects.js";
import { clickedObj } from "./index.js";
import { renderProjectTodo } from "./renderDOM.js";
function deleteTodo(todoID) {
  const todoToEdit = localTodos.find((todo) => todo.todoID === todoID);
  const index = localTodos.findIndex(function (value) {
    return value.todoID === todoID;
  });
  if (localTodosToday.includes(todoToEdit)) {
    const indexRes = localTodosToday.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    localTodosToday.splice(indexRes, 1);
    localStorage.setItem("localTodosToday", JSON.stringify(localTodosToday));
  }
  if (localTodosWeeks.includes(todoToEdit)) {
    const indexRes = localTodosWeeks.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    localTodosWeeks.splice(indexRes, 1);
    localStorage.setItem("localTodosWeeks", JSON.stringify(localTodosWeeks));
  }
  if (localProjects !== "" && clickedObj.thisProjectClicked) {
    for (let i = 0; i < localProjects.length; i++) {
      const project = localProjects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });

        project.projectTodos.splice(indexRes, 1);
        localStorage.setItem("localProjects", JSON.stringify(localProjects));

        renderProjectTodo(project.projectTodos);
      }
    }
    localTodos.splice(index, 1);
    localStorage.setItem("localTodos", JSON.stringify(localTodos));
    return;
  } else if (localProjects !== "" && clickedObj.homeClicked) {
    for (let i = 0; i < localProjects.length; i++) {
      const project = localProjects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });
        project.projectTodos.splice(indexRes, 1);
        localStorage.setItem("localProjects", JSON.stringify(localProjects));

        renderProjectTodo(project.projectTodos);
      }
    }
    localTodos.splice(index, 1);
    localStorage.setItem("localTodos", JSON.stringify(localTodos));

    renderDOM();
    return;
  }

  renderDOM();
}
export { deleteTodo };
