import { addProject, addProjectName, addTodoInProjectForm, localProjects } from "./add-projects";
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
