/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/add-images.js":
/*!***************************!*\
  !*** ./src/add-images.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addImages)
/* harmony export */ });
/* harmony import */ var _images_task_list_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/task-list.png */ "./src/images/task-list.png");
/* harmony import */ var _images_task_list1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/task-list1.png */ "./src/images/task-list1.png");
/* harmony import */ var _images_form_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/form-background.jpg */ "./src/images/form-background.jpg");




function addImages() {
  const header = document.querySelector("header");
  const head = document.querySelector("head");
  const cardBodyAdd = document.querySelector(".card-body.card-img-overlay.add");
  const cardBodyEdit = document.querySelector(".card-body.card-img-overlay.edit");
  const cardBodyProject = document.querySelector(".card-body.card-img-overlay.add-in-project");
  const cardElementAdd = document.querySelector(".card.add");
  const cardElementEdit = document.querySelector(".card.edit");
  const cardElementProject = document.querySelector(".card.add-in-project");
  const linkTag = document.createElement("link");
  const formBackgroundImageAdd = new Image();
  formBackgroundImageAdd.src = _images_form_background_jpg__WEBPACK_IMPORTED_MODULE_2__;
  formBackgroundImageAdd.classList.add("card-img");
  formBackgroundImageAdd.setAttribute("id", "form-background");
  const formBackgroundImageEdit = new Image();
  formBackgroundImageEdit.src = _images_form_background_jpg__WEBPACK_IMPORTED_MODULE_2__;
  formBackgroundImageEdit.classList.add("card-img");
  formBackgroundImageEdit.setAttribute("id", "form-background-edit");
  const formBackgroundImageProject = new Image();
  formBackgroundImageProject.src = _images_form_background_jpg__WEBPACK_IMPORTED_MODULE_2__;
  formBackgroundImageProject.classList.add("card-img");
  formBackgroundImageProject.setAttribute("id", "form-background-project");
  linkTag.rel = "icon";
  linkTag.href = _images_task_list1_png__WEBPACK_IMPORTED_MODULE_1__;
  const iconHeader = new Image();
  iconHeader.src = _images_task_list_png__WEBPACK_IMPORTED_MODULE_0__;
  iconHeader.alt = "task list";
  header.appendChild(iconHeader);
  head.appendChild(linkTag);
  cardElementAdd.insertBefore(formBackgroundImageAdd, cardBodyAdd);
  cardElementEdit.insertBefore(formBackgroundImageEdit, cardBodyEdit);
  cardElementProject.insertBefore(formBackgroundImageProject, cardBodyProject);
}


/***/ }),

/***/ "./src/add-note.js":
/*!*************************!*\
  !*** ./src/add-note.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNote: () => (/* binding */ addNote),
/* harmony export */   notes: () => (/* binding */ notes),
/* harmony export */   saveNotesOnSubmit: () => (/* binding */ saveNotesOnSubmit)
/* harmony export */ });
const addNoteForm = document.getElementById("add-note");
const content = document.getElementById("content");
const darkOverlay = document.getElementById("dark-overlay");
const notes = [];
class Note {
  constructor(title, details, noteID) {
    (this.title = title), (this.details = details), (this.noteID = notes.length + 1);
  }
}
function addNote() {
  content.innerHTML = "";
  const noteResultRow = document.createElement("div");
  const noteResult = document.createElement("div");
  const noteResultText = document.createElement("div");
  const myDivTitleNote = document.createElement("div");
  const myDivParagraphNote = document.createElement("div");
  const myCloseNoteButton = document.createElement("button");
  myCloseNoteButton.setAttribute("id", "close-note");
  myCloseNoteButton.classList.add("btn-close");
  noteResultRow.setAttribute("id", "note-result-row");
  noteResultRow.classList.add("h-100");
  noteResultRow.classList.add("row");
  noteResultRow.classList.add("w-100");
  noteResultRow.classList.add("gap-4");

  noteResult.setAttribute("id", "note-result");
  noteResult.classList.add("column");
  noteResult.classList.add("col-6");
  noteResult.classList.add("h-50");
  noteResult.classList.add("w-25");
  noteResult.classList.add("mb-1");
  noteResult.classList.add("border");
  noteResult.classList.add("border-3");
  noteResult.classList.add("border-dark");
  noteResult.classList.add("bg-secondary");
  noteResult.classList.add("custom-shadow");
  noteResult.classList.add("position-relative");

  noteResultText.classList.add("d-flex");
  noteResultText.classList.add("flex-column");
  noteResultText.classList.add("justify-content-between");
  noteResultText.classList.add("align-items-center");
  noteResultText.classList.add("w-100");
  noteResultText.classList.add("h-100");
  noteResultText.classList.add("gap-3");
  noteResultText.classList.add("pe-3");
  noteResultText.classList.add("pt-3");
  noteResultText.classList.add("pb-3");

  myDivTitleNote.classList.add("mb-0");
  myDivTitleNote.classList.add("fs-4");
  myDivTitleNote.classList.add("custom-line-break");
  myDivTitleNote.classList.add("border-note");
  myDivTitleNote.classList.add("fw-bold");
  myDivTitleNote.classList.add("note-title");
  myDivTitleNote.classList.add("ps-2");
  myDivTitleNote.classList.add("pe-2");
  myDivTitleNote.setAttribute("contenteditable", "true");
  myDivTitleNote.setAttribute("spellcheck", "false");

  myDivTitleNote.style.outline = "2px dotted gray";

  myDivParagraphNote.classList.add("mb-0");
  myDivParagraphNote.classList.add("fs-5");
  myDivParagraphNote.classList.add("h-100");
  myDivParagraphNote.classList.add("w-100");
  myDivParagraphNote.classList.add("overflow-auto");
  myDivParagraphNote.classList.add("border-note");
  myDivParagraphNote.classList.add("note-paragraph");
  myDivParagraphNote.setAttribute("contenteditable", "true");
  myDivParagraphNote.setAttribute("spellcheck", "false");
  noteResultText.appendChild(myDivTitleNote);
  noteResultText.appendChild(myDivParagraphNote);
  noteResult.appendChild(myCloseNoteButton);
  noteResult.appendChild(noteResultText);

  content.appendChild(noteResultRow);

  for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    const newNoteResult = noteResult.cloneNode(true);
    const newDivNote = newNoteResult.querySelector(".note-title");
    const newDivParagraph = newNoteResult.querySelector(".note-paragraph");
    const newCloseNoteButton = newNoteResult.querySelector(".btn-close");
    newCloseNoteButton.noteID = element.noteID;
    newDivNote.textContent = element.title;
    newDivParagraph.textContent = element.details;
    newDivNote.addEventListener("input", function () {
      limitText(this, 25);
      element.title = newDivNote.textContent;
    });
    newDivParagraph.addEventListener("input", function () {
      element.details = newDivParagraph.textContent;
    });
    noteResultRow.appendChild(newNoteResult);
  }
}
function limitText(element, maxLength) {
  if (element.textContent.length > maxLength) {
    element.textContent = element.textContent.slice(0, maxLength);
  }
}
function saveNotesOnSubmit() {
  addNoteForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const addNoteTitle = document.getElementById("add-note-title").value;
    const addNoteDetails = document.getElementById("textarea-note").value;
    const note = new Note(addNoteTitle, addNoteDetails);
    notes.push(note);
    addNoteForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay4");
    addNote();
  });
}



/***/ }),

/***/ "./src/add-projects.js":
/*!*****************************!*\
  !*** ./src/add-projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addProjectName: () => (/* binding */ addProjectName),
/* harmony export */   addTodoInProjectForm: () => (/* binding */ addTodoInProjectForm),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   saveProjectsOnSubmit: () => (/* binding */ saveProjectsOnSubmit)
/* harmony export */ });
/* harmony import */ var _images_project_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/project-background.png */ "./src/images/project-background.png");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInHours.mjs");
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _form_edit_submit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-edit-submit.js */ "./src/form-edit-submit.js");






const content = document.getElementById("content");
const darkOverlay = document.getElementById("dark-overlay");
const addProjectForm = document.getElementById("add-project");
const projectsList = document.getElementById("projects");
const addTodoInProjectForm = document.getElementById("add-todo-in-project");
const lowPriorityButtonProject = document.getElementById("low-in-project");
const midPriorityButtonProject = document.getElementById("mid-in-project");
const highPriorityButtonProject = document.getElementById("high-in-project");
const homeButton = document.getElementById("home-button");
const todayButton = document.getElementById("today-button");
const weekButton = document.getElementById("week-button");
const projectsButton = document.getElementById("projects-button");
const notesButton = document.getElementById("notes-button");
const currentDate = new Date();
const projects = [];

class Project {
  constructor(title) {
    (this.title = title), (this.projectTodos = []), (this.projectID = projects.length + 1);
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
  projectResultText.classList.add("project-click");

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
    const newDivProjectResultText = newProjectResult.querySelector(".project-click");
    newProjectResult.style.backgroundImage = `url(${_images_project_background_png__WEBPACK_IMPORTED_MODULE_0__})`;
    const newCloseProjectButton = newProjectResult.querySelector(".delete-project");
    newCloseProjectButton.projectID = element.projectID;
    newDivProjectResultText.projectID = element.projectID
    newDivProjectTitle.textContent = element.title;
    let resID;
    let footer
    newDivProjectResultText.addEventListener("click", function listClick(ev){
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.homeClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.todayClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.weekClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.projectsClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.thisProjectClicked = true;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.notesClicked = false;
      
      footer = addTodoInProjectForm.querySelector("#add-todo-in-project-footer");
      const allListItems = document.querySelectorAll(".project-lists");
      footer.textContent = `Add Todo In ${newDivProjectTitle.textContent}`;

      allListItems.forEach((item) => {
        if (item.projectID === ev.target.projectID) {
          item.classList.add("clicked2");
        } else {
          item.classList.remove("clicked2");
        }
      });

      resID = ev.target.projectID;
      console.log(resID)
      
      if (ev.target.projectID === element.projectID) {
        if (element.projectTodos !== undefined) {
          (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(element.projectTodos);
          
        }
      }
      if (saveTodoInProject !== null) {
        addTodoInProjectForm.removeEventListener("submit", saveTodoInProject);
      }

      saveTodoInProject = saveTodosOnProjectFormSubmit(resID, element);
      console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj)

    })
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
    if (lowPriorityButtonProject.style.outline.includes("solid")) {
      priority = "low";
    } else if (midPriorityButtonProject.style.outline.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButtonProject.style.outline.includes("solid")) {
      priority = "high";
    }
    if (resID !== project.projectID) {
      console.log(resID, project.projectID, "faaaaaalse");
      return;
    } else if (resID === project.projectID) {
      const todo = new _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.Todos(
        todoTitleInProjectValue,
        todoDetailsInProjectValue,
        todoDateInProjectValue,
        priority
      );
      console.log(resID, project.projectID)
      _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.todos.push(todo);
      project.projectTodos.push(todo);
      if((((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(todo.dueDate, currentDate)) < 7) && (((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(todo.dueDate, currentDate)) >= 0)){
        console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(todo.dueDate, currentDate))
        _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.todosWeeks.push(todo)
      }
      if ((((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) >= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) <= 24))||(((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) <= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) >= -24))){
        console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate));
        _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.todosToday.push(todo);   
      }
  
      (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
      addTodoInProjectForm.style.display = "none";
      darkOverlay.classList.remove("dark-overlay6");
    }
    
  };

  addTodoInProjectForm.addEventListener("submit", saveTodoInProject);

  return saveTodoInProject;
}

