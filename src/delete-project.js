import { projects, addProject, addProjectName, addTodoInProjectForm } from "./add-projects";
const content = document.getElementById("content");
let saveTodoInProject = null;
function projectDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < projects.length; i++) {
      const element = projects[i];
      if (ev.target.projectID === element.projectID && ev.target.classList.contains("btn-close")) {
        const resID = ev.target.projectID;
        const index = projects.findIndex(function (value) {
          return value.projectID === element.projectID;
        });
        projects.splice(index, 1);
        console.log(projects);
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
