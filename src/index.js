import "./reset.css";
import "./style.css";
import "bootstrap";
import addImages from "./add-images.js";
import getFormData from "./form-ui.js";
import { todoDeleteButton, todoEditButton, todoDetailsButton, todoCheckedButton } from "./todo-buttons.js";
import { editFormUI } from "./form-edit-ui.js";
import { saveTodosOnSubmit } from "./storetodos.js";
import { renderDOM, renderTodayTodos, renderWeeksTodos } from "./renderDOM.js";
import { saveNotesOnSubmit, addNote } from "./add-note.js";
import { noteDeleteButton } from "./delete-note.js";
import { addProject, saveProjectsOnSubmit, addProjectName } from "./add-projects.js";
import { projectDeleteButton } from "./delete-project.js";
const addTodoButton = document.getElementById("add");
const addForm = document.getElementById("add-todo");
const editForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetails = document.getElementById("display-details");
const homeButton = document.getElementById("home-button");
const todayButton = document.getElementById("today-button");
const weekButton = document.getElementById("week-button");
const projectsButton = document.getElementById("projects-button");
const notesButton = document.getElementById("notes-button");
const content = document.getElementById("content");
const addNoteForm = document.getElementById("add-note");
const addProjectForm = document.getElementById("add-project");
const addTodoInProject = document.getElementById("add-todo-in-project");
const todoTitleValue = document.getElementById("title");
const todoDetail = document.getElementById("textarea");
const todoDateValue = document.getElementById("date");
const lowPriorityButton = document.getElementById("low");
const midPriorityButton = document.getElementById("mid");
const highPriorityButton = document.getElementById("high");
const todoTitleInProjectValue = document.getElementById("title-in-project");
const todoDetailsInProjectValue = document.getElementById("textarea-in-project");
const todoDateInProjectValue = document.getElementById("date-in-project");
const lowPriorityButtonProject = document.getElementById("low-in-project");
const midPriorityButtonProject = document.getElementById("mid-in-project");
const highPriorityButtonProject = document.getElementById("high-in-project");
const addProjectTitle = document.getElementById("add-project-title");
const addNoteTitle = document.getElementById("add-note-title");
const addNoteDetails = document.getElementById("textarea-note");

const clickedObj = {
  homeClicked: false,
  todayClicked: false,
  weekClicked: false,
  projectsClicked: false,
  thisProjectClicked: false,
  notesClicked: false,
};
addTodoButton.addEventListener("click", showForm);
getFormData();
addImages();
todoDeleteButton();
todoEditButton();
todoDetailsButton();
todoCheckedButton();
editFormUI();
saveTodosOnSubmit();
saveNotesOnSubmit();
noteDeleteButton();
saveProjectsOnSubmit();
projectDeleteButton();
document.addEventListener("click", (ev) => {
  if (!addForm.contains(ev.target) && ev.target.tagName !== "I") {
    addForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
  }
});
document.addEventListener("click", (ev) => {
  if (!addTodoInProject.contains(ev.target) && ev.target.tagName !== "I") {
    addTodoInProject.style.display = "none";
    darkOverlay.classList.remove("dark-overlay6");
  }
});
document.addEventListener("click", (ev) => {
  if (!addNoteForm.contains(ev.target) && ev.target.tagName !== "I") {
    addNoteForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay4");
  }
});
document.addEventListener("click", (ev) => {
  if (!addProjectForm.contains(ev.target) && ev.target.tagName !== "I") {
    addProjectForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay5");
  }
});
document.addEventListener("click", (ev) => {
  if (!editForm.contains(ev.target) && !ev.target.classList.contains("edit")) {
    editForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
  }
});
document.addEventListener("click", (ev) => {
  if (!displayTodoDetails.contains(ev.target) && !ev.target.classList.contains("details")) {
    displayTodoDetails.style.display = "none";
    darkOverlay.classList.remove("dark-overlay3");
  }
});
function showForm(ev) {
  if (!clickedObj.projectsClicked && !clickedObj.notesClicked && !clickedObj.thisProjectClicked) {
    todoTitleValue.value = "";
    todoDetail.value = "";
    todoDateValue.value = "";
    lowPriorityButton.style.outline = "none";
    midPriorityButton.style.outline = "none";
    highPriorityButton.style.outline = "none";
    addForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay");
  } else if (clickedObj.notesClicked) {
    addNoteTitle.value = "";
    addNoteDetails.value = "";
    addNoteForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay4");
  } else if (clickedObj.projectsClicked) {
    addProjectTitle.value = "";
    addProjectForm.style.display = "block";
    darkOverlay.classList.add("dark-overlay5");
  } else if (clickedObj.thisProjectClicked) {
    todoTitleInProjectValue.value = "";
    todoDetailsInProjectValue.value = "";
    todoDateInProjectValue.value = "";
    lowPriorityButtonProject.style.outline = "none";
    midPriorityButtonProject.style.outline = "none";
    highPriorityButtonProject.style.outline = "none";
    addTodoInProject.style.display = "block";
    darkOverlay.classList.add("dark-overlay6");
  }
}

homeButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  renderDOM();
  homeButton.classList.add("clicked");
  todayButton.classList.remove("clicked");
  weekButton.classList.remove("clicked");
  projectsButton.classList.remove("clicked");
  notesButton.classList.remove("clicked");
  const allListItems = document.querySelectorAll(".project-lists");
  allListItems.forEach(function (item) {
    item.classList.remove("clicked2");
  });
});
todayButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  renderTodayTodos();
  homeButton.classList.remove("clicked");
  todayButton.classList.add("clicked");
  weekButton.classList.remove("clicked");
  projectsButton.classList.remove("clicked");
  notesButton.classList.remove("clicked");
  const allListItems = document.querySelectorAll(".project-lists");
  allListItems.forEach(function (item) {
    item.classList.remove("clicked2");
  });
});
weekButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  renderWeeksTodos();
  homeButton.classList.remove("clicked");
  todayButton.classList.remove("clicked");
  weekButton.classList.add("clicked");
  projectsButton.classList.remove("clicked");
  notesButton.classList.remove("clicked");
  const allListItems = document.querySelectorAll(".project-lists");
  allListItems.forEach(function (item) {
    item.classList.remove("clicked2");
  });
});
projectsButton.addEventListener("click", function (ev) {
  clickedObj.homeClicked = false;
  clickedObj.todayClicked = false;
  clickedObj.weekClicked = false;
  clickedObj.projectsClicked = true;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  content.innerHTML = "";
  addProject();
  homeButton.classList.remove("clicked");
  todayButton.classList.remove("clicked");
  weekButton.classList.remove("clicked");
  projectsButton.classList.add("clicked");
  notesButton.classList.remove("clicked");
  const allListItems = document.querySelectorAll(".project-lists");
  allListItems.forEach(function (item) {
    item.classList.remove("clicked2");
  });
});

notesButton.addEventListener("click", function () {
  clickedObj.homeClicked = false;
  clickedObj.todayClicked = false;
  clickedObj.weekClicked = false;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = true;
  content.innerHTML = "";
  addNote();
  homeButton.classList.remove("clicked");
  todayButton.classList.remove("clicked");
  weekButton.classList.remove("clicked");
  projectsButton.classList.remove("clicked");
  notesButton.classList.add("clicked");
  const allListItems = document.querySelectorAll(".project-lists");
  allListItems.forEach(function (item) {
    item.classList.remove("clicked2");
  });
});

export { clickedObj };
document.addEventListener("DOMContentLoaded", addProjectName);
document.addEventListener("DOMContentLoaded", renderDOM);
document.addEventListener("DOMContentLoaded", function (ev) {
  clickedObj.homeClicked = true;
  clickedObj.todayClicked = true;
  clickedObj.weekClicked = true;
  clickedObj.projectsClicked = false;
  clickedObj.thisProjectClicked = false;
  clickedObj.notesClicked = false;
  homeButton.classList.add("clicked");
  todayButton.classList.remove("clicked");
  weekButton.classList.remove("clicked");
  projectsButton.classList.remove("clicked");
  notesButton.classList.remove("clicked");
  const allListItems = document.querySelectorAll(".project-lists");
  allListItems.forEach(function (item) {
    item.classList.remove("clicked2");
  });
});
function applyStyles() {
  const mainContent = document.getElementById("main");
  const mobileButtons = document.getElementById("mobile-buttons");
  const mobileTodoDetails = document.getElementById("mobile-todo-details");
  const mobileTodoEditDetails = document.getElementById("mobile-todo-edit-details");
  const mobileTodoInProjectDetails = document.getElementById("mobile-todo-in-project-details");
  const addTodoFooter = document.getElementById("add-todo-footer");
  const addTodoInProjectFooter = document.getElementById("add-todo-in-project-footer");
  const mobileTextareaEdit = document.getElementById("textarea-edit");
  const editTodoFooter = document.getElementById("footer-edit");
  const dateEdit = document.getElementById("date-edit");
  const addProjectButton = document.getElementById("add-project-button");
  if (window.innerWidth <= 768) {
    mainContent.classList.remove("h-100");
    mobileTodoDetails.classList.remove("h-50");
    mobileTodoEditDetails.classList.remove("h-25");
    mobileTodoEditDetails.classList.remove("mb-5");
    mobileTodoInProjectDetails.classList.remove("h-50");
    todoDetail.classList.remove("h-100");
    todoDetailsInProjectValue.classList.remove("h-100");
    mobileButtons.classList.remove("w-50");
    todoDateValue.classList.remove("mb-4");
    addTodoFooter.classList.remove("h-25");
    addTodoInProjectFooter.classList.remove("h-25");
    mobileTextareaEdit.classList.remove("h-100");
    editTodoFooter.classList.remove("h-25");
    dateEdit.classList.remove("mt-5");
    addProjectButton.classList.remove("w-25");
  } else {
    mobileTodoDetails.classList.add("h-50");
    mobileTodoInProjectDetails.classList.add("h-50");
    todoDetailsInProjectValue.classList.add("h-100");
    mobileTodoEditDetails.classList.add("h-25");
    mobileTodoEditDetails.classList.add("mb-5");
    mainContent.classList.add("h-100");
    todoDetail.classList.add("h-100");
    mobileButtons.classList.add("w-50");
    todoDateValue.classList.add("mb-4");
    addTodoFooter.classList.add("h-25");
    addTodoInProjectFooter.classList.add("h-25");
    mobileTextareaEdit.classList.add("h-100");
    editTodoFooter.classList.add("h-25");
    dateEdit.classList.add("mt-5");
    addProjectButton.classList.add("w-25");
  }
}

window.onload = applyStyles;
window.onresize = applyStyles;
