import { addProject, addProjectName, addTodoInProjectForm, localProjects } from "./add-projects";
import { localTodos, localTodosToday, localTodosWeeks } from "./storetodos";
const content = document.getElementById("content");
let saveTodoInProject = null;
function projectDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < localProjects.length; i++) {
      const element = localProjects[i];
      if (ev.target.projectID === element.projectID && ev.target.classList.contains("btn-close")) {
        const index = localProjects.findIndex(function (value) {
          return value.projectID === element.projectID;
        });
        element.projectTodos.forEach((todo) => {
          const indexMain = localTodos.findIndex(function (value) {
            return value.todoID === todo.todoID;
          });
          localTodos.splice(indexMain, 1);
          if (localTodosWeeks.includes(todo)) {
            const indexWeek = localTodosWeeks.findIndex(function (value) {
              return value.todoID === todo.todoID;
            });
            localTodosWeeks.splice(indexWeek, 1);
          }
          if (localTodosToday.includes(todo)) {
            const indexToday = localTodosToday.findIndex(function (value) {
              return value.todoID === todo.todoID;
            });
            localTodosToday.splice(indexToday, 1);
          }
          console.log(todo.todoID);
          console.log(localTodosToday.includes(todo.todoID));
        });
        localStorage.setItem("localTodos", JSON.stringify(localTodos));
        localStorage.setItem("localTodosWeeks", JSON.stringify(localTodosWeeks));
        localStorage.setItem("localTodosToday", JSON.stringify(localTodosToday));
        localProjects.splice(index, 1);
        localStorage.setItem("localProjects", JSON.stringify(localProjects));
        addProject();
        addProjectName();
        if (saveTodoInProject !== null) {
          addTodoInProjectForm.removeEventListener("submit", saveTodoInProject);
        }
      }
    }
  });
}
export { projectDeleteButton };