let saveTodoInProject = null;
function addProjectName() {
  projectsList.innerHTML = "";
  console.log(projects)
  projects.forEach(function (project) {

    let resID;
    let footer;
    const newList = document.createElement("li");
    newList.classList.add("list-group-item");
    newList.classList.add("ms-3");
    newList.classList.add("project-lists");
    newList.textContent = project.title;
    newList.projectID = project.projectID;
    

    newList.addEventListener("click", function listClick(ev) {
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.homeClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.todayClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.weekClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.projectsClicked = false;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.thisProjectClicked = true;
      _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.notesClicked = false;

      footer = addTodoInProjectForm.querySelector("#add-todo-in-project-footer");
      footer.textContent = `Add Todo In ${newList.textContent}`;
      const allListItems = document.querySelectorAll(".project-lists");
      allListItems.forEach((item) => {
        item.classList.remove("clicked2");
      });
      newList.classList.add("clicked2");
      homeButton.classList.remove("clicked");
      todayButton.classList.remove("clicked");
      weekButton.classList.remove("clicked");
      notesButton.classList.remove("clicked");
    
      content.innerHTML = "";
      resID = ev.target.projectID;
      if (ev.target.projectID === project.projectID) {
        if (project.projectTodos !== undefined) {
          (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
          
        }
      }
      if (saveTodoInProject !== null) {
        addTodoInProjectForm.removeEventListener("submit", saveTodoInProject);
      }

      saveTodoInProject = saveTodosOnProjectFormSubmit(resID, project);
      console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj)
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



/***/ }),

/***/ "./src/delete-note.js":
/*!****************************!*\
  !*** ./src/delete-note.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noteDeleteButton: () => (/* binding */ noteDeleteButton)
/* harmony export */ });
/* harmony import */ var _add_note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-note.js */ "./src/add-note.js");

const content = document.getElementById("content");
function noteDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < _add_note_js__WEBPACK_IMPORTED_MODULE_0__.notes.length; i++) {
      const element = _add_note_js__WEBPACK_IMPORTED_MODULE_0__.notes[i];
      if (ev.target.noteID === element.noteID && ev.target.classList.contains("btn-close")) {
        const resID = ev.target.noteID;
        const index = _add_note_js__WEBPACK_IMPORTED_MODULE_0__.notes.findIndex(function (value) {
          return value.noteID === element.noteID;
        });
        _add_note_js__WEBPACK_IMPORTED_MODULE_0__.notes.splice(index, 1);
        (0,_add_note_js__WEBPACK_IMPORTED_MODULE_0__.addNote)();
      }
    }
  });
}



/***/ }),

/***/ "./src/delete-project.js":
/*!*******************************!*\
  !*** ./src/delete-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectDeleteButton: () => (/* binding */ projectDeleteButton)
/* harmony export */ });
/* harmony import */ var _add_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-projects */ "./src/add-projects.js");

const content = document.getElementById("content");
let saveTodoInProject = null;
function projectDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < _add_projects__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
      const element = _add_projects__WEBPACK_IMPORTED_MODULE_0__.projects[i];
      if (ev.target.projectID === element.projectID && ev.target.classList.contains("btn-close")) {
        const resID = ev.target.projectID;
        const index = _add_projects__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(function (value) {
          return value.projectID === element.projectID;
        });
        _add_projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
        console.log(_add_projects__WEBPACK_IMPORTED_MODULE_0__.projects);
        (0,_add_projects__WEBPACK_IMPORTED_MODULE_0__.addProject)();
        (0,_add_projects__WEBPACK_IMPORTED_MODULE_0__.addProjectName)();
        if (saveTodoInProject !== null) {
          _add_projects__WEBPACK_IMPORTED_MODULE_0__.addTodoInProjectForm.removeEventListener("submit", saveTodoInProject);
        }
      }
    }
  });
}



/***/ }),

/***/ "./src/delete-todo.js":
/*!****************************!*\
  !*** ./src/delete-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _renderDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDOM.js */ "./src/renderDOM.js");
/* harmony import */ var _add_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-projects.js */ "./src/add-projects.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





function deleteTodo(todoID) {
  const todoToEdit = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.find((todo) => todo.todoID === todoID);
  const index = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.findIndex(function (value) {
    return value.todoID === todoID;
  });
  if (_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.includes(todoToEdit)) {
    const indexRes = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.splice(indexRes, 1);
  }
  if (_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.includes(todoToEdit)) {
    const indexRes = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.splice(indexRes, 1);
  }
  if (_add_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects !== "" && _index_js__WEBPACK_IMPORTED_MODULE_3__.clickedObj.thisProjectClicked) {
    for (let i = 0; i < _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
      const project = _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });

        project.projectTodos.splice(indexRes, 1);
        (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
      }
    }
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.splice(index, 1);
    return;
  } else if (_add_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects !== "" && _index_js__WEBPACK_IMPORTED_MODULE_3__.clickedObj.homeClicked) {
    for (let i = 0; i < _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
      const project = _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });
        project.projectTodos.splice(indexRes, 1);
        (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
      }
    }
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.splice(index, 1);
    (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderDOM)();
    return;
  }

  (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderDOM)();
}



/***/ }),

/***/ "./src/form-edit-submit.js":
/*!*********************************!*\
  !*** ./src/form-edit-submit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodos: () => (/* binding */ editTodos)
/* harmony export */ });
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _renderDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDOM.js */ "./src/renderDOM.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _add_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-projects.js */ "./src/add-projects.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInHours.mjs");





const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const content = document.getElementById("content");
const currentDate = new Date();
function editTodos(todoID) {
  const todoToEdit = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.find((todo) => todo.todoID === todoID);
  const indexWeeks = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.findIndex(function (value) {
    return value.noteID === todoToEdit.noteID;
  });
  const indexToday = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.findIndex(function (value) {
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

    if (lowPriorityEditButton.style.outline.includes("solid")) {
      todoToEdit.priority = "low";
    } else if (midPriorityEditButton.style.outline.includes("solid")) {
      todoToEdit.priority = "mid";
    } else if (highPriorityEditButton.style.outline.includes("solid")) {
      todoToEdit.priority = "high";
    }
    if((((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(todoToEdit.dueDate, currentDate)) < 7) && (((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(todoToEdit.dueDate, currentDate)) >= 0)){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(todoToEdit.dueDate, currentDate))
      if(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.find((todo)=> todo === todoToEdit) === undefined){

        _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.push(todoToEdit)
      }
    } else {
      _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.splice(indexWeeks,1)

    }
    if ((((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) >= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) <= 24))||(((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) <= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) >= -24))){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate));
      if(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.find((todo)=> todo === todoToEdit) === undefined){

        _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.push(todoToEdit)
      }
    }else {
      _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.splice(indexToday, 1)
    }
  

    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
    editTodoForm.removeEventListener("submit", saveEdit);
    if (_add_projects_js__WEBPACK_IMPORTED_MODULE_3__.projects !== "" && _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.thisProjectClicked) {
      for (let i = 0; i < _add_projects_js__WEBPACK_IMPORTED_MODULE_3__.projects.length; i++) {
        const project = _add_projects_js__WEBPACK_IMPORTED_MODULE_3__.projects[i];
        if (project.projectTodos.includes(todoToEdit)) {
          (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
        }
      }
      return;
    }
    (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderDOM)();
  });
}




/***/ }),

/***/ "./src/form-edit-ui.js":
/*!*****************************!*\
  !*** ./src/form-edit-ui.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editFormUI: () => (/* binding */ editFormUI)
/* harmony export */ });
const editTodoForm = document.getElementById("edit-todo");
const lowPriorityButton = document.getElementById("low-edit");
const midPriorityButton = document.getElementById("mid-edit");
const highPriorityButton = document.getElementById("high-edit");

function editFormUI() {
  editTodoForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "edit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-edit") {
        lowPriorityButton.style.outline = "2px solid black";
        midPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "mid-edit") {
        midPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "high-edit") {
        highPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        midPriorityButton.style.outline = "none";
      }
    }
  });
}



/***/ }),

/***/ "./src/form-ui.js":
/*!************************!*\
  !*** ./src/form-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFormData)
/* harmony export */ });
function getFormData() {
  const addForm = document.getElementById("add-todo");
  const lowPriorityButton = document.getElementById("low");
  const midPriorityButton = document.getElementById("mid");
  const highPriorityButton = document.getElementById("high");
  const lowPriorityButtonProject = document.getElementById("low-in-project");
  const midPriorityButtonProject = document.getElementById("mid-in-project");
  const highPriorityButtonProject = document.getElementById("high-in-project");
  const addTodoInProjectForm = document.getElementById("add-todo-in-project");

  addForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "submit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low") {
        lowPriorityButton.style.outline = "2px solid black";
        midPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "mid") {
        midPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        highPriorityButton.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "high") {
        highPriorityButton.style.outline = "2px solid black";
        lowPriorityButton.style.outline = "none";
        midPriorityButton.style.outline = "none";
      }
    }
  });
  addTodoInProjectForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "submit-form-in-project") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low-in-project") {
        lowPriorityButtonProject.style.outline = "2px solid black";
        midPriorityButtonProject.style.outline = "none";
        highPriorityButtonProject.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "mid-in-project") {
        midPriorityButtonProject.style.outline = "2px solid black";
        lowPriorityButtonProject.style.outline = "none";
        highPriorityButtonProject.style.outline = "none";
      } else if (ev.target.getAttribute("id") === "high-in-project") {
        highPriorityButtonProject.style.outline = "2px solid black";
        lowPriorityButtonProject.style.outline = "none";
        midPriorityButtonProject.style.outline = "none";
      }
    }
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickedObj: () => (/* binding */ clickedObj)
/* harmony export */ });
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _add_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-images.js */ "./src/add-images.js");
/* harmony import */ var _form_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-ui.js */ "./src/form-ui.js");
/* harmony import */ var _todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-buttons.js */ "./src/todo-buttons.js");
/* harmony import */ var _form_edit_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-edit-ui.js */ "./src/form-edit-ui.js");
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _renderDOM_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderDOM.js */ "./src/renderDOM.js");
/* harmony import */ var _add_note_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-note.js */ "./src/add-note.js");
/* harmony import */ var _delete_note_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-note.js */ "./src/delete-note.js");
/* harmony import */ var _add_projects_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-projects.js */ "./src/add-projects.js");
/* harmony import */ var _delete_project_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delete-project.js */ "./src/delete-project.js");












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
(0,_form_ui_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_add_images_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoDeleteButton)();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoEditButton)();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoDetailsButton)();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoCheckedButton)();
(0,_form_edit_ui_js__WEBPACK_IMPORTED_MODULE_5__.editFormUI)();
(0,_storetodos_js__WEBPACK_IMPORTED_MODULE_6__.saveTodosOnSubmit)();
(0,_add_note_js__WEBPACK_IMPORTED_MODULE_8__.saveNotesOnSubmit)();
(0,_delete_note_js__WEBPACK_IMPORTED_MODULE_9__.noteDeleteButton)();
(0,_add_projects_js__WEBPACK_IMPORTED_MODULE_10__.saveProjectsOnSubmit)();
(0,_delete_project_js__WEBPACK_IMPORTED_MODULE_11__.projectDeleteButton)();
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
  (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_7__.renderDOM)();
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
  (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_7__.renderTodayTodos)();
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
  (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_7__.renderWeeksTodos)();
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
  (0,_add_projects_js__WEBPACK_IMPORTED_MODULE_10__.addProject)();
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
  (0,_add_note_js__WEBPACK_IMPORTED_MODULE_8__.addNote)();
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




/***/ }),

/***/ "./src/renderDOM.js":
/*!**************************!*\
  !*** ./src/renderDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDOM: () => (/* binding */ renderDOM),
/* harmony export */   renderProjectTodo: () => (/* binding */ renderProjectTodo),
/* harmony export */   renderTodayTodos: () => (/* binding */ renderTodayTodos),
/* harmony export */   renderWeeksTodos: () => (/* binding */ renderWeeksTodos)
/* harmony export */ });
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _add_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-projects.js */ "./src/add-projects.js");



