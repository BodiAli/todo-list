import background from "./images/project-background.png";
import { renderDOM, renderProjectTodo } from "./renderDOM";
import { clickedObj } from "./index.js";
import { differenceInDays, differenceInHours } from "date-fns";
import { todosProject, Todos, todos, todosToday, todosWeeks } from "./storetodos.js";
import { editTodos } from "./form-edit-submit.js";
const content = document.getElementById("content");
const darkOverlay = document.getElementById("dark-overlay");
const addProjectForm = document.getElementById("add-project");
const projectsList = document.getElementById("projects");
const addTodoInProjectForm = document.getElementById("add-todo-in-project");
const lowPriorityButtonProject = document.getElementById("low-in-project");
const midPriorityButtonProject = document.getElementById("mid-in-project");
const highPriorityButtonProject = document.getElementById("high-in-project");
const currentDate = new Date();
const projects = [];
class Project {
  constructor(title, todos) {
    (this.title = title), (this.projectTodos = todos), (this.projectID = projects.length + 1);
  }
}

function addProject() {
  content.innerHTML = "";
  const projectResultRow = document.createElement("div");
  const projectResult = document.createElement("div");
  const projectResultText = document.createElement("div");
  const myH3 = document.createElement("h3");
  const myDeleteProjectButton = document.createElement("button");
  myDeleteProjectButton.setAttribute("id", "delete-project");
  myDeleteProjectButton.classList.add("btn-close");
  myDeleteProjectButton.classList.add("delete-project");
  projectResultRow.setAttribute("id", "project-result-row");
  projectResultRow.classList.add("h-100");
  projectResultRow.classList.add("row");
  projectResultRow.classList.add("w-100");
  projectResultRow.classList.add("gap-3");

  projectResult.setAttribute("id", "project-result");
  projectResult.classList.add("column");
  projectResult.classList.add("col-5");
  projectResult.classList.add("h-50");
  projectResult.classList.add("mb-0");
  projectResult.classList.add("border");
  projectResult.classList.add("border-3");
  projectResult.classList.add("border-dark");
  projectResult.classList.add("rounded");
  projectResult.classList.add("custom-project");
  projectResult.classList.add("position-relative");

  projectResultText.classList.add("d-flex");
  projectResultText.classList.add("justify-content-center");
  projectResultText.classList.add("align-items-center");
  projectResultText.classList.add("w-100");
  projectResultText.classList.add("h-100");

  myH3.classList.add("mb-0");
  myH3.classList.add("project-title");
  projectResultText.appendChild(myH3);
  projectResult.appendChild(projectResultText);
  projectResult.appendChild(myDeleteProjectButton);

  content.appendChild(projectResultRow);
  for (let i = 0; i < projects.length; i++) {
    const element = projects[i];
    const newProjectResult = projectResult.cloneNode(true);
    const newDivProjectTitle = newProjectResult.querySelector(".project-title");
    newProjectResult.style.backgroundImage = `url(${background})`;
    const newCloseProjectButton = newProjectResult.querySelector(".delete-project");
    newCloseProjectButton.projectID = element.projectID;
    newDivProjectTitle.textContent = element.title;
    projectResultRow.appendChild(newProjectResult);
  }
}

function saveTodosOnProjectFormSubmit(resID, project) {
  const saveTodoInProject = function (ev) {
    ev.preventDefault();
    const todoTitleInProjectValue = document.getElementById("title-in-project").value;
    const todoDetailsInProjectValue = document.getElementById("textarea-in-project").value;
    const todoDateInProjectValue = document.getElementById("date-in-project").value;
    let priority;
    if (lowPriorityButtonProject.style.border.includes("solid")) {
      priority = "low";
    } else if (midPriorityButtonProject.style.border.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButtonProject.style.border.includes("solid")) {
      priority = "high";
    }
    if (resID !== project.projectID) {
      console.log(resID, project.projectID, "faaaaaalse");
      return;
    } else if (resID === project.projectID) {
      const todo = new Todos(
        todoTitleInProjectValue,
        todoDetailsInProjectValue,
        todoDateInProjectValue,
        priority
      );
      todos.push(todo);
      project.projectTodos.push(todo);
      if(((differenceInDays(todo.dueDate, currentDate)) < 7) && ((differenceInDays(todo.dueDate, currentDate)) >= 0)){
        console.log(differenceInDays(todo.dueDate, currentDate))
        todosWeeks.push(todo)
      }
      if (((differenceInHours(todo.dueDate, currentDate) >= 0) && (differenceInHours(todo.dueDate, currentDate) <= 24))||((differenceInHours(todo.dueDate, currentDate) <= 0) && (differenceInHours(todo.dueDate, currentDate) >= -24))){
        console.log(differenceInHours(todo.dueDate, currentDate));
        todosToday.push(todo);   
      }
  
      renderProjectTodo(project.projectTodos);
      addTodoInProjectForm.style.display = "none";
      darkOverlay.classList.remove("dark-overlay6");
    }
  };

  addTodoInProjectForm.addEventListener("submit", saveTodoInProject);

  return saveTodoInProject;
}

function addProjectName() {
  projectsList.innerHTML = "";
  let saveTodoInProject = null;
  console.log(projects)
  projects.forEach(function (project) {
    // if(project.projectTodos.length == "") {
      //   console.log("hii")
      // }
    if ((project.projectTodos == "")){ 
      project.projectTodos = []
      console.log("hiii")
    }
    // if (project.projectTodos == ""){
    //   project.projectTodos = []
    // }
    
    let resID;
    let footer;
    const newList = document.createElement("li");
    newList.classList.add("list-group-item");
    newList.classList.add("ms-3");
    newList.classList.add("project-lists");
    newList.textContent = project.title;
    newList.projectID = project.projectID;
    

    newList.addEventListener("click", function listClick(ev) {
      clickedObj.homeClicked = false;
      clickedObj.todayClicked = false;
      clickedObj.weekClicked = false;
      clickedObj.projectsClicked = false;
      clickedObj.thisProjectClicked = true;
      clickedObj.notesClicked = false;

      footer = addTodoInProjectForm.querySelector("#add-todo-in-project-footer");
      footer.textContent = newList.textContent;
      const allListItems = document.querySelectorAll(".project-lists");
      allListItems.forEach((item) => {
        item.style.border = "none";
      });
      newList.style.border = "2px solid black";

      content.innerHTML = "";
      resID = ev.target.projectID;
      if (ev.target.projectID === project.projectID) {
        if (project.projectTodos !== undefined) {
          renderProjectTodo(project.projectTodos);
          
        }
      }
      if (saveTodoInProject !== null) {
        addTodoInProjectForm.removeEventListener("submit", saveTodoInProject);
      }

      saveTodoInProject = saveTodosOnProjectFormSubmit(resID, project);
    });
    projectsList.appendChild(newList);
  });
}
function saveProjectsOnSubmit() {
  addProjectForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const addProjectTitle = document.getElementById("add-project-title").value;
    const project = new Project(addProjectTitle);
    projects.push(project);
    addProjectForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay5");
    addProject();
    addProjectName();
  });
}
export { saveProjectsOnSubmit, projects, addProject, addProjectName, addTodoInProjectForm };
