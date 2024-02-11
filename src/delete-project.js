import { projects, addProject, addProjectName } from "./add-projects";
const content = document.getElementById("content");
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
      }
    }
  });
}
export { projectDeleteButton };