const content = document.getElementById("content");
const todoRow = document.getElementById("todo-row");
const localTodos = JSON.parse(localStorage.getItem("todos"));
function renderDOM() {
  content.innerHTML = "";
  for (let i = 0; i < localTodos.length; i++) {
    const element = localTodos[i];

    const myTodoRow = todoRow.cloneNode(true);
    const todoTitle = myTodoRow.querySelector("#todo-title");
    const todoDate = myTodoRow.querySelector("#todo-date");
    const todoDetailsButton = myTodoRow.querySelector(".details");
    const todoEditButton = myTodoRow.querySelector(".edit");
    const todoEditIconButton = myTodoRow.querySelector(".bi-pencil-fill");
    const todoDeleteIconButton = myTodoRow.querySelector(".bi-trash3-fill");
    const todoDeleteButton = myTodoRow.querySelector(".delete");
    todoDetailsButton.todoID = element.todoID;
    todoDeleteButton.todoID = element.todoID;
    todoEditButton.todoID = element.todoID;
    todoEditIconButton.todoID = element.todoID;
    todoDeleteIconButton.todoID = element.todoID;
    todoTitle.textContent = element.title;
    todoDate.textContent = element.dueDate;
    if (element.priority === "low") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-success");
    } else if (element.priority === "mid") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-warning");
    } else if (element.priority === "high") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-danger");
    }
    content.appendChild(myTodoRow);
  }
}
function renderTodayTodos() {
  for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday.length; i++) {
    const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosToday[i];
    const myTodoRow = todoRow.cloneNode(true);
    const todoTitle = myTodoRow.querySelector("#todo-title");
    const todoDate = myTodoRow.querySelector("#todo-date");
    const todoDetailsButton = myTodoRow.querySelector(".details");
    const todoEditButton = myTodoRow.querySelector(".edit");
    const todoEditIconButton = myTodoRow.querySelector(".bi-pencil-fill");
    const todoDeleteIconButton = myTodoRow.querySelector(".bi-trash3-fill");
    const todoDeleteButton = myTodoRow.querySelector(".delete");
    todoDetailsButton.todoID = element.todoID;
    todoDeleteButton.todoID = element.todoID;
    todoEditButton.todoID = element.todoID;
    todoEditIconButton.todoID = element.todoID;
    todoDeleteIconButton.todoID = element.todoID;
    todoTitle.textContent = element.title;
    todoDate.textContent = element.dueDate;
    if (element.priority === "low") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-success");
    } else if (element.priority === "mid") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-warning");
    } else if (element.priority === "high") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-danger");
    }
    content.appendChild(myTodoRow);
  }
}
function renderWeeksTodos() {
  for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks.length; i++) {
    const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todosWeeks[i];
    const myTodoRow = todoRow.cloneNode(true);
    const todoTitle = myTodoRow.querySelector("#todo-title");
    const todoDate = myTodoRow.querySelector("#todo-date");
    const todoDetailsButton = myTodoRow.querySelector(".details");
    const todoEditButton = myTodoRow.querySelector(".edit");
    const todoEditIconButton = myTodoRow.querySelector(".bi-pencil-fill");
    const todoDeleteIconButton = myTodoRow.querySelector(".bi-trash3-fill");
    const todoDeleteButton = myTodoRow.querySelector(".delete");
    todoDetailsButton.todoID = element.todoID;
    todoDeleteButton.todoID = element.todoID;
    todoEditButton.todoID = element.todoID;
    todoEditIconButton.todoID = element.todoID;
    todoDeleteIconButton.todoID = element.todoID;

    todoTitle.textContent = element.title;
    todoDate.textContent = element.dueDate;
    if (element.priority === "low") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-success");
    } else if (element.priority === "mid") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-warning");
    } else if (element.priority === "high") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-danger");
    }
    content.appendChild(myTodoRow);
  }
}
function renderProjectTodo(array) {
  content.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const project = array[i];
    const myTodoRow = todoRow.cloneNode(true);
    const todoTitle = myTodoRow.querySelector("#todo-title");
    const todoDate = myTodoRow.querySelector("#todo-date");
    const todoDetailsButton = myTodoRow.querySelector(".details");
    const todoEditButton = myTodoRow.querySelector(".edit");
    const todoEditIconButton = myTodoRow.querySelector(".bi-pencil-fill");
    const todoDeleteIconButton = myTodoRow.querySelector(".bi-trash3-fill");
    const todoDeleteButton = myTodoRow.querySelector(".delete");
    todoDetailsButton.todoID = project.todoID;
    todoDeleteButton.todoID = project.todoID;
    todoEditButton.todoID = project.todoID;
    todoEditIconButton.todoID = project.todoID;
    todoDeleteIconButton.todoID = project.todoID;
    todoTitle.textContent = project.title;
    todoDate.textContent = project.dueDate;
    if (project.priority === "low") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-success");
    } else if (project.priority === "mid") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-warning");
    } else if (project.priority === "high") {
      todoTitle.classList.remove("bg-dark");
      todoTitle.classList.remove("bg-opacity-10");
      todoTitle.classList.add("bg-opacity-25");
      todoTitle.classList.add("bg-danger");
    }
    content.appendChild(myTodoRow);
  }
}



/***/ }),

/***/ "./src/storetodos.js":
/*!***************************!*\
  !*** ./src/storetodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todos: () => (/* binding */ Todos),
/* harmony export */   saveTodosOnSubmit: () => (/* binding */ saveTodosOnSubmit),
/* harmony export */   todos: () => (/* binding */ todos),
/* harmony export */   todosProject: () => (/* binding */ todosProject),
/* harmony export */   todosToday: () => (/* binding */ todosToday),
/* harmony export */   todosWeeks: () => (/* binding */ todosWeeks)
/* harmony export */ });
/* harmony import */ var _renderDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderDOM.js */ "./src/renderDOM.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInHours.mjs");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const currentDate = new Date();
const darkOverlay = document.getElementById("dark-overlay");
const lowPriorityButton = document.getElementById("low");
const midPriorityButton = document.getElementById("mid");
const highPriorityButton = document.getElementById("high");
const todos = [];
const todosToday = [];
const todosWeeks = []
const todosProject = []
class Todos {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoID = todos.length + 1;
  }
}

const addTodoForm = document.getElementById("add-todo");
function saveTodosOnSubmit() {
  addTodoForm.addEventListener("submit", saveTodos);

  function saveTodos(ev) {
    ev.preventDefault();

    const todoTitleValue = document.getElementById("title").value;
    const todoDetailsValue = document.getElementById("textarea").value;
    const todoDateValue = document.getElementById("date").value;
    let priority;
    if (lowPriorityButton.style.outline.includes("solid")) {
      priority = "low";
    } else if (midPriorityButton.style.outline.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButton.style.outline.includes("solid")) {
      priority = "high";
    }
    const todo = new Todos(todoTitleValue, todoDetailsValue, todoDateValue, priority);
    
    todos.push(todo);
    if((((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, currentDate)) < 7) && (((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, currentDate)) >= 0)){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, currentDate))
      todosWeeks.push(todo)
    }
    if ((((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) >= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) <= 24))||(((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) <= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) >= -24))){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate));
      todosToday.push(todo);   
    }

    localStorage.todos = JSON.stringify(todos)
    localStorage.todosWeeks = JSON.stringify(todos)
    localStorage.todosToday = JSON.stringify(todos)

    ;(0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_0__.renderDOM)();
    addTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
  }
}



/***/ }),

/***/ "./src/todo-buttons.js":
/*!*****************************!*\
  !*** ./src/todo-buttons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoCheckedButton: () => (/* binding */ todoCheckedButton),
/* harmony export */   todoDeleteButton: () => (/* binding */ todoDeleteButton),
/* harmony export */   todoDetailsButton: () => (/* binding */ todoDetailsButton),
/* harmony export */   todoEditButton: () => (/* binding */ todoEditButton)
/* harmony export */ });
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _form_edit_submit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-edit-submit.js */ "./src/form-edit-submit.js");
/* harmony import */ var _delete_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-todo.js */ "./src/delete-todo.js");



const content = document.getElementById("content");
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetailsModal = document.getElementById("display-details");
const lowPriorityButtonEdit = document.getElementById("low-edit");
const midPriorityButtonEdit = document.getElementById("mid-edit");
const highPriorityButtonEdit = document.getElementById("high-edit");
const titleEditValue = document.getElementById("title-edit");
const descriptionEditValue = document.getElementById("textarea-edit");
const dueDateEditValue = document.getElementById("date-edit");

function todoCheckedButton() {
  content.addEventListener("click", function (ev) {
    if (ev.target.tagName === "INPUT" && ev.target.checked) {
      ev.target.parentElement.parentElement.parentElement.querySelector("#details").classList.add("disabled");
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#edit-button")
        .classList.add("disabled");
      ev.target.parentElement.parentElement.parentElement.querySelector("#todo-title").style.textDecoration =
        "line-through";
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#todo-date")
        .classList.add("text-secondary");
    } else if (ev.target.tagName === "INPUT" && !ev.target.checked) {
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#details")
        .classList.remove("disabled");
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#edit-button")
        .classList.remove("disabled");
      ev.target.parentElement.parentElement.parentElement.querySelector("#todo-title").style.textDecoration =
        "none";
      ev.target.parentElement.parentElement.parentElement
        .querySelector("#todo-date")
        .classList.remove("text-secondary");
    }
  });
}
function todoDeleteButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i];
      if (
        ev.target.todoID === element.todoID &&
        (ev.target.classList.contains("delete") || ev.target.classList.contains("bi-trash3-fill"))
      ) {
        const resID = ev.target.todoID;
        (0,_delete_todo_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(resID);
      }
    }
  });
}
function todoEditButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i];
      if (
        ev.target.todoID === element.todoID &&
        (ev.target.classList.contains("edit") || ev.target.classList.contains("bi-pencil-fill"))
      ) {
        const resID = ev.target.todoID;
        titleEditValue.value = "";
        descriptionEditValue.value = "";
        dueDateEditValue.value = "";
        lowPriorityButtonEdit.style.outline = "none";
        midPriorityButtonEdit.style.outline = "none";
        highPriorityButtonEdit.style.outline = "none";
        editTodoForm.style.display = "block";
        darkOverlay.classList.add("dark-overlay2");
        (0,_form_edit_submit_js__WEBPACK_IMPORTED_MODULE_1__.editTodos)(resID);
        break;
      }
    }
  });
}

function todoDetailsButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i];
      if (ev.target.todoID === element.todoID && ev.target.classList.contains("details")) {
        const displayTodoTitle = displayTodoDetailsModal.querySelector(".display-todo-title");
        const displayTodoDetails = displayTodoDetailsModal.querySelector(".display-todo-details");
        const displayTodoPriority = displayTodoDetailsModal.querySelector(".display-todo-priority");
        displayTodoTitle.textContent = element.title;
        displayTodoDetails.textContent = element.description;
        if (element.priority === "low") {
          displayTodoPriority.textContent = "LOW";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.style.backgroundColor = "green";
          displayTodoPriority.classList.add("fw-bold");
        } else if (element.priority === "mid") {
          displayTodoPriority.textContent = "MID";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.style.backgroundColor = "darkorange";
          displayTodoPriority.classList.add("fw-bold");
        } else if (element.priority === "high") {
          displayTodoPriority.textContent = "HIGH";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.style.backgroundColor = "rgba(255, 0, 0, 0.883)";
          displayTodoPriority.classList.add("fw-bold");
        } else if (element.priority === undefined) {
          displayTodoPriority.textContent = "NOT DEFINED";
          displayTodoPriority.style.textAlign = "center";
          displayTodoPriority.classList.add("fw-bold");
          displayTodoPriority.classList.add("bg-secondary");
        }
        displayTodoDetailsModal.style.display = "block";
        darkOverlay.classList.add("dark-overlay3");
      }
    }
  });
}




/***/ }),

/***/ "./src/images/form-background.jpg":
/*!****************************************!*\
  !*** ./src/images/form-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e8b8bd3621e3a1367db.jpg";

/***/ }),

/***/ "./src/images/project-background.png":
/*!*******************************************!*\
  !*** ./src/images/project-background.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7034766353a7a0f1503.png";

/***/ }),

/***/ "./src/images/task-list.png":
/*!**********************************!*\
  !*** ./src/images/task-list.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca414e41dc932eb10c96.png";

/***/ }),

/***/ "./src/images/task-list1.png":
/*!***********************************!*\
  !*** ./src/images/task-list1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00661723ecbfb8bf5621.png";

/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)
/* harmony export */ });
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInHours.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/differenceInHours.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInHours: () => (/* binding */ differenceInHours)
/* harmony export */ });
/* harmony import */ var _lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/getRoundingMethod.mjs */ "./node_modules/date-fns/_lib/getRoundingMethod.mjs");
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.mjs */ "./node_modules/date-fns/differenceInMilliseconds.mjs");




/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dateLeft, dateRight, options) {
  const diff =
    (0,_differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsInHour;
  return (0,_lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInHours);


/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInMilliseconds: () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMilliseconds);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTTZDO0FBQ047QUFDK0M7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZC1ub3RlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS1ub3RlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tZWRpdC1zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tZWRpdC11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS11aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlckRPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmV0b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1idXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFJvdW5kaW5nTWV0aG9kLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkhvdXJzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgaWNvbiBmcm9tIFwiLi9pbWFnZXMvdGFzay1saXN0LnBuZ1wiO1xuaW1wb3J0IHRhYkljb24gZnJvbSBcIi4vaW1hZ2VzL3Rhc2stbGlzdDEucG5nXCI7XG5pbXBvcnQgdG9kb0JhY2tncm91bmQgZnJvbSBcIi4vaW1hZ2VzL2Zvcm0tYmFja2dyb3VuZC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkSW1hZ2VzKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gIGNvbnN0IGNhcmRCb2R5QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWJvZHkuY2FyZC1pbWctb3ZlcmxheS5hZGRcIik7XG4gIGNvbnN0IGNhcmRCb2R5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1ib2R5LmNhcmQtaW1nLW92ZXJsYXkuZWRpdFwiKTtcbiAgY29uc3QgY2FyZEJvZHlQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWJvZHkuY2FyZC1pbWctb3ZlcmxheS5hZGQtaW4tcHJvamVjdFwiKTtcbiAgY29uc3QgY2FyZEVsZW1lbnRBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQuYWRkXCIpO1xuICBjb25zdCBjYXJkRWxlbWVudEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQuZWRpdFwiKTtcbiAgY29uc3QgY2FyZEVsZW1lbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLmFkZC1pbi1wcm9qZWN0XCIpO1xuICBjb25zdCBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IGZvcm1CYWNrZ3JvdW5kSW1hZ2VBZGQgPSBuZXcgSW1hZ2UoKTtcbiAgZm9ybUJhY2tncm91bmRJbWFnZUFkZC5zcmMgPSB0b2RvQmFja2dyb3VuZDtcbiAgZm9ybUJhY2tncm91bmRJbWFnZUFkZC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWdcIik7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VBZGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWJhY2tncm91bmRcIik7XG4gIGNvbnN0IGZvcm1CYWNrZ3JvdW5kSW1hZ2VFZGl0ID0gbmV3IEltYWdlKCk7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VFZGl0LnNyYyA9IHRvZG9CYWNrZ3JvdW5kO1xuICBmb3JtQmFja2dyb3VuZEltYWdlRWRpdC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWdcIik7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VFZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1iYWNrZ3JvdW5kLWVkaXRcIik7XG4gIGNvbnN0IGZvcm1CYWNrZ3JvdW5kSW1hZ2VQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VQcm9qZWN0LnNyYyA9IHRvZG9CYWNrZ3JvdW5kO1xuICBmb3JtQmFja2dyb3VuZEltYWdlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWdcIik7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1iYWNrZ3JvdW5kLXByb2plY3RcIik7XG4gIGxpbmtUYWcucmVsID0gXCJpY29uXCI7XG4gIGxpbmtUYWcuaHJlZiA9IHRhYkljb247XG4gIGNvbnN0IGljb25IZWFkZXIgPSBuZXcgSW1hZ2UoKTtcbiAgaWNvbkhlYWRlci5zcmMgPSBpY29uO1xuICBpY29uSGVhZGVyLmFsdCA9IFwidGFzayBsaXN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChpY29uSGVhZGVyKTtcbiAgaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiAgY2FyZEVsZW1lbnRBZGQuaW5zZXJ0QmVmb3JlKGZvcm1CYWNrZ3JvdW5kSW1hZ2VBZGQsIGNhcmRCb2R5QWRkKTtcbiAgY2FyZEVsZW1lbnRFZGl0Lmluc2VydEJlZm9yZShmb3JtQmFja2dyb3VuZEltYWdlRWRpdCwgY2FyZEJvZHlFZGl0KTtcbiAgY2FyZEVsZW1lbnRQcm9qZWN0Lmluc2VydEJlZm9yZShmb3JtQmFja2dyb3VuZEltYWdlUHJvamVjdCwgY2FyZEJvZHlQcm9qZWN0KTtcbn1cbiIsImNvbnN0IGFkZE5vdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbm90ZVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuY29uc3Qgbm90ZXMgPSBbXTtcbmNsYXNzIE5vdGUge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgbm90ZUlEKSB7XG4gICAgKHRoaXMudGl0bGUgPSB0aXRsZSksICh0aGlzLmRldGFpbHMgPSBkZXRhaWxzKSwgKHRoaXMubm90ZUlEID0gbm90ZXMubGVuZ3RoICsgMSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZE5vdGUoKSB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3Qgbm90ZVJlc3VsdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5vdGVSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBub3RlUmVzdWx0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG15RGl2VGl0bGVOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbXlEaXZQYXJhZ3JhcGhOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbXlDbG9zZU5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBteUNsb3NlTm90ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlLW5vdGVcIik7XG4gIG15Q2xvc2VOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIik7XG4gIG5vdGVSZXN1bHRSb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlLXJlc3VsdC1yb3dcIik7XG4gIG5vdGVSZXN1bHRSb3cuY2xhc3NMaXN0LmFkZChcImgtMTAwXCIpO1xuICBub3RlUmVzdWx0Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gIG5vdGVSZXN1bHRSb3cuY2xhc3NMaXN0LmFkZChcInctMTAwXCIpO1xuICBub3RlUmVzdWx0Um93LmNsYXNzTGlzdC5hZGQoXCJnYXAtNFwiKTtcblxuICBub3RlUmVzdWx0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZS1yZXN1bHRcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgbm90ZVJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiY29sLTZcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImgtNTBcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcInctMjVcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcIm1iLTFcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImJvcmRlclwiKTtcbiAgbm90ZVJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLTNcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImJvcmRlci1kYXJrXCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJiZy1zZWNvbmRhcnlcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1zaGFkb3dcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uLXJlbGF0aXZlXCIpO1xuXG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIik7XG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNvbHVtblwiKTtcbiAgbm90ZVJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIpO1xuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiYWxpZ24taXRlbXMtY2VudGVyXCIpO1xuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwidy0xMDBcIik7XG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJoLTEwMFwiKTtcbiAgbm90ZVJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImdhcC0zXCIpO1xuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwicGUtM1wiKTtcbiAgbm90ZVJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcInB0LTNcIik7XG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwYi0zXCIpO1xuXG4gIG15RGl2VGl0bGVOb3RlLmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIpO1xuICBteURpdlRpdGxlTm90ZS5jbGFzc0xpc3QuYWRkKFwiZnMtNFwiKTtcbiAgbXlEaXZUaXRsZU5vdGUuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1saW5lLWJyZWFrXCIpO1xuICBteURpdlRpdGxlTm90ZS5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLW5vdGVcIik7XG4gIG15RGl2VGl0bGVOb3RlLmNsYXNzTGlzdC5hZGQoXCJmdy1ib2xkXCIpO1xuICBteURpdlRpdGxlTm90ZS5jbGFzc0xpc3QuYWRkKFwibm90ZS10aXRsZVwiKTtcbiAgbXlEaXZUaXRsZU5vdGUuY2xhc3NMaXN0LmFkZChcInBzLTJcIik7XG4gIG15RGl2VGl0bGVOb3RlLmNsYXNzTGlzdC5hZGQoXCJwZS0yXCIpO1xuICBteURpdlRpdGxlTm90ZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICBteURpdlRpdGxlTm90ZS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwiZmFsc2VcIik7XG5cbiAgbXlEaXZUaXRsZU5vdGUuc3R5bGUub3V0bGluZSA9IFwiMnB4IGRvdHRlZCBncmF5XCI7XG5cbiAgbXlEaXZQYXJhZ3JhcGhOb3RlLmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIpO1xuICBteURpdlBhcmFncmFwaE5vdGUuY2xhc3NMaXN0LmFkZChcImZzLTVcIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5jbGFzc0xpc3QuYWRkKFwiaC0xMDBcIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5jbGFzc0xpc3QuYWRkKFwidy0xMDBcIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctYXV0b1wiKTtcbiAgbXlEaXZQYXJhZ3JhcGhOb3RlLmNsYXNzTGlzdC5hZGQoXCJib3JkZXItbm90ZVwiKTtcbiAgbXlEaXZQYXJhZ3JhcGhOb3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlLXBhcmFncmFwaFwiKTtcbiAgbXlEaXZQYXJhZ3JhcGhOb3RlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwiZmFsc2VcIik7XG4gIG5vdGVSZXN1bHRUZXh0LmFwcGVuZENoaWxkKG15RGl2VGl0bGVOb3RlKTtcbiAgbm90ZVJlc3VsdFRleHQuYXBwZW5kQ2hpbGQobXlEaXZQYXJhZ3JhcGhOb3RlKTtcbiAgbm90ZVJlc3VsdC5hcHBlbmRDaGlsZChteUNsb3NlTm90ZUJ1dHRvbik7XG4gIG5vdGVSZXN1bHQuYXBwZW5kQ2hpbGQobm90ZVJlc3VsdFRleHQpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZVJlc3VsdFJvdyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBub3Rlc1tpXTtcbiAgICBjb25zdCBuZXdOb3RlUmVzdWx0ID0gbm90ZVJlc3VsdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgbmV3RGl2Tm90ZSA9IG5ld05vdGVSZXN1bHQucXVlcnlTZWxlY3RvcihcIi5ub3RlLXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld0RpdlBhcmFncmFwaCA9IG5ld05vdGVSZXN1bHQucXVlcnlTZWxlY3RvcihcIi5ub3RlLXBhcmFncmFwaFwiKTtcbiAgICBjb25zdCBuZXdDbG9zZU5vdGVCdXR0b24gPSBuZXdOb3RlUmVzdWx0LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlXCIpO1xuICAgIG5ld0Nsb3NlTm90ZUJ1dHRvbi5ub3RlSUQgPSBlbGVtZW50Lm5vdGVJRDtcbiAgICBuZXdEaXZOb3RlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICBuZXdEaXZQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBlbGVtZW50LmRldGFpbHM7XG4gICAgbmV3RGl2Tm90ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGltaXRUZXh0KHRoaXMsIDI1KTtcbiAgICAgIGVsZW1lbnQudGl0bGUgPSBuZXdEaXZOb3RlLnRleHRDb250ZW50O1xuICAgIH0pO1xuICAgIG5ld0RpdlBhcmFncmFwaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5kZXRhaWxzID0gbmV3RGl2UGFyYWdyYXBoLnRleHRDb250ZW50O1xuICAgIH0pO1xuICAgIG5vdGVSZXN1bHRSb3cuYXBwZW5kQ2hpbGQobmV3Tm90ZVJlc3VsdCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGxpbWl0VGV4dChlbGVtZW50LCBtYXhMZW5ndGgpIHtcbiAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQuc2xpY2UoMCwgbWF4TGVuZ3RoKTtcbiAgfVxufVxuZnVuY3Rpb24gc2F2ZU5vdGVzT25TdWJtaXQoKSB7XG4gIGFkZE5vdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGROb3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1ub3RlLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGFkZE5vdGVEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYS1ub3RlXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5vdGUgPSBuZXcgTm90ZShhZGROb3RlVGl0bGUsIGFkZE5vdGVEZXRhaWxzKTtcbiAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgIGFkZE5vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5NFwiKTtcbiAgICBhZGROb3RlKCk7XG4gIH0pO1xufVxuZXhwb3J0IHsgc2F2ZU5vdGVzT25TdWJtaXQsIG5vdGVzLCBhZGROb3RlIH07XG4iLCJpbXBvcnQgYmFja2dyb3VuZCBmcm9tIFwiLi9pbWFnZXMvcHJvamVjdC1iYWNrZ3JvdW5kLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyRE9NLCByZW5kZXJQcm9qZWN0VG9kbyB9IGZyb20gXCIuL3JlbmRlckRPTVwiO1xuaW1wb3J0IHsgY2xpY2tlZE9iaiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzLCBkaWZmZXJlbmNlSW5Ib3VycyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdG9kb3NQcm9qZWN0LCBUb2RvcywgdG9kb3MsIHRvZG9zVG9kYXksIHRvZG9zV2Vla3MgfSBmcm9tIFwiLi9zdG9yZXRvZG9zLmpzXCI7XG5pbXBvcnQgeyBlZGl0VG9kb3MgfSBmcm9tIFwiLi9mb3JtLWVkaXQtc3VibWl0LmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstb3ZlcmxheVwiKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5jb25zdCBhZGRUb2RvSW5Qcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8taW4tcHJvamVjdFwiKTtcbmNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93LWluLXByb2plY3RcIik7XG5jb25zdCBtaWRQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1pbi1wcm9qZWN0XCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1pbi1wcm9qZWN0XCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idXR0b25cIik7XG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktYnV0dG9uXCIpO1xuY29uc3Qgd2Vla0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vlay1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYnV0dG9uXCIpO1xuY29uc3Qgbm90ZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLWJ1dHRvblwiKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IHByb2plY3RzID0gW107XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLCAodGhpcy5wcm9qZWN0VG9kb3MgPSBbXSksICh0aGlzLnByb2plY3RJRCA9IHByb2plY3RzLmxlbmd0aCArIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgcHJvamVjdFJlc3VsdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgIFxuICBjb25zdCBwcm9qZWN0UmVzdWx0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG15SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IG15RGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG15RGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1wcm9qZWN0XCIpO1xuICBteURlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKTtcbiAgbXlEZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgcHJvamVjdFJlc3VsdFJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtcmVzdWx0LXJvd1wiKTtcbiAgcHJvamVjdFJlc3VsdFJvdy5jbGFzc0xpc3QuYWRkKFwiaC0xMDBcIik7XG4gIHByb2plY3RSZXN1bHRSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgcHJvamVjdFJlc3VsdFJvdy5jbGFzc0xpc3QuYWRkKFwidy0xMDBcIik7XG4gIHByb2plY3RSZXN1bHRSb3cuY2xhc3NMaXN0LmFkZChcImdhcC0zXCIpO1xuXG4gIHByb2plY3RSZXN1bHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXJlc3VsdFwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICBwcm9qZWN0UmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJjb2wtNVwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiaC01MFwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwibWItMFwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyXCIpO1xuICBwcm9qZWN0UmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItM1wiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLWRhcmtcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcInJvdW5kZWRcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1wcm9qZWN0XCIpO1xuICBwcm9qZWN0UmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvbi1yZWxhdGl2ZVwiKTtcblxuICBwcm9qZWN0UmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIpO1xuICBwcm9qZWN0UmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiKTtcbiAgcHJvamVjdFJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgcHJvamVjdFJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcInctMTAwXCIpO1xuICBwcm9qZWN0UmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiaC0xMDBcIik7XG4gIHByb2plY3RSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNsaWNrXCIpO1xuXG4gIG15SDMuY2xhc3NMaXN0LmFkZChcIm1iLTBcIik7XG4gIG15SDMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gIHByb2plY3RSZXN1bHRUZXh0LmFwcGVuZENoaWxkKG15SDMpO1xuICBwcm9qZWN0UmVzdWx0LmFwcGVuZENoaWxkKHByb2plY3RSZXN1bHRUZXh0KTtcbiAgcHJvamVjdFJlc3VsdC5hcHBlbmRDaGlsZChteURlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFJlc3VsdFJvdyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gcHJvamVjdHNbaV07XG4gICAgY29uc3QgbmV3UHJvamVjdFJlc3VsdCA9IHByb2plY3RSZXN1bHQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IG5ld0RpdlByb2plY3RUaXRsZSA9IG5ld1Byb2plY3RSZXN1bHQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld0RpdlByb2plY3RSZXN1bHRUZXh0ID0gbmV3UHJvamVjdFJlc3VsdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2xpY2tcIik7XG4gICAgbmV3UHJvamVjdFJlc3VsdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZH0pYDtcbiAgICBjb25zdCBuZXdDbG9zZVByb2plY3RCdXR0b24gPSBuZXdQcm9qZWN0UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3RcIik7XG4gICAgbmV3Q2xvc2VQcm9qZWN0QnV0dG9uLnByb2plY3RJRCA9IGVsZW1lbnQucHJvamVjdElEO1xuICAgIG5ld0RpdlByb2plY3RSZXN1bHRUZXh0LnByb2plY3RJRCA9IGVsZW1lbnQucHJvamVjdElEXG4gICAgbmV3RGl2UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICBsZXQgcmVzSUQ7XG4gICAgbGV0IGZvb3RlclxuICAgIG5ld0RpdlByb2plY3RSZXN1bHRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBsaXN0Q2xpY2soZXYpe1xuICAgICAgY2xpY2tlZE9iai5ob21lQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgY2xpY2tlZE9iai50b2RheUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGNsaWNrZWRPYmoucHJvamVjdHNDbGlja2VkID0gZmFsc2U7XG4gICAgICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IHRydWU7XG4gICAgICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgXG4gICAgICBmb290ZXIgPSBhZGRUb2RvSW5Qcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWluLXByb2plY3QtZm9vdGVyXCIpO1xuICAgICAgY29uc3QgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RzXCIpO1xuICAgICAgZm9vdGVyLnRleHRDb250ZW50ID0gYEFkZCBUb2RvIEluICR7bmV3RGl2UHJvamVjdFRpdGxlLnRleHRDb250ZW50fWA7XG5cbiAgICAgIGFsbExpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByb2plY3RJRCA9PT0gZXYudGFyZ2V0LnByb2plY3RJRCkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImNsaWNrZWQyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWQyXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVzSUQgPSBldi50YXJnZXQucHJvamVjdElEO1xuICAgICAgY29uc29sZS5sb2cocmVzSUQpXG4gICAgICBcbiAgICAgIGlmIChldi50YXJnZXQucHJvamVjdElEID09PSBlbGVtZW50LnByb2plY3RJRCkge1xuICAgICAgICBpZiAoZWxlbWVudC5wcm9qZWN0VG9kb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlbmRlclByb2plY3RUb2RvKGVsZW1lbnQucHJvamVjdFRvZG9zKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNhdmVUb2RvSW5Qcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIGFkZFRvZG9JblByb2plY3RGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc2F2ZVRvZG9JblByb2plY3QpO1xuICAgICAgfVxuXG4gICAgICBzYXZlVG9kb0luUHJvamVjdCA9IHNhdmVUb2Rvc09uUHJvamVjdEZvcm1TdWJtaXQocmVzSUQsIGVsZW1lbnQpO1xuICAgICAgY29uc29sZS5sb2coY2xpY2tlZE9iailcblxuICAgIH0pXG4gICAgcHJvamVjdFJlc3VsdFJvdy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UmVzdWx0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlVG9kb3NPblByb2plY3RGb3JtU3VibWl0KHJlc0lELCBwcm9qZWN0KSB7XG4gIGNvbnN0IHNhdmVUb2RvSW5Qcm9qZWN0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvVGl0bGVJblByb2plY3RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW4tcHJvamVjdFwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGV0YWlsc0luUHJvamVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYS1pbi1wcm9qZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EYXRlSW5Qcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtaW4tcHJvamVjdFwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHk7XG4gICAgaWYgKGxvd1ByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJsb3dcIjtcbiAgICB9IGVsc2UgaWYgKG1pZFByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJtaWRcIjtcbiAgICB9IGVsc2UgaWYgKGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZS5pbmNsdWRlcyhcInNvbGlkXCIpKSB7XG4gICAgICBwcmlvcml0eSA9IFwiaGlnaFwiO1xuICAgIH1cbiAgICBpZiAocmVzSUQgIT09IHByb2plY3QucHJvamVjdElEKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNJRCwgcHJvamVjdC5wcm9qZWN0SUQsIFwiZmFhYWFhYWxzZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHJlc0lEID09PSBwcm9qZWN0LnByb2plY3RJRCkge1xuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvcyhcbiAgICAgICAgdG9kb1RpdGxlSW5Qcm9qZWN0VmFsdWUsXG4gICAgICAgIHRvZG9EZXRhaWxzSW5Qcm9qZWN0VmFsdWUsXG4gICAgICAgIHRvZG9EYXRlSW5Qcm9qZWN0VmFsdWUsXG4gICAgICAgIHByaW9yaXR5XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzSUQsIHByb2plY3QucHJvamVjdElEKVxuICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgIHByb2plY3QucHJvamVjdFRvZG9zLnB1c2godG9kbyk7XG4gICAgICBpZigoKGRpZmZlcmVuY2VJbkRheXModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpIDwgNykgJiYgKChkaWZmZXJlbmNlSW5EYXlzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpKSA+PSAwKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2VJbkRheXModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpXG4gICAgICAgIHRvZG9zV2Vla3MucHVzaCh0b2RvKVxuICAgICAgfVxuICAgICAgaWYgKCgoZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPj0gMCkgJiYgKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpIDw9IDI0KSl8fCgoZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPD0gMCkgJiYgKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpID49IC0yNCkpKXtcbiAgICAgICAgY29uc29sZS5sb2coZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpO1xuICAgICAgICB0b2Rvc1RvZGF5LnB1c2godG9kbyk7ICAgXG4gICAgICB9XG4gIFxuICAgICAgcmVuZGVyUHJvamVjdFRvZG8ocHJvamVjdC5wcm9qZWN0VG9kb3MpO1xuICAgICAgYWRkVG9kb0luUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTZcIik7XG4gICAgfVxuICAgIFxuICB9O1xuXG4gIGFkZFRvZG9JblByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc2F2ZVRvZG9JblByb2plY3QpO1xuXG4gIHJldHVybiBzYXZlVG9kb0luUHJvamVjdDtcbn1cblxubGV0IHNhdmVUb2RvSW5Qcm9qZWN0ID0gbnVsbDtcbmZ1bmN0aW9uIGFkZFByb2plY3ROYW1lKCkge1xuICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gIHByb2plY3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcblxuICAgIGxldCByZXNJRDtcbiAgICBsZXQgZm9vdGVyO1xuICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmV3TGlzdC5jbGFzc0xpc3QuYWRkKFwibGlzdC1ncm91cC1pdGVtXCIpO1xuICAgIG5ld0xpc3QuY2xhc3NMaXN0LmFkZChcIm1zLTNcIik7XG4gICAgbmV3TGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0c1wiKTtcbiAgICBuZXdMaXN0LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBuZXdMaXN0LnByb2plY3RJRCA9IHByb2plY3QucHJvamVjdElEO1xuICAgIFxuXG4gICAgbmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gbGlzdENsaWNrKGV2KSB7XG4gICAgICBjbGlja2VkT2JqLmhvbWVDbGlja2VkID0gZmFsc2U7XG4gICAgICBjbGlja2VkT2JqLnRvZGF5Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgY2xpY2tlZE9iai5wcm9qZWN0c0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkID0gdHJ1ZTtcbiAgICAgIGNsaWNrZWRPYmoubm90ZXNDbGlja2VkID0gZmFsc2U7XG5cbiAgICAgIGZvb3RlciA9IGFkZFRvZG9JblByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8taW4tcHJvamVjdC1mb290ZXJcIik7XG4gICAgICBmb290ZXIudGV4dENvbnRlbnQgPSBgQWRkIFRvZG8gSW4gJHtuZXdMaXN0LnRleHRDb250ZW50fWA7XG4gICAgICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gICAgICBhbGxMaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkMlwiKTtcbiAgICAgIH0pO1xuICAgICAgbmV3TGlzdC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZDJcIik7XG4gICAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB3ZWVrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgbm90ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICByZXNJRCA9IGV2LnRhcmdldC5wcm9qZWN0SUQ7XG4gICAgICBpZiAoZXYudGFyZ2V0LnByb2plY3RJRCA9PT0gcHJvamVjdC5wcm9qZWN0SUQpIHtcbiAgICAgICAgaWYgKHByb2plY3QucHJvamVjdFRvZG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZW5kZXJQcm9qZWN0VG9kbyhwcm9qZWN0LnByb2plY3RUb2Rvcyk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzYXZlVG9kb0luUHJvamVjdCAhPT0gbnVsbCkge1xuICAgICAgICBhZGRUb2RvSW5Qcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNhdmVUb2RvSW5Qcm9qZWN0KTtcbiAgICAgIH1cblxuICAgICAgc2F2ZVRvZG9JblByb2plY3QgPSBzYXZlVG9kb3NPblByb2plY3RGb3JtU3VibWl0KHJlc0lELCBwcm9qZWN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRPYmopXG4gICAgfSk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0c09uU3VibWl0KCkge1xuICBhZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldikge1xuICAgIFxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoYWRkUHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5NVwiKTtcbiAgICBhZGRQcm9qZWN0KCk7XG4gICAgYWRkUHJvamVjdE5hbWUoKTtcbiAgfSk7XG59XG5leHBvcnQgeyBzYXZlUHJvamVjdHNPblN1Ym1pdCwgcHJvamVjdHMsIGFkZFByb2plY3QsIGFkZFByb2plY3ROYW1lLCBhZGRUb2RvSW5Qcm9qZWN0Rm9ybSB9O1xuIiwiaW1wb3J0IHsgbm90ZXMsIGFkZE5vdGUgfSBmcm9tIFwiLi9hZGQtbm90ZS5qc1wiO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmZ1bmN0aW9uIG5vdGVEZWxldGVCdXR0b24oKSB7XG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBub3Rlc1tpXTtcbiAgICAgIGlmIChldi50YXJnZXQubm90ZUlEID09PSBlbGVtZW50Lm5vdGVJRCAmJiBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNsb3NlXCIpKSB7XG4gICAgICAgIGNvbnN0IHJlc0lEID0gZXYudGFyZ2V0Lm5vdGVJRDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBub3Rlcy5maW5kSW5kZXgoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLm5vdGVJRCA9PT0gZWxlbWVudC5ub3RlSUQ7XG4gICAgICAgIH0pO1xuICAgICAgICBub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBhZGROb3RlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCB7IG5vdGVEZWxldGVCdXR0b24gfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBhZGRQcm9qZWN0LCBhZGRQcm9qZWN0TmFtZSwgYWRkVG9kb0luUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9hZGQtcHJvamVjdHNcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5sZXQgc2F2ZVRvZG9JblByb2plY3QgPSBudWxsO1xuZnVuY3Rpb24gcHJvamVjdERlbGV0ZUJ1dHRvbigpIHtcbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHByb2plY3RzW2ldO1xuICAgICAgaWYgKGV2LnRhcmdldC5wcm9qZWN0SUQgPT09IGVsZW1lbnQucHJvamVjdElEICYmIGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY2xvc2VcIikpIHtcbiAgICAgICAgY29uc3QgcmVzSUQgPSBldi50YXJnZXQucHJvamVjdElEO1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucHJvamVjdElEID09PSBlbGVtZW50LnByb2plY3RJRDtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgICAgICBhZGRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBpZiAoc2F2ZVRvZG9JblByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgICBhZGRUb2RvSW5Qcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNhdmVUb2RvSW5Qcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgeyBwcm9qZWN0RGVsZXRlQnV0dG9uIH07XG4iLCJpbXBvcnQgeyB0b2RvcywgdG9kb3NUb2RheSwgdG9kb3NXZWVrcyB9IGZyb20gXCIuL3N0b3JldG9kb3MuanNcIjtcbmltcG9ydCB7IHJlbmRlckRPTSwgcmVuZGVyVG9kYXlUb2RvcywgcmVuZGVyV2Vla3NUb2RvcyB9IGZyb20gXCIuL3JlbmRlckRPTS5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9hZGQtcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGNsaWNrZWRPYmogfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRvZG8gfSBmcm9tIFwiLi9yZW5kZXJET00uanNcIjtcbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lEKSB7XG4gIGNvbnN0IHRvZG9Ub0VkaXQgPSB0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLnRvZG9JRCA9PT0gdG9kb0lEKTtcbiAgY29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnRvZG9JRCA9PT0gdG9kb0lEO1xuICB9KTtcbiAgaWYgKHRvZG9zVG9kYXkuaW5jbHVkZXModG9kb1RvRWRpdCkpIHtcbiAgICBjb25zdCBpbmRleFJlcyA9IHRvZG9zVG9kYXkuZmluZEluZGV4KGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICByZXR1cm4gdG9kbyA9PT0gdG9kb1RvRWRpdDtcbiAgICB9KTtcbiAgICB0b2Rvc1RvZGF5LnNwbGljZShpbmRleFJlcywgMSk7XG4gIH1cbiAgaWYgKHRvZG9zV2Vla3MuaW5jbHVkZXModG9kb1RvRWRpdCkpIHtcbiAgICBjb25zdCBpbmRleFJlcyA9IHRvZG9zV2Vla3MuZmluZEluZGV4KGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICByZXR1cm4gdG9kbyA9PT0gdG9kb1RvRWRpdDtcbiAgICB9KTtcbiAgICB0b2Rvc1dlZWtzLnNwbGljZShpbmRleFJlcywgMSk7XG4gIH1cbiAgaWYgKHByb2plY3RzICE9PSBcIlwiICYmIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgaWYgKHByb2plY3QucHJvamVjdFRvZG9zLmluY2x1ZGVzKHRvZG9Ub0VkaXQpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4UmVzID0gcHJvamVjdC5wcm9qZWN0VG9kb3MuZmluZEluZGV4KGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgcmV0dXJuIHRvZG8gPT09IHRvZG9Ub0VkaXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3QucHJvamVjdFRvZG9zLnNwbGljZShpbmRleFJlcywgMSk7XG4gICAgICAgIHJlbmRlclByb2plY3RUb2RvKHByb2plY3QucHJvamVjdFRvZG9zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAocHJvamVjdHMgIT09IFwiXCIgJiYgY2xpY2tlZE9iai5ob21lQ2xpY2tlZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpXTtcbiAgICAgIGlmIChwcm9qZWN0LnByb2plY3RUb2Rvcy5pbmNsdWRlcyh0b2RvVG9FZGl0KSkge1xuICAgICAgICBjb25zdCBpbmRleFJlcyA9IHByb2plY3QucHJvamVjdFRvZG9zLmZpbmRJbmRleChmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgIHJldHVybiB0b2RvID09PSB0b2RvVG9FZGl0O1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0VG9kb3Muc3BsaWNlKGluZGV4UmVzLCAxKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdFRvZG8ocHJvamVjdC5wcm9qZWN0VG9kb3MpO1xuICAgICAgfVxuICAgIH1cbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJlbmRlckRPTSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbmRlckRPTSgpO1xufVxuZXhwb3J0IHsgZGVsZXRlVG9kbyB9O1xuIiwiaW1wb3J0IHsgdG9kb3MsdG9kb3NXZWVrcyx0b2Rvc1RvZGF5IH0gZnJvbSBcIi4vc3RvcmV0b2Rvcy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyRE9NLCByZW5kZXJQcm9qZWN0VG9kbyB9IGZyb20gXCIuL3JlbmRlckRPTS5qc1wiO1xuaW1wb3J0IHsgY2xpY2tlZE9iaiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0TmFtZSwgcHJvamVjdHMgfSBmcm9tIFwiLi9hZGQtcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMsIGRpZmZlcmVuY2VJbkhvdXJzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5jb25zdCBlZGl0VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdG9kb1wiKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuZnVuY3Rpb24gZWRpdFRvZG9zKHRvZG9JRCkge1xuICBjb25zdCB0b2RvVG9FZGl0ID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby50b2RvSUQgPT09IHRvZG9JRCk7XG4gIGNvbnN0IGluZGV4V2Vla3MgPSB0b2Rvc1dlZWtzLmZpbmRJbmRleChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUubm90ZUlEID09PSB0b2RvVG9FZGl0Lm5vdGVJRDtcbiAgfSk7XG4gIGNvbnN0IGluZGV4VG9kYXkgPSB0b2Rvc1RvZGF5LmZpbmRJbmRleChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUubm90ZUlEID09PSB0b2RvVG9FZGl0Lm5vdGVJRDtcbiAgfSk7XG5cbiAgZWRpdFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gc2F2ZUVkaXQoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlRWRpdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1lZGl0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWRpdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYS1lZGl0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGVFZGl0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtZWRpdFwiKS52YWx1ZTtcbiAgICBjb25zdCBsb3dQcmlvcml0eUVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1lZGl0XCIpO1xuICAgIGNvbnN0IG1pZFByaW9yaXR5RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLWVkaXRcIik7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1lZGl0XCIpO1xuICAgIGlmICh0aXRsZUVkaXRWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgdG9kb1RvRWRpdC50aXRsZSA9IHRpdGxlRWRpdFZhbHVlO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb25FZGl0VmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRvZG9Ub0VkaXQuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVkaXRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGR1ZURhdGVFZGl0VmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRvZG9Ub0VkaXQuZHVlRGF0ZSA9IGR1ZURhdGVFZGl0VmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd1ByaW9yaXR5RWRpdEJ1dHRvbi5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHRvZG9Ub0VkaXQucHJpb3JpdHkgPSBcImxvd1wiO1xuICAgIH0gZWxzZSBpZiAobWlkUHJpb3JpdHlFZGl0QnV0dG9uLnN0eWxlLm91dGxpbmUuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgdG9kb1RvRWRpdC5wcmlvcml0eSA9IFwibWlkXCI7XG4gICAgfSBlbHNlIGlmIChoaWdoUHJpb3JpdHlFZGl0QnV0dG9uLnN0eWxlLm91dGxpbmUuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgdG9kb1RvRWRpdC5wcmlvcml0eSA9IFwiaGlnaFwiO1xuICAgIH1cbiAgICBpZigoKGRpZmZlcmVuY2VJbkRheXModG9kb1RvRWRpdC5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpIDwgNykgJiYgKChkaWZmZXJlbmNlSW5EYXlzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpKSA+PSAwKSl7XG4gICAgICBjb25zb2xlLmxvZyhkaWZmZXJlbmNlSW5EYXlzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpKVxuICAgICAgaWYodG9kb3NXZWVrcy5maW5kKCh0b2RvKT0+IHRvZG8gPT09IHRvZG9Ub0VkaXQpID09PSB1bmRlZmluZWQpe1xuXG4gICAgICAgIHRvZG9zV2Vla3MucHVzaCh0b2RvVG9FZGl0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b2Rvc1dlZWtzLnNwbGljZShpbmRleFdlZWtzLDEpXG5cbiAgICB9XG4gICAgaWYgKCgoZGlmZmVyZW5jZUluSG91cnModG9kb1RvRWRpdC5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPj0gMCkgJiYgKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpIDw9IDI0KSl8fCgoZGlmZmVyZW5jZUluSG91cnModG9kb1RvRWRpdC5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPD0gMCkgJiYgKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpID49IC0yNCkpKXtcbiAgICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpKTtcbiAgICAgIGlmKHRvZG9zVG9kYXkuZmluZCgodG9kbyk9PiB0b2RvID09PSB0b2RvVG9FZGl0KSA9PT0gdW5kZWZpbmVkKXtcblxuICAgICAgICB0b2Rvc1RvZGF5LnB1c2godG9kb1RvRWRpdClcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICB0b2Rvc1RvZGF5LnNwbGljZShpbmRleFRvZGF5LCAxKVxuICAgIH1cbiAgXG5cbiAgICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXkyXCIpO1xuICAgIGVkaXRUb2RvRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNhdmVFZGl0KTtcbiAgICBpZiAocHJvamVjdHMgIT09IFwiXCIgJiYgY2xpY2tlZE9iai50aGlzUHJvamVjdENsaWNrZWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgICBpZiAocHJvamVjdC5wcm9qZWN0VG9kb3MuaW5jbHVkZXModG9kb1RvRWRpdCkpIHtcbiAgICAgICAgICByZW5kZXJQcm9qZWN0VG9kbyhwcm9qZWN0LnByb2plY3RUb2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVuZGVyRE9NKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBlZGl0VG9kb3MgfTtcbiIsImNvbnN0IGVkaXRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10b2RvXCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1lZGl0XCIpO1xuY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1lZGl0XCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWVkaXRcIik7XG5cbmZ1bmN0aW9uIGVkaXRGb3JtVUkoKSB7XG4gIGVkaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgaWYgKGV2LnRhcmdldC50eXBlICE9PSBcImRhdGVcIiAmJiBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgIT09IFwiZWRpdC1mb3JtXCIpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImxvdy1lZGl0XCIpIHtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcIm1pZC1lZGl0XCIpIHtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImhpZ2gtZWRpdFwiKSB7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCB7IGVkaXRGb3JtVUkgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xuICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb1wiKTtcbiAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbiAgY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFwiKTtcbiAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoXCIpO1xuICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1pbi1wcm9qZWN0XCIpO1xuICBjb25zdCBtaWRQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1pbi1wcm9qZWN0XCIpO1xuICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWluLXByb2plY3RcIik7XG4gIGNvbnN0IGFkZFRvZG9JblByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1pbi1wcm9qZWN0XCIpO1xuXG4gIGFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGlmIChldi50YXJnZXQudHlwZSAhPT0gXCJkYXRlXCIgJiYgZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpICE9PSBcInN1Ym1pdC1mb3JtXCIpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImxvd1wiKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJtaWRcIikge1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYWRkVG9kb0luUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGlmIChldi50YXJnZXQudHlwZSAhPT0gXCJkYXRlXCIgJiYgZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpICE9PSBcInN1Ym1pdC1mb3JtLWluLXByb2plY3RcIikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibG93LWluLXByb2plY3RcIikge1xuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibWlkLWluLXByb2plY3RcIikge1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiaGlnaC1pbi1wcm9qZWN0XCIpIHtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYWRkSW1hZ2VzIGZyb20gXCIuL2FkZC1pbWFnZXMuanNcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiLi9mb3JtLXVpLmpzXCI7XG5pbXBvcnQgeyB0b2RvRGVsZXRlQnV0dG9uLCB0b2RvRWRpdEJ1dHRvbiwgdG9kb0RldGFpbHNCdXR0b24sIHRvZG9DaGVja2VkQnV0dG9uIH0gZnJvbSBcIi4vdG9kby1idXR0b25zLmpzXCI7XG5pbXBvcnQgeyBlZGl0Rm9ybVVJIH0gZnJvbSBcIi4vZm9ybS1lZGl0LXVpLmpzXCI7XG5pbXBvcnQgeyBzYXZlVG9kb3NPblN1Ym1pdCB9IGZyb20gXCIuL3N0b3JldG9kb3MuanNcIjtcbmltcG9ydCB7IHJlbmRlckRPTSwgcmVuZGVyVG9kYXlUb2RvcywgcmVuZGVyV2Vla3NUb2RvcyB9IGZyb20gXCIuL3JlbmRlckRPTS5qc1wiO1xuaW1wb3J0IHsgc2F2ZU5vdGVzT25TdWJtaXQsIGFkZE5vdGUgfSBmcm9tIFwiLi9hZGQtbm90ZS5qc1wiO1xuaW1wb3J0IHsgbm90ZURlbGV0ZUJ1dHRvbiB9IGZyb20gXCIuL2RlbGV0ZS1ub3RlLmpzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBzYXZlUHJvamVjdHNPblN1Ym1pdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9hZGQtcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IHByb2plY3REZWxldGVCdXR0b24gfSBmcm9tIFwiLi9kZWxldGUtcHJvamVjdC5qc1wiO1xuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkXCIpO1xuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG9cIik7XG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10b2RvXCIpO1xuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstb3ZlcmxheVwiKTtcbmNvbnN0IGRpc3BsYXlUb2RvRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS1kZXRhaWxzXCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idXR0b25cIik7XG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktYnV0dG9uXCIpO1xuY29uc3Qgd2Vla0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vlay1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYnV0dG9uXCIpO1xuY29uc3Qgbm90ZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLWJ1dHRvblwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBhZGROb3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGVcIik7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XG5jb25zdCBhZGRUb2RvSW5Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1pbi1wcm9qZWN0XCIpO1xuY29uc3QgdG9kb1RpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuY29uc3QgdG9kb0RldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWFcIik7XG5jb25zdCB0b2RvRGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbmNvbnN0IG1pZFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRcIik7XG5jb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5jb25zdCB0b2RvVGl0bGVJblByb2plY3RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW4tcHJvamVjdFwiKTtcbmNvbnN0IHRvZG9EZXRhaWxzSW5Qcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRhcmVhLWluLXByb2plY3RcIik7XG5jb25zdCB0b2RvRGF0ZUluUHJvamVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWluLXByb2plY3RcIik7XG5jb25zdCBsb3dQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1pbi1wcm9qZWN0XCIpO1xuY29uc3QgbWlkUHJpb3JpdHlCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWQtaW4tcHJvamVjdFwiKTtcbmNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtaW4tcHJvamVjdFwiKTtcbmNvbnN0IGFkZFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtdGl0bGVcIik7XG5cbmNvbnN0IGFkZE5vdGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGUtdGl0bGVcIik7XG5jb25zdCBhZGROb3RlRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWEtbm90ZVwiKTtcblxuY29uc3QgY2xpY2tlZE9iaiA9IHtcbiAgaG9tZUNsaWNrZWQ6IGZhbHNlLFxuICB0b2RheUNsaWNrZWQ6IGZhbHNlLFxuICB3ZWVrQ2xpY2tlZDogZmFsc2UsXG4gIHByb2plY3RzQ2xpY2tlZDogZmFsc2UsXG4gIHRoaXNQcm9qZWN0Q2xpY2tlZDogZmFsc2UsXG4gIG5vdGVzQ2xpY2tlZDogZmFsc2UsXG59O1xuYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xuZ2V0Rm9ybURhdGEoKTtcbmFkZEltYWdlcygpO1xudG9kb0RlbGV0ZUJ1dHRvbigpO1xudG9kb0VkaXRCdXR0b24oKTtcbnRvZG9EZXRhaWxzQnV0dG9uKCk7XG50b2RvQ2hlY2tlZEJ1dHRvbigpO1xuZWRpdEZvcm1VSSgpO1xuc2F2ZVRvZG9zT25TdWJtaXQoKTtcbnNhdmVOb3Rlc09uU3VibWl0KCk7XG5ub3RlRGVsZXRlQnV0dG9uKCk7XG5zYXZlUHJvamVjdHNPblN1Ym1pdCgpO1xucHJvamVjdERlbGV0ZUJ1dHRvbigpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAoIWFkZEZvcm0uY29udGFpbnMoZXYudGFyZ2V0KSAmJiBldi50YXJnZXQudGFnTmFtZSAhPT0gXCJJXCIpIHtcbiAgICBhZGRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5XCIpO1xuICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKCFhZGRUb2RvSW5Qcm9qZWN0LmNvbnRhaW5zKGV2LnRhcmdldCkgJiYgZXYudGFyZ2V0LnRhZ05hbWUgIT09IFwiSVwiKSB7XG4gICAgYWRkVG9kb0luUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTZcIik7XG4gIH1cbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAoIWFkZE5vdGVGb3JtLmNvbnRhaW5zKGV2LnRhcmdldCkgJiYgZXYudGFyZ2V0LnRhZ05hbWUgIT09IFwiSVwiKSB7XG4gICAgYWRkTm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXk0XCIpO1xuICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKCFhZGRQcm9qZWN0Rm9ybS5jb250YWlucyhldi50YXJnZXQpICYmIGV2LnRhcmdldC50YWdOYW1lICE9PSBcIklcIikge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5NVwiKTtcbiAgfVxufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGlmICghZWRpdEZvcm0uY29udGFpbnMoZXYudGFyZ2V0KSAmJiAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRcIikpIHtcbiAgICBlZGl0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTJcIik7XG4gIH1cbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAoIWRpc3BsYXlUb2RvRGV0YWlscy5jb250YWlucyhldi50YXJnZXQpICYmICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGV0YWlsc1wiKSkge1xuICAgIGRpc3BsYXlUb2RvRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTNcIik7XG4gIH1cbn0pO1xuZnVuY3Rpb24gc2hvd0Zvcm0oZXYpIHtcbiAgaWYgKCFjbGlja2VkT2JqLnByb2plY3RzQ2xpY2tlZCAmJiAhY2xpY2tlZE9iai5ub3Rlc0NsaWNrZWQgJiYgIWNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkKSB7XG4gICAgdG9kb1RpdGxlVmFsdWUudmFsdWUgPSBcIlwiO1xuICAgIHRvZG9EZXRhaWwudmFsdWUgPSBcIlwiO1xuICAgIHRvZG9EYXRlVmFsdWUudmFsdWUgPSBcIlwiO1xuICAgIGxvd1ByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBhZGRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheVwiKTtcbiAgfSBlbHNlIGlmIChjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCkge1xuICAgIGFkZE5vdGVUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgYWRkTm90ZURldGFpbHMudmFsdWUgPSBcIlwiO1xuICAgIGFkZE5vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTRcIik7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZE9iai5wcm9qZWN0c0NsaWNrZWQpIHtcbiAgICBhZGRQcm9qZWN0VGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTVcIik7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZE9iai50aGlzUHJvamVjdENsaWNrZWQpIHtcbiAgICB0b2RvVGl0bGVJblByb2plY3RWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgdG9kb0RldGFpbHNJblByb2plY3RWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgdG9kb0RhdGVJblByb2plY3RWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgbG93UHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBtaWRQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIGFkZFRvZG9JblByb2plY3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiZGFyay1vdmVybGF5NlwiKTtcbiAgfVxufVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgY2xpY2tlZE9iai5ob21lQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoudG9kYXlDbGlja2VkID0gdHJ1ZTtcbiAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoucHJvamVjdHNDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoubm90ZXNDbGlja2VkID0gZmFsc2U7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmVuZGVyRE9NKCk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICB3ZWVrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBwcm9qZWN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgbm90ZXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIGNvbnN0IGFsbExpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1saXN0c1wiKTtcbiAgYWxsTGlzdEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkMlwiKTtcbiAgfSk7XG59KTtcbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgY2xpY2tlZE9iai5ob21lQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoudG9kYXlDbGlja2VkID0gdHJ1ZTtcbiAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoucHJvamVjdHNDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoubm90ZXNDbGlja2VkID0gZmFsc2U7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmVuZGVyVG9kYXlUb2RvcygpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIG5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gIGFsbExpc3RJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gIH0pO1xufSk7XG53ZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgY2xpY2tlZE9iai5ob21lQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoudG9kYXlDbGlja2VkID0gdHJ1ZTtcbiAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoucHJvamVjdHNDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoubm90ZXNDbGlja2VkID0gZmFsc2U7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmVuZGVyV2Vla3NUb2RvcygpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIG5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gIGFsbExpc3RJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gIH0pO1xufSk7XG5wcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGNsaWNrZWRPYmouaG9tZUNsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai50b2RheUNsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLnByb2plY3RzQ2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoubm90ZXNDbGlja2VkID0gZmFsc2U7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgYWRkUHJvamVjdCgpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIG5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gIGFsbExpc3RJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gIH0pO1xufSk7XG5cbm5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGNsaWNrZWRPYmouaG9tZUNsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai50b2RheUNsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLnByb2plY3RzQ2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IHRydWU7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgYWRkTm90ZSgpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIG5vdGVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gIGFsbExpc3RJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCB7IGNsaWNrZWRPYmogfTtcbiIsImltcG9ydCB7IHRvZG9zLCB0b2Rvc1RvZGF5LCB0b2Rvc1dlZWtzLCB0b2Rvc1Byb2plY3QgfSBmcm9tIFwiLi9zdG9yZXRvZG9zLmpzXCI7XG5pbXBvcnQgeyBjbGlja2VkT2JqIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vYWRkLXByb2plY3RzLmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgdG9kb1JvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1yb3dcIik7XG5jb25zdCBsb2NhbFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbmZ1bmN0aW9uIHJlbmRlckRPTSgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbG9jYWxUb2Rvc1tpXTtcblxuICAgIGNvbnN0IG15VG9kb1JvdyA9IHRvZG9Sb3cuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG4gICAgY29uc3QgdG9kb0RldGFpbHNCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcbiAgICBjb25zdCB0b2RvRWRpdEljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS1wZW5jaWwtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlSWNvbkJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmJpLXRyYXNoMy1maWxsXCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG4gICAgdG9kb0RldGFpbHNCdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1zdWNjZXNzXCIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJtaWRcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy13YXJuaW5nXCIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctZGFuZ2VyXCIpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG15VG9kb1Jvdyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbmRlclRvZGF5VG9kb3MoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NUb2RheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0b2Rvc1RvZGF5W2ldO1xuICAgIGNvbnN0IG15VG9kb1JvdyA9IHRvZG9Sb3cuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG4gICAgY29uc3QgdG9kb0RldGFpbHNCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcbiAgICBjb25zdCB0b2RvRWRpdEljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS1wZW5jaWwtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlSWNvbkJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmJpLXRyYXNoMy1maWxsXCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG4gICAgdG9kb0RldGFpbHNCdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1zdWNjZXNzXCIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJtaWRcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy13YXJuaW5nXCIpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctZGFuZ2VyXCIpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG15VG9kb1Jvdyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbmRlcldlZWtzVG9kb3MoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3NXZWVrcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0b2Rvc1dlZWtzW2ldO1xuICAgIGNvbnN0IG15VG9kb1JvdyA9IHRvZG9Sb3cuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG4gICAgY29uc3QgdG9kb0RldGFpbHNCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcbiAgICBjb25zdCB0b2RvRWRpdEljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS1wZW5jaWwtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlSWNvbkJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmJpLXRyYXNoMy1maWxsXCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG4gICAgdG9kb0RldGFpbHNCdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLXN1Y2Nlc3NcIik7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIm1pZFwiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLXdhcm5pbmdcIik7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXJcIik7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXlUb2RvUm93KTtcbiAgfVxufVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRvZG8oYXJyYXkpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGFycmF5W2ldO1xuICAgIGNvbnN0IG15VG9kb1JvdyA9IHRvZG9Sb3cuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG4gICAgY29uc3QgdG9kb0RldGFpbHNCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcbiAgICBjb25zdCB0b2RvRWRpdEljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS1wZW5jaWwtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlSWNvbkJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmJpLXRyYXNoMy1maWxsXCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG4gICAgdG9kb0RldGFpbHNCdXR0b24udG9kb0lEID0gcHJvamVjdC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi50b2RvSUQgPSBwcm9qZWN0LnRvZG9JRDtcbiAgICB0b2RvRWRpdEJ1dHRvbi50b2RvSUQgPSBwcm9qZWN0LnRvZG9JRDtcbiAgICB0b2RvRWRpdEljb25CdXR0b24udG9kb0lEID0gcHJvamVjdC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUljb25CdXR0b24udG9kb0lEID0gcHJvamVjdC50b2RvSUQ7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3QuZHVlRGF0ZTtcbiAgICBpZiAocHJvamVjdC5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1zdWNjZXNzXCIpO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdC5wcmlvcml0eSA9PT0gXCJtaWRcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy13YXJuaW5nXCIpO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdC5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctZGFuZ2VyXCIpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG15VG9kb1Jvdyk7XG4gIH1cbn1cbmV4cG9ydCB7IHJlbmRlckRPTSwgcmVuZGVyVG9kYXlUb2RvcywgcmVuZGVyV2Vla3NUb2RvcywgcmVuZGVyUHJvamVjdFRvZG8gfTtcbiIsImltcG9ydCB7IHJlbmRlckRPTSwgcmVuZGVyVG9kYXlUb2RvcywgcmVuZGVyUHJvamVjdFRvZG8gfSBmcm9tIFwiLi9yZW5kZXJET00uanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMsIGRpZmZlcmVuY2VJbkhvdXJzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjbGlja2VkT2JqIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5jb25zdCBsb3dQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93XCIpO1xuY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFwiKTtcbmNvbnN0IGhpZ2hQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFwiKTtcbmNvbnN0IHRvZG9zID0gW107XG5jb25zdCB0b2Rvc1RvZGF5ID0gW107XG5jb25zdCB0b2Rvc1dlZWtzID0gW11cbmNvbnN0IHRvZG9zUHJvamVjdCA9IFtdXG5jbGFzcyBUb2RvcyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnRvZG9JRCA9IHRvZG9zLmxlbmd0aCArIDE7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvXCIpO1xuZnVuY3Rpb24gc2F2ZVRvZG9zT25TdWJtaXQoKSB7XG4gIGFkZFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc2F2ZVRvZG9zKTtcblxuICBmdW5jdGlvbiBzYXZlVG9kb3MoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRhcmVhXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGlmIChsb3dQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJsb3dcIjtcbiAgICB9IGVsc2UgaWYgKG1pZFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgcHJpb3JpdHkgPSBcIm1pZFwiO1xuICAgIH0gZWxzZSBpZiAoaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgcHJpb3JpdHkgPSBcImhpZ2hcIjtcbiAgICB9XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2Rvcyh0b2RvVGl0bGVWYWx1ZSwgdG9kb0RldGFpbHNWYWx1ZSwgdG9kb0RhdGVWYWx1ZSwgcHJpb3JpdHkpO1xuICAgIFxuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgaWYoKChkaWZmZXJlbmNlSW5EYXlzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpKSA8IDcpICYmICgoZGlmZmVyZW5jZUluRGF5cyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSkgPj0gMCkpe1xuICAgICAgY29uc29sZS5sb2coZGlmZmVyZW5jZUluRGF5cyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSlcbiAgICAgIHRvZG9zV2Vla3MucHVzaCh0b2RvKVxuICAgIH1cbiAgICBpZiAoKChkaWZmZXJlbmNlSW5Ib3Vycyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA+PSAwKSAmJiAoZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPD0gMjQpKXx8KChkaWZmZXJlbmNlSW5Ib3Vycyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA8PSAwKSAmJiAoZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPj0gLTI0KSkpe1xuICAgICAgY29uc29sZS5sb2coZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpO1xuICAgICAgdG9kb3NUb2RheS5wdXNoKHRvZG8pOyAgIFxuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS50b2RvcyA9IEpTT04uc3RyaW5naWZ5KHRvZG9zKVxuICAgIGxvY2FsU3RvcmFnZS50b2Rvc1dlZWtzID0gSlNPTi5zdHJpbmdpZnkodG9kb3MpXG4gICAgbG9jYWxTdG9yYWdlLnRvZG9zVG9kYXkgPSBKU09OLnN0cmluZ2lmeSh0b2RvcylcblxuICAgIHJlbmRlckRPTSgpO1xuICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5XCIpO1xuICB9XG59XG5leHBvcnQgeyBzYXZlVG9kb3NPblN1Ym1pdCwgdG9kb3MsIHRvZG9zVG9kYXksIHRvZG9zV2Vla3MsIHRvZG9zUHJvamVjdCwgVG9kb3MgfTtcbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vc3RvcmV0b2Rvcy5qc1wiO1xuaW1wb3J0IHsgZWRpdFRvZG9zLCBzYXZlVG9kb3NPbkVkaXQgfSBmcm9tIFwiLi9mb3JtLWVkaXQtc3VibWl0LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVUb2RvIH0gZnJvbSBcIi4vZGVsZXRlLXRvZG8uanNcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBlZGl0VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdG9kb1wiKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5jb25zdCBkaXNwbGF5VG9kb0RldGFpbHNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS1kZXRhaWxzXCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b25FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctZWRpdFwiKTtcbmNvbnN0IG1pZFByaW9yaXR5QnV0dG9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLWVkaXRcIik7XG5jb25zdCBoaWdoUHJpb3JpdHlCdXR0b25FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWVkaXRcIik7XG5jb25zdCB0aXRsZUVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtZWRpdFwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uRWRpdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYS1lZGl0XCIpO1xuY29uc3QgZHVlRGF0ZUVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1lZGl0XCIpO1xuXG5mdW5jdGlvbiB0b2RvQ2hlY2tlZEJ1dHRvbigpIHtcbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgZXYudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIikuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtYnV0dG9uXCIpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpLnN0eWxlLnRleHREZWNvcmF0aW9uID1cbiAgICAgICAgXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIilcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXNlY29uZGFyeVwiKTtcbiAgICB9IGVsc2UgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgIWV2LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsc1wiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtYnV0dG9uXCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpLnN0eWxlLnRleHREZWNvcmF0aW9uID1cbiAgICAgICAgXCJub25lXCI7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zZWNvbmRhcnlcIik7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHRvZG9EZWxldGVCdXR0b24oKSB7XG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0b2Rvc1tpXTtcbiAgICAgIGlmIChcbiAgICAgICAgZXYudGFyZ2V0LnRvZG9JRCA9PT0gZWxlbWVudC50b2RvSUQgJiZcbiAgICAgICAgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikgfHwgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJpLXRyYXNoMy1maWxsXCIpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHJlc0lEID0gZXYudGFyZ2V0LnRvZG9JRDtcbiAgICAgICAgZGVsZXRlVG9kbyhyZXNJRCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHRvZG9FZGl0QnV0dG9uKCkge1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdG9kb3NbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGV2LnRhcmdldC50b2RvSUQgPT09IGVsZW1lbnQudG9kb0lEICYmXG4gICAgICAgIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSB8fCBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmktcGVuY2lsLWZpbGxcIikpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcmVzSUQgPSBldi50YXJnZXQudG9kb0lEO1xuICAgICAgICB0aXRsZUVkaXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uRWRpdFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZUVkaXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uRWRpdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uRWRpdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbkVkaXQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTJcIik7XG4gICAgICAgIGVkaXRUb2RvcyhyZXNJRCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZG9EZXRhaWxzQnV0dG9uKCkge1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdG9kb3NbaV07XG4gICAgICBpZiAoZXYudGFyZ2V0LnRvZG9JRCA9PT0gZWxlbWVudC50b2RvSUQgJiYgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRldGFpbHNcIikpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheVRvZG9UaXRsZSA9IGRpc3BsYXlUb2RvRGV0YWlsc01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS10b2RvLXRpdGxlXCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5VG9kb0RldGFpbHMgPSBkaXNwbGF5VG9kb0RldGFpbHNNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG9kby1kZXRhaWxzXCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5VG9kb1ByaW9yaXR5ID0gZGlzcGxheVRvZG9EZXRhaWxzTW9kYWwucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvZG8tcHJpb3JpdHlcIik7XG4gICAgICAgIGRpc3BsYXlUb2RvVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICBkaXNwbGF5VG9kb0RldGFpbHMudGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxPV1wiO1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmdy1ib2xkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibWlkXCIpIHtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNSURcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtvcmFuZ2VcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmdy1ib2xkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSElHSFwiO1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsIDAsIDAsIDAuODgzKVwiO1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZ3LWJvbGRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTk9UIERFRklORURcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZnctYm9sZFwiKTtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJiZy1zZWNvbmRhcnlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVRvZG9EZXRhaWxzTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTNcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgdG9kb0RlbGV0ZUJ1dHRvbiwgdG9kb0VkaXRCdXR0b24sIHRvZG9EZXRhaWxzQnV0dG9uLCB0b2RvQ2hlY2tlZEJ1dHRvbiB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJvdW5kID0gbWV0aG9kID8gTWF0aFttZXRob2RdIDogTWF0aC50cnVuYztcbiAgICBjb25zdCByZXN1bHQgPSByb3VuZChudW1iZXIpO1xuICAgIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLnRydW5jKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMSBNYXJjaCAyMDIwIDA6MDAgYW5kIDEgSnVuZSAyMDIwIDA6MDAgP1xuICogLy8gTm90ZTogYmVjYXVzZSBsb2NhbCB0aW1lIGlzIHVzZWQsIHRoZVxuICogLy8gcmVzdWx0IHdpbGwgYWx3YXlzIGJlIDkyIGRheXMsIGV2ZW4gaW5cbiAqIC8vIHRpbWUgem9uZXMgd2hlcmUgRFNUIHN0YXJ0cyBhbmQgdGhlXG4gKiAvLyBwZXJpb2QgaGFzIG9ubHkgOTIqMjQtMSBob3Vycy5cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDUsIDEpLFxuICogICBuZXcgRGF0ZSgyMDIwLCAyLCAxKVxuICogKVxuICogLy89PiA5MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBzaWduID0gY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCk7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSk7XG5cbiAgX2RhdGVMZWZ0LnNldERhdGUoX2RhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgZGF5cyAtIGRpZmYgaW4gY2FsZW5kYXIgZGF5cykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBkYXkgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gIGNvbnN0IGlzTGFzdERheU5vdEZ1bGwgPSBOdW1iZXIoXG4gICAgY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkgPT09IC1zaWduLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3REYXlOb3RGdWxsKTtcbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufVxuXG4vLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuZnVuY3Rpb24gY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fFxuICAgIGRhdGVMZWZ0LmdldEhvdXJzKCkgLSBkYXRlUmlnaHQuZ2V0SG91cnMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbnV0ZXMoKSAtIGRhdGVSaWdodC5nZXRNaW51dGVzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5EYXlzO1xuIiwiaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi9fbGliL2dldFJvdW5kaW5nTWV0aG9kLm1qc1wiO1xuaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluSG91cnN9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Ib3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGhvdXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGhvdXJzIGFyZSBiZXR3ZWVuIDIgSnVseSAyMDE0IDA2OjUwOjAwIGFuZCAyIEp1bHkgMjAxNCAxOTowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkhvdXJzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxOSwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDUwKVxuICogKVxuICogLy89PiAxMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID1cbiAgICBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zPy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluSG91cnM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZUxlZnQpIC0gK3RvRGF0ZShkYXRlUmlnaHQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==