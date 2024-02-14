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
/* harmony export */   localNotes: () => (/* binding */ localNotes),
/* harmony export */   notes: () => (/* binding */ notes),
/* harmony export */   saveNotesOnSubmit: () => (/* binding */ saveNotesOnSubmit)
/* harmony export */ });
const addNoteForm = document.getElementById("add-note");
const content = document.getElementById("content");
const darkOverlay = document.getElementById("dark-overlay");
const notes = [];
const localNotes = JSON.parse(localStorage.getItem("localNotes")) || [];

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

  for (let i = 0; i < localNotes.length; i++) {
    const element = localNotes[i];
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
    localNotes.push(note);
    localStorage.setItem("localNotes", JSON.stringify(localNotes));
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
/* harmony export */   localProjects: () => (/* binding */ localProjects),
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
const localProjects = JSON.parse(localStorage.getItem("localProjects")) || [];


class Project {
  constructor(title) {
    (this.title = title), (this.projectTodos = []), (this.projectID = localProjects.length + 1);
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
  for (let i = 0; i < localProjects.length; i++) {
    const element = localProjects[i];
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
      _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.localTodos.push(todo)
      if(localProjects.includes(project)){
        project.projectTodos.push(todo);
        console.log("hii")
      }
      localStorage.setItem("localTodos", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_3__.localTodos));
      console.log(project)

      if((((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(todo.dueDate, currentDate)) < 7) && (((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(todo.dueDate, currentDate)) >= 0)){
        console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInDays)(todo.dueDate, currentDate))
        _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.localTodosWeeks.push(todo)
        localStorage.setItem("localTodosWeeks", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_3__.localTodosWeeks));

      }
      if ((((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) >= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) <= 24))||(((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) <= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate) >= -24))){
        console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInHours)(todo.dueDate, currentDate));
        _storetodos_js__WEBPACK_IMPORTED_MODULE_3__.localTodosToday.push(todo)
        localStorage.setItem("localTodosToday", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_3__.localTodosToday));
 
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
  localProjects.forEach(function (project) {

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
    
      // content.innerHTML = "";
      resID = ev.target.projectID;
      console.log(project)

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
    localProjects.push(project)
    localStorage.setItem("localProjects", JSON.stringify(localProjects));

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
    for (let i = 0; i < _add_note_js__WEBPACK_IMPORTED_MODULE_0__.localNotes.length; i++) {
      const element = _add_note_js__WEBPACK_IMPORTED_MODULE_0__.localNotes[i];
      if (ev.target.noteID === element.noteID && ev.target.classList.contains("btn-close")) {
        const resID = ev.target.noteID;
        const index = _add_note_js__WEBPACK_IMPORTED_MODULE_0__.localNotes.findIndex(function (value) {
          return value.noteID === element.noteID;
        });
        _add_note_js__WEBPACK_IMPORTED_MODULE_0__.localNotes.splice(index, 1);
        localStorage.setItem("localNotes", JSON.stringify(_add_note_js__WEBPACK_IMPORTED_MODULE_0__.localNotes));

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
    for (let i = 0; i < _add_projects__WEBPACK_IMPORTED_MODULE_0__.localProjects.length; i++) {
      const element = _add_projects__WEBPACK_IMPORTED_MODULE_0__.localProjects[i];
      if (ev.target.projectID === element.projectID && ev.target.classList.contains("btn-close")) {
        const resID = ev.target.projectID;
        const index = _add_projects__WEBPACK_IMPORTED_MODULE_0__.localProjects.findIndex(function (value) {
          return value.projectID === element.projectID;
        });
        _add_projects__WEBPACK_IMPORTED_MODULE_0__.localProjects.splice(index, 1);
        localStorage.setItem("localProjects", JSON.stringify(_add_projects__WEBPACK_IMPORTED_MODULE_0__.localProjects));
        console.log(_add_projects__WEBPACK_IMPORTED_MODULE_0__.localProjects);
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
  const todoToEdit = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.find((todo) => todo.todoID === todoID);
  const index = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.findIndex(function (value) {
    return value.todoID === todoID;
  });
  if (_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.includes(todoToEdit)) {
    const indexRes = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.splice(indexRes, 1);
    localStorage.setItem("localTodosToday", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday));
  }
  if (_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.includes(todoToEdit)) {
    const indexRes = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.findIndex(function (todo) {
      return todo === todoToEdit;
    });
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.splice(indexRes, 1);
    localStorage.setItem("localTodosWeeks", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks));
  }
  if (_add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects !== "" && _index_js__WEBPACK_IMPORTED_MODULE_3__.clickedObj.thisProjectClicked) {
    for (let i = 0; i < _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects.length; i++) {
      const project = _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });

        project.projectTodos.splice(indexRes, 1);
        localStorage.setItem("localProjects", JSON.stringify(_add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects));

        (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
      }
    }
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.splice(index, 1);
    localStorage.setItem("localTodos", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos));
    return;
  } else if (_add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects !== "" && _index_js__WEBPACK_IMPORTED_MODULE_3__.clickedObj.homeClicked) {
    for (let i = 0; i < _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects.length; i++) {
      const project = _add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects[i];
      if (project.projectTodos.includes(todoToEdit)) {
        const indexRes = project.projectTodos.findIndex(function (todo) {
          return todo === todoToEdit;
        });
        project.projectTodos.splice(indexRes, 1);
        localStorage.setItem("localProjects", JSON.stringify(_add_projects_js__WEBPACK_IMPORTED_MODULE_2__.localProjects));

        (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectTodo)(project.projectTodos);
      }
    }
    _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.splice(index, 1);
    localStorage.setItem("localTodos", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos));

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
  const todoToEdit = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.find((todo) => todo.todoID === todoID);
  const indexWeeks = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.findIndex(function (value) {
    return value.noteID === todoToEdit.noteID;
  });
  const indexToday = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.findIndex(function (value) {
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
      if(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.find((todo)=> todo === todoToEdit) === undefined){

        _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.push(todoToEdit)
        localStorage.setItem("localTodosWeeks", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks));

      }
    } else {
      _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.splice(indexWeeks,1)
      localStorage.setItem("localTodosWeeks", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks));

    }
    if ((((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) >= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) <= 24))||(((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) <= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate) >= -24))){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInHours)(todoToEdit.dueDate, currentDate));
      if(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.find((todo)=> todo === todoToEdit) === undefined){
        _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.push(todoToEdit)
        localStorage.setItem("localTodosToday", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday));

      }
    }else {
      _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.splice(indexToday, 1)
      localStorage.setItem("localTodosToday", JSON.stringify(_storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday));
    }
  

    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
    editTodoForm.removeEventListener("submit", saveEdit);
    if (_add_projects_js__WEBPACK_IMPORTED_MODULE_3__.localProjects !== "" && _index_js__WEBPACK_IMPORTED_MODULE_2__.clickedObj.thisProjectClicked) {
      for (let i = 0; i < _add_projects_js__WEBPACK_IMPORTED_MODULE_3__.localProjects.length; i++) {
        const project = _add_projects_js__WEBPACK_IMPORTED_MODULE_3__.localProjects[i];
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


// localStorage.clear();
document.addEventListener("DOMContentLoaded", _add_projects_js__WEBPACK_IMPORTED_MODULE_10__.addProjectName);


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
function renderDOM() {
  content.innerHTML = "";
  for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.length; i++) {
    const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos[i];

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
  for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday.length; i++) {
    const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosToday[i];
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
  for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks.length; i++) {
    const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodosWeeks[i];
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
  // debugger;
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
/* harmony export */   localTodos: () => (/* binding */ localTodos),
/* harmony export */   localTodosToday: () => (/* binding */ localTodosToday),
/* harmony export */   localTodosWeeks: () => (/* binding */ localTodosWeeks),
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
const todosWeeks = [];
const todosProject = [];

const localTodos = JSON.parse(localStorage.getItem("localTodos")) || [];
const localTodosToday = JSON.parse(localStorage.getItem("localTodosToday")) || [];
const localTodosWeeks = JSON.parse(localStorage.getItem("localTodosWeeks")) || [];
const localTodosProject = JSON.parse(localStorage.getItem("localTodosProject")) || [];


class Todos {
  constructor(title, description, dueDate, priority, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoID = localTodos.length + 1;
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
    localTodos.push(todo);
    if((((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, currentDate)) < 7) && (((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, currentDate)) >= 0)){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, currentDate))
      localTodosWeeks.push(todo)
      todosWeeks.push(todo)
    }
    if ((((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) >= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) <= 24))||(((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) <= 0) && ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate) >= -24))){
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInHours)(todo.dueDate, currentDate));
      localTodosToday.push(todo)
      todosToday.push(todo);   
    }
    localStorage.setItem("localTodos", JSON.stringify(localTodos));
    localStorage.setItem("localTodosWeeks", JSON.stringify(localTodosWeeks));
    localStorage.setItem("localTodosToday", JSON.stringify(localTodosToday));


    // localStorage.todosWeeks = JSON.stringify(todos)
    // localStorage.todosToday = JSON.stringify(todos)
    console.log(localTodos)
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
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos[i];
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
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos[i];
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
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.localTodos[i];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsbURBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7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QTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsbURBQU07QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0IxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3pEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtaW1hZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtbm90ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkLXByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGUtbm90ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLWVkaXQtc3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLWVkaXQtdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXJET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JldG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkRheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5Ib3Vycy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGljb24gZnJvbSBcIi4vaW1hZ2VzL3Rhc2stbGlzdC5wbmdcIjtcbmltcG9ydCB0YWJJY29uIGZyb20gXCIuL2ltYWdlcy90YXNrLWxpc3QxLnBuZ1wiO1xuaW1wb3J0IHRvZG9CYWNrZ3JvdW5kIGZyb20gXCIuL2ltYWdlcy9mb3JtLWJhY2tncm91bmQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEltYWdlcygpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICBjb25zdCBjYXJkQm9keUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1ib2R5LmNhcmQtaW1nLW92ZXJsYXkuYWRkXCIpO1xuICBjb25zdCBjYXJkQm9keUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtYm9keS5jYXJkLWltZy1vdmVybGF5LmVkaXRcIik7XG4gIGNvbnN0IGNhcmRCb2R5UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1ib2R5LmNhcmQtaW1nLW92ZXJsYXkuYWRkLWluLXByb2plY3RcIik7XG4gIGNvbnN0IGNhcmRFbGVtZW50QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLmFkZFwiKTtcbiAgY29uc3QgY2FyZEVsZW1lbnRFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLmVkaXRcIik7XG4gIGNvbnN0IGNhcmRFbGVtZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC5hZGQtaW4tcHJvamVjdFwiKTtcbiAgY29uc3QgbGlua1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBmb3JtQmFja2dyb3VuZEltYWdlQWRkID0gbmV3IEltYWdlKCk7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VBZGQuc3JjID0gdG9kb0JhY2tncm91bmQ7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VBZGQuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nXCIpO1xuICBmb3JtQmFja2dyb3VuZEltYWdlQWRkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1iYWNrZ3JvdW5kXCIpO1xuICBjb25zdCBmb3JtQmFja2dyb3VuZEltYWdlRWRpdCA9IG5ldyBJbWFnZSgpO1xuICBmb3JtQmFja2dyb3VuZEltYWdlRWRpdC5zcmMgPSB0b2RvQmFja2dyb3VuZDtcbiAgZm9ybUJhY2tncm91bmRJbWFnZUVkaXQuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nXCIpO1xuICBmb3JtQmFja2dyb3VuZEltYWdlRWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tYmFja2dyb3VuZC1lZGl0XCIpO1xuICBjb25zdCBmb3JtQmFja2dyb3VuZEltYWdlUHJvamVjdCA9IG5ldyBJbWFnZSgpO1xuICBmb3JtQmFja2dyb3VuZEltYWdlUHJvamVjdC5zcmMgPSB0b2RvQmFja2dyb3VuZDtcbiAgZm9ybUJhY2tncm91bmRJbWFnZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nXCIpO1xuICBmb3JtQmFja2dyb3VuZEltYWdlUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tYmFja2dyb3VuZC1wcm9qZWN0XCIpO1xuICBsaW5rVGFnLnJlbCA9IFwiaWNvblwiO1xuICBsaW5rVGFnLmhyZWYgPSB0YWJJY29uO1xuICBjb25zdCBpY29uSGVhZGVyID0gbmV3IEltYWdlKCk7XG4gIGljb25IZWFkZXIuc3JjID0gaWNvbjtcbiAgaWNvbkhlYWRlci5hbHQgPSBcInRhc2sgbGlzdFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbkhlYWRlcik7XG4gIGhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG4gIGNhcmRFbGVtZW50QWRkLmluc2VydEJlZm9yZShmb3JtQmFja2dyb3VuZEltYWdlQWRkLCBjYXJkQm9keUFkZCk7XG4gIGNhcmRFbGVtZW50RWRpdC5pbnNlcnRCZWZvcmUoZm9ybUJhY2tncm91bmRJbWFnZUVkaXQsIGNhcmRCb2R5RWRpdCk7XG4gIGNhcmRFbGVtZW50UHJvamVjdC5pbnNlcnRCZWZvcmUoZm9ybUJhY2tncm91bmRJbWFnZVByb2plY3QsIGNhcmRCb2R5UHJvamVjdCk7XG59XG4iLCJjb25zdCBhZGROb3RlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGVcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstb3ZlcmxheVwiKTtcbmNvbnN0IG5vdGVzID0gW107XG5jb25zdCBsb2NhbE5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsTm90ZXNcIikpIHx8IFtdO1xuXG5jbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIG5vdGVJRCkge1xuICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLCAodGhpcy5kZXRhaWxzID0gZGV0YWlscyksICh0aGlzLm5vdGVJRCA9IG5vdGVzLmxlbmd0aCArIDEpO1xuICB9XG59XG5mdW5jdGlvbiBhZGROb3RlKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IG5vdGVSZXN1bHRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBub3RlUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgbm90ZVJlc3VsdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBteURpdlRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG15RGl2UGFyYWdyYXBoTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG15Q2xvc2VOb3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbXlDbG9zZU5vdGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjbG9zZS1ub3RlXCIpO1xuICBteUNsb3NlTm90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLWNsb3NlXCIpO1xuICBub3RlUmVzdWx0Um93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZS1yZXN1bHQtcm93XCIpO1xuICBub3RlUmVzdWx0Um93LmNsYXNzTGlzdC5hZGQoXCJoLTEwMFwiKTtcbiAgbm90ZVJlc3VsdFJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICBub3RlUmVzdWx0Um93LmNsYXNzTGlzdC5hZGQoXCJ3LTEwMFwiKTtcbiAgbm90ZVJlc3VsdFJvdy5jbGFzc0xpc3QuYWRkKFwiZ2FwLTRcIik7XG5cbiAgbm90ZVJlc3VsdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGUtcmVzdWx0XCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImNvbC02XCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJoLTUwXCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJ3LTI1XCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJtYi0xXCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJib3JkZXJcIik7XG4gIG5vdGVSZXN1bHQuY2xhc3NMaXN0LmFkZChcImJvcmRlci0zXCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItZGFya1wiKTtcbiAgbm90ZVJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiYmctc2Vjb25kYXJ5XCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tc2hhZG93XCIpO1xuICBub3RlUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvbi1yZWxhdGl2ZVwiKTtcblxuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIpO1xuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZmxleC1jb2x1bW5cIik7XG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiKTtcbiAgbm90ZVJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgbm90ZVJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcInctMTAwXCIpO1xuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiaC0xMDBcIik7XG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJnYXAtM1wiKTtcbiAgbm90ZVJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcInBlLTNcIik7XG4gIG5vdGVSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwdC0zXCIpO1xuICBub3RlUmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwicGItM1wiKTtcblxuICBteURpdlRpdGxlTm90ZS5jbGFzc0xpc3QuYWRkKFwibWItMFwiKTtcbiAgbXlEaXZUaXRsZU5vdGUuY2xhc3NMaXN0LmFkZChcImZzLTRcIik7XG4gIG15RGl2VGl0bGVOb3RlLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tbGluZS1icmVha1wiKTtcbiAgbXlEaXZUaXRsZU5vdGUuY2xhc3NMaXN0LmFkZChcImJvcmRlci1ub3RlXCIpO1xuICBteURpdlRpdGxlTm90ZS5jbGFzc0xpc3QuYWRkKFwiZnctYm9sZFwiKTtcbiAgbXlEaXZUaXRsZU5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtdGl0bGVcIik7XG4gIG15RGl2VGl0bGVOb3RlLmNsYXNzTGlzdC5hZGQoXCJwcy0yXCIpO1xuICBteURpdlRpdGxlTm90ZS5jbGFzc0xpc3QuYWRkKFwicGUtMlwiKTtcbiAgbXlEaXZUaXRsZU5vdGUuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgbXlEaXZUaXRsZU5vdGUuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBcImZhbHNlXCIpO1xuXG4gIG15RGl2VGl0bGVOb3RlLnN0eWxlLm91dGxpbmUgPSBcIjJweCBkb3R0ZWQgZ3JheVwiO1xuXG4gIG15RGl2UGFyYWdyYXBoTm90ZS5jbGFzc0xpc3QuYWRkKFwibWItMFwiKTtcbiAgbXlEaXZQYXJhZ3JhcGhOb3RlLmNsYXNzTGlzdC5hZGQoXCJmcy01XCIpO1xuICBteURpdlBhcmFncmFwaE5vdGUuY2xhc3NMaXN0LmFkZChcImgtMTAwXCIpO1xuICBteURpdlBhcmFncmFwaE5vdGUuY2xhc3NMaXN0LmFkZChcInctMTAwXCIpO1xuICBteURpdlBhcmFncmFwaE5vdGUuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWF1dG9cIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLW5vdGVcIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5jbGFzc0xpc3QuYWRkKFwibm90ZS1wYXJhZ3JhcGhcIik7XG4gIG15RGl2UGFyYWdyYXBoTm90ZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICBteURpdlBhcmFncmFwaE5vdGUuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBcImZhbHNlXCIpO1xuICBub3RlUmVzdWx0VGV4dC5hcHBlbmRDaGlsZChteURpdlRpdGxlTm90ZSk7XG4gIG5vdGVSZXN1bHRUZXh0LmFwcGVuZENoaWxkKG15RGl2UGFyYWdyYXBoTm90ZSk7XG4gIG5vdGVSZXN1bHQuYXBwZW5kQ2hpbGQobXlDbG9zZU5vdGVCdXR0b24pO1xuICBub3RlUmVzdWx0LmFwcGVuZENoaWxkKG5vdGVSZXN1bHRUZXh0KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG5vdGVSZXN1bHRSb3cpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxOb3Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBsb2NhbE5vdGVzW2ldO1xuICAgIGNvbnN0IG5ld05vdGVSZXN1bHQgPSBub3RlUmVzdWx0LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBuZXdEaXZOb3RlID0gbmV3Tm90ZVJlc3VsdC5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtdGl0bGVcIik7XG4gICAgY29uc3QgbmV3RGl2UGFyYWdyYXBoID0gbmV3Tm90ZVJlc3VsdC5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtcGFyYWdyYXBoXCIpO1xuICAgIGNvbnN0IG5ld0Nsb3NlTm90ZUJ1dHRvbiA9IG5ld05vdGVSZXN1bHQucXVlcnlTZWxlY3RvcihcIi5idG4tY2xvc2VcIik7XG4gICAgbmV3Q2xvc2VOb3RlQnV0dG9uLm5vdGVJRCA9IGVsZW1lbnQubm90ZUlEO1xuICAgIG5ld0Rpdk5vdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgIG5ld0RpdlBhcmFncmFwaC50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGV0YWlscztcbiAgICBuZXdEaXZOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsaW1pdFRleHQodGhpcywgMjUpO1xuICAgICAgZWxlbWVudC50aXRsZSA9IG5ld0Rpdk5vdGUudGV4dENvbnRlbnQ7XG4gICAgfSk7XG4gICAgbmV3RGl2UGFyYWdyYXBoLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmRldGFpbHMgPSBuZXdEaXZQYXJhZ3JhcGgudGV4dENvbnRlbnQ7XG4gICAgfSk7XG4gICAgbm90ZVJlc3VsdFJvdy5hcHBlbmRDaGlsZChuZXdOb3RlUmVzdWx0KTtcbiAgfVxufVxuZnVuY3Rpb24gbGltaXRUZXh0KGVsZW1lbnQsIG1heExlbmd0aCkge1xuICBpZiAoZWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudC5zbGljZSgwLCBtYXhMZW5ndGgpO1xuICB9XG59XG5mdW5jdGlvbiBzYXZlTm90ZXNPblN1Ym1pdCgpIHtcbiAgYWRkTm90ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZE5vdGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGUtdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgYWRkTm90ZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRhcmVhLW5vdGVcIikudmFsdWU7XG4gICAgY29uc3Qgbm90ZSA9IG5ldyBOb3RlKGFkZE5vdGVUaXRsZSwgYWRkTm90ZURldGFpbHMpO1xuICAgIG5vdGVzLnB1c2gobm90ZSk7XG4gICAgbG9jYWxOb3Rlcy5wdXNoKG5vdGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxOb3Rlc1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbE5vdGVzKSk7XG4gICAgYWRkTm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXk0XCIpO1xuICAgIGFkZE5vdGUoKTtcbiAgfSk7XG59XG5leHBvcnQgeyBzYXZlTm90ZXNPblN1Ym1pdCwgbm90ZXMsIGFkZE5vdGUsIGxvY2FsTm90ZXMgfTtcbiIsImltcG9ydCBiYWNrZ3JvdW5kIGZyb20gXCIuL2ltYWdlcy9wcm9qZWN0LWJhY2tncm91bmQucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJET00sIHJlbmRlclByb2plY3RUb2RvIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5pbXBvcnQgeyBjbGlja2VkT2JqIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMsIGRpZmZlcmVuY2VJbkhvdXJzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB0b2Rvc1Byb2plY3QsIFRvZG9zLCB0b2RvcywgdG9kb3NUb2RheSwgdG9kb3NXZWVrcyxsb2NhbFRvZG9zLGxvY2FsVG9kb3NUb2RheSxsb2NhbFRvZG9zV2Vla3MgfSBmcm9tIFwiLi9zdG9yZXRvZG9zLmpzXCI7XG5pbXBvcnQgeyBlZGl0VG9kb3MgfSBmcm9tIFwiLi9mb3JtLWVkaXQtc3VibWl0LmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstb3ZlcmxheVwiKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5jb25zdCBhZGRUb2RvSW5Qcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8taW4tcHJvamVjdFwiKTtcbmNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93LWluLXByb2plY3RcIik7XG5jb25zdCBtaWRQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1pbi1wcm9qZWN0XCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1pbi1wcm9qZWN0XCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idXR0b25cIik7XG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktYnV0dG9uXCIpO1xuY29uc3Qgd2Vla0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vlay1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtYnV0dG9uXCIpO1xuY29uc3Qgbm90ZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLWJ1dHRvblwiKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IGxvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxQcm9qZWN0c1wiKSkgfHwgW107XG5cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgKHRoaXMudGl0bGUgPSB0aXRsZSksICh0aGlzLnByb2plY3RUb2RvcyA9IFtdKSwgKHRoaXMucHJvamVjdElEID0gbG9jYWxQcm9qZWN0cy5sZW5ndGggKyAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHByb2plY3RSZXN1bHRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICBcbiAgY29uc3QgcHJvamVjdFJlc3VsdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBteUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBteURlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBteURlbGV0ZVByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgbXlEZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tY2xvc2VcIik7XG4gIG15RGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XG4gIHByb2plY3RSZXN1bHRSb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXJlc3VsdC1yb3dcIik7XG4gIHByb2plY3RSZXN1bHRSb3cuY2xhc3NMaXN0LmFkZChcImgtMTAwXCIpO1xuICBwcm9qZWN0UmVzdWx0Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gIHByb2plY3RSZXN1bHRSb3cuY2xhc3NMaXN0LmFkZChcInctMTAwXCIpO1xuICBwcm9qZWN0UmVzdWx0Um93LmNsYXNzTGlzdC5hZGQoXCJnYXAtM1wiKTtcblxuICBwcm9qZWN0UmVzdWx0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1yZXN1bHRcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiY29sLTVcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcImgtNTBcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcIm1iLTBcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcImJvcmRlclwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLTNcIik7XG4gIHByb2plY3RSZXN1bHQuY2xhc3NMaXN0LmFkZChcImJvcmRlci1kYXJrXCIpO1xuICBwcm9qZWN0UmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJyb3VuZGVkXCIpO1xuICBwcm9qZWN0UmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tcHJvamVjdFwiKTtcbiAgcHJvamVjdFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwicG9zaXRpb24tcmVsYXRpdmVcIik7XG5cbiAgcHJvamVjdFJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImQtZmxleFwiKTtcbiAgcHJvamVjdFJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImp1c3RpZnktY29udGVudC1jZW50ZXJcIik7XG4gIHByb2plY3RSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG4gIHByb2plY3RSZXN1bHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3LTEwMFwiKTtcbiAgcHJvamVjdFJlc3VsdFRleHQuY2xhc3NMaXN0LmFkZChcImgtMTAwXCIpO1xuICBwcm9qZWN0UmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jbGlja1wiKTtcblxuICBteUgzLmNsYXNzTGlzdC5hZGQoXCJtYi0wXCIpO1xuICBteUgzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0UmVzdWx0VGV4dC5hcHBlbmRDaGlsZChteUgzKTtcbiAgcHJvamVjdFJlc3VsdC5hcHBlbmRDaGlsZChwcm9qZWN0UmVzdWx0VGV4dCk7XG4gIHByb2plY3RSZXN1bHQuYXBwZW5kQ2hpbGQobXlEZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RSZXN1bHRSb3cpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbG9jYWxQcm9qZWN0c1tpXTtcbiAgICBjb25zdCBuZXdQcm9qZWN0UmVzdWx0ID0gcHJvamVjdFJlc3VsdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgbmV3RGl2UHJvamVjdFRpdGxlID0gbmV3UHJvamVjdFJlc3VsdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgY29uc3QgbmV3RGl2UHJvamVjdFJlc3VsdFRleHQgPSBuZXdQcm9qZWN0UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jbGlja1wiKTtcbiAgICBuZXdQcm9qZWN0UmVzdWx0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kfSlgO1xuICAgIGNvbnN0IG5ld0Nsb3NlUHJvamVjdEJ1dHRvbiA9IG5ld1Byb2plY3RSZXN1bHQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvamVjdFwiKTtcbiAgICBuZXdDbG9zZVByb2plY3RCdXR0b24ucHJvamVjdElEID0gZWxlbWVudC5wcm9qZWN0SUQ7XG4gICAgbmV3RGl2UHJvamVjdFJlc3VsdFRleHQucHJvamVjdElEID0gZWxlbWVudC5wcm9qZWN0SURcbiAgICBuZXdEaXZQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgIGxldCByZXNJRDtcbiAgICBsZXQgZm9vdGVyXG4gICAgbmV3RGl2UHJvamVjdFJlc3VsdFRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGxpc3RDbGljayhldil7XG4gICAgICBjbGlja2VkT2JqLmhvbWVDbGlja2VkID0gZmFsc2U7XG4gICAgICBjbGlja2VkT2JqLnRvZGF5Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgY2xpY2tlZE9iai53ZWVrQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgY2xpY2tlZE9iai5wcm9qZWN0c0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkID0gdHJ1ZTtcbiAgICAgIGNsaWNrZWRPYmoubm90ZXNDbGlja2VkID0gZmFsc2U7XG4gICAgICBcbiAgICAgIGZvb3RlciA9IGFkZFRvZG9JblByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8taW4tcHJvamVjdC1mb290ZXJcIik7XG4gICAgICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gICAgICBmb290ZXIudGV4dENvbnRlbnQgPSBgQWRkIFRvZG8gSW4gJHtuZXdEaXZQcm9qZWN0VGl0bGUudGV4dENvbnRlbnR9YDtcblxuICAgICAgYWxsTGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvamVjdElEID09PSBldi50YXJnZXQucHJvamVjdElEKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZDJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXNJRCA9IGV2LnRhcmdldC5wcm9qZWN0SUQ7XG4gICAgICBjb25zb2xlLmxvZyhyZXNJRClcblxuICAgICAgaWYgKGV2LnRhcmdldC5wcm9qZWN0SUQgPT09IGVsZW1lbnQucHJvamVjdElEKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnByb2plY3RUb2RvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVuZGVyUHJvamVjdFRvZG8oZWxlbWVudC5wcm9qZWN0VG9kb3MpO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2F2ZVRvZG9JblByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgYWRkVG9kb0luUHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzYXZlVG9kb0luUHJvamVjdCk7XG4gICAgICB9XG5cbiAgICAgIHNhdmVUb2RvSW5Qcm9qZWN0ID0gc2F2ZVRvZG9zT25Qcm9qZWN0Rm9ybVN1Ym1pdChyZXNJRCwgZWxlbWVudCk7XG4gICAgICBjb25zb2xlLmxvZyhjbGlja2VkT2JqKVxuXG4gICAgfSlcbiAgICBwcm9qZWN0UmVzdWx0Um93LmFwcGVuZENoaWxkKG5ld1Byb2plY3RSZXN1bHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVUb2Rvc09uUHJvamVjdEZvcm1TdWJtaXQocmVzSUQsIHByb2plY3QpIHtcbiAgY29uc3Qgc2F2ZVRvZG9JblByb2plY3QgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9UaXRsZUluUHJvamVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1pbi1wcm9qZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzSW5Qcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRhcmVhLWluLXByb2plY3RcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0RhdGVJblByb2plY3RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1pbi1wcm9qZWN0XCIpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBpZiAobG93UHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgcHJpb3JpdHkgPSBcImxvd1wiO1xuICAgIH0gZWxzZSBpZiAobWlkUHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgcHJpb3JpdHkgPSBcIm1pZFwiO1xuICAgIH0gZWxzZSBpZiAoaGlnaFByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJoaWdoXCI7XG4gICAgfVxuICAgIGlmIChyZXNJRCAhPT0gcHJvamVjdC5wcm9qZWN0SUQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc0lELCBwcm9qZWN0LnByb2plY3RJRCwgXCJmYWFhYWFhbHNlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAocmVzSUQgPT09IHByb2plY3QucHJvamVjdElEKSB7XG4gICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG9zKFxuICAgICAgICB0b2RvVGl0bGVJblByb2plY3RWYWx1ZSxcbiAgICAgICAgdG9kb0RldGFpbHNJblByb2plY3RWYWx1ZSxcbiAgICAgICAgdG9kb0RhdGVJblByb2plY3RWYWx1ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNJRCwgcHJvamVjdC5wcm9qZWN0SUQpXG4gICAgICBsb2NhbFRvZG9zLnB1c2godG9kbylcbiAgICAgIGlmKGxvY2FsUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpe1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpaVwiKVxuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsVG9kb3MpKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG5cbiAgICAgIGlmKCgoZGlmZmVyZW5jZUluRGF5cyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSkgPCA3KSAmJiAoKGRpZmZlcmVuY2VJbkRheXModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpID49IDApKXtcbiAgICAgICAgY29uc29sZS5sb2coZGlmZmVyZW5jZUluRGF5cyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSlcbiAgICAgICAgbG9jYWxUb2Rvc1dlZWtzLnB1c2godG9kbylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFRvZG9zV2Vla3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUb2Rvc1dlZWtzKSk7XG5cbiAgICAgIH1cbiAgICAgIGlmICgoKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpID49IDApICYmIChkaWZmZXJlbmNlSW5Ib3Vycyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA8PSAyNCkpfHwoKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpIDw9IDApICYmIChkaWZmZXJlbmNlSW5Ib3Vycyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA+PSAtMjQpKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpKTtcbiAgICAgICAgbG9jYWxUb2Rvc1RvZGF5LnB1c2godG9kbylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFRvZG9zVG9kYXlcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUb2Rvc1RvZGF5KSk7XG4gXG4gICAgICB9XG4gIFxuICAgICAgcmVuZGVyUHJvamVjdFRvZG8ocHJvamVjdC5wcm9qZWN0VG9kb3MpO1xuICAgICAgYWRkVG9kb0luUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTZcIik7XG4gICAgfVxuICAgIFxuICB9O1xuXG4gIGFkZFRvZG9JblByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc2F2ZVRvZG9JblByb2plY3QpO1xuXG4gIHJldHVybiBzYXZlVG9kb0luUHJvamVjdDtcbn1cblxubGV0IHNhdmVUb2RvSW5Qcm9qZWN0ID0gbnVsbDtcbmZ1bmN0aW9uIGFkZFByb2plY3ROYW1lKCkge1xuICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cbiAgICBsZXQgcmVzSUQ7XG4gICAgbGV0IGZvb3RlcjtcbiAgICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5ld0xpc3QuY2xhc3NMaXN0LmFkZChcImxpc3QtZ3JvdXAtaXRlbVwiKTtcbiAgICBuZXdMaXN0LmNsYXNzTGlzdC5hZGQoXCJtcy0zXCIpO1xuICAgIG5ld0xpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdHNcIik7XG4gICAgbmV3TGlzdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgbmV3TGlzdC5wcm9qZWN0SUQgPSBwcm9qZWN0LnByb2plY3RJRDtcbiAgICBcblxuICAgIG5ld0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIGxpc3RDbGljayhldikge1xuICAgICAgY2xpY2tlZE9iai5ob21lQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgY2xpY2tlZE9iai50b2RheUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGNsaWNrZWRPYmoucHJvamVjdHNDbGlja2VkID0gZmFsc2U7XG4gICAgICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IHRydWU7XG4gICAgICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICBmb290ZXIgPSBhZGRUb2RvSW5Qcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWluLXByb2plY3QtZm9vdGVyXCIpO1xuICAgICAgZm9vdGVyLnRleHRDb250ZW50ID0gYEFkZCBUb2RvIEluICR7bmV3TGlzdC50ZXh0Q29udGVudH1gO1xuICAgICAgY29uc3QgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RzXCIpO1xuICAgICAgYWxsTGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gICAgICB9KTtcbiAgICAgIG5ld0xpc3QuY2xhc3NMaXN0LmFkZChcImNsaWNrZWQyXCIpO1xuICAgICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgd2Vla0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgIG5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgIFxuICAgICAgLy8gY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcmVzSUQgPSBldi50YXJnZXQucHJvamVjdElEO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdClcblxuICAgICAgaWYgKGV2LnRhcmdldC5wcm9qZWN0SUQgPT09IHByb2plY3QucHJvamVjdElEKSB7XG4gICAgICAgIGlmIChwcm9qZWN0LnByb2plY3RUb2RvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVuZGVyUHJvamVjdFRvZG8ocHJvamVjdC5wcm9qZWN0VG9kb3MpO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2F2ZVRvZG9JblByb2plY3QgIT09IG51bGwpIHtcbiAgICAgICAgYWRkVG9kb0luUHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzYXZlVG9kb0luUHJvamVjdCk7XG4gICAgICB9XG5cbiAgICAgIHNhdmVUb2RvSW5Qcm9qZWN0ID0gc2F2ZVRvZG9zT25Qcm9qZWN0Rm9ybVN1Ym1pdChyZXNJRCwgcHJvamVjdCk7XG4gICAgICBjb25zb2xlLmxvZyhjbGlja2VkT2JqKVxuICAgIH0pO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzYXZlUHJvamVjdHNPblN1Ym1pdCgpIHtcbiAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGFkZFByb2plY3RUaXRsZSk7XG4gICAgbG9jYWxQcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKTtcblxuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5NVwiKTtcbiAgICBhZGRQcm9qZWN0KCk7XG4gICAgYWRkUHJvamVjdE5hbWUoKTtcbiAgfSk7XG59XG5leHBvcnQgeyBzYXZlUHJvamVjdHNPblN1Ym1pdCwgbG9jYWxQcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkUHJvamVjdE5hbWUsIGFkZFRvZG9JblByb2plY3RGb3JtIH07XG4iLCJpbXBvcnQgeyBub3RlcywgYWRkTm90ZSwgbG9jYWxOb3RlcyB9IGZyb20gXCIuL2FkZC1ub3RlLmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuZnVuY3Rpb24gbm90ZURlbGV0ZUJ1dHRvbigpIHtcbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbE5vdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbG9jYWxOb3Rlc1tpXTtcbiAgICAgIGlmIChldi50YXJnZXQubm90ZUlEID09PSBlbGVtZW50Lm5vdGVJRCAmJiBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNsb3NlXCIpKSB7XG4gICAgICAgIGNvbnN0IHJlc0lEID0gZXYudGFyZ2V0Lm5vdGVJRDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsb2NhbE5vdGVzLmZpbmRJbmRleChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUubm90ZUlEID09PSBlbGVtZW50Lm5vdGVJRDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsTm90ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbE5vdGVzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsTm90ZXMpKTtcblxuICAgICAgICBhZGROb3RlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCB7IG5vdGVEZWxldGVCdXR0b24gfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBhZGRQcm9qZWN0LCBhZGRQcm9qZWN0TmFtZSwgYWRkVG9kb0luUHJvamVjdEZvcm0sIGxvY2FsUHJvamVjdHMgfSBmcm9tIFwiLi9hZGQtcHJvamVjdHNcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5sZXQgc2F2ZVRvZG9JblByb2plY3QgPSBudWxsO1xuZnVuY3Rpb24gcHJvamVjdERlbGV0ZUJ1dHRvbigpIHtcbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbG9jYWxQcm9qZWN0c1tpXTtcbiAgICAgIGlmIChldi50YXJnZXQucHJvamVjdElEID09PSBlbGVtZW50LnByb2plY3RJRCAmJiBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNsb3NlXCIpKSB7XG4gICAgICAgIGNvbnN0IHJlc0lEID0gZXYudGFyZ2V0LnByb2plY3RJRDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsb2NhbFByb2plY3RzLmZpbmRJbmRleChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucHJvamVjdElEID09PSBlbGVtZW50LnByb2plY3RJRDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxQcm9qZWN0cyk7XG4gICAgICAgIGFkZFByb2plY3QoKTtcbiAgICAgICAgYWRkUHJvamVjdE5hbWUoKTtcbiAgICAgICAgaWYgKHNhdmVUb2RvSW5Qcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgYWRkVG9kb0luUHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzYXZlVG9kb0luUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IHsgcHJvamVjdERlbGV0ZUJ1dHRvbiB9O1xuIiwiaW1wb3J0IHsgdG9kb3MsIHRvZG9zVG9kYXksIHRvZG9zV2Vla3MsIGxvY2FsVG9kb3MsIGxvY2FsVG9kb3NUb2RheSwgbG9jYWxUb2Rvc1dlZWtzIH0gZnJvbSBcIi4vc3RvcmV0b2Rvcy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyRE9NLCByZW5kZXJUb2RheVRvZG9zLCByZW5kZXJXZWVrc1RvZG9zIH0gZnJvbSBcIi4vcmVuZGVyRE9NLmpzXCI7XG5pbXBvcnQgeyBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vYWRkLXByb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBjbGlja2VkT2JqIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RUb2RvIH0gZnJvbSBcIi4vcmVuZGVyRE9NLmpzXCI7XG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JRCkge1xuICBjb25zdCB0b2RvVG9FZGl0ID0gbG9jYWxUb2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLnRvZG9JRCA9PT0gdG9kb0lEKTtcbiAgY29uc3QgaW5kZXggPSBsb2NhbFRvZG9zLmZpbmRJbmRleChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUudG9kb0lEID09PSB0b2RvSUQ7XG4gIH0pO1xuICBpZiAobG9jYWxUb2Rvc1RvZGF5LmluY2x1ZGVzKHRvZG9Ub0VkaXQpKSB7XG4gICAgY29uc3QgaW5kZXhSZXMgPSBsb2NhbFRvZG9zVG9kYXkuZmluZEluZGV4KGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICByZXR1cm4gdG9kbyA9PT0gdG9kb1RvRWRpdDtcbiAgICB9KTtcbiAgICBsb2NhbFRvZG9zVG9kYXkuc3BsaWNlKGluZGV4UmVzLCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsVG9kb3NUb2RheVwiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRvZG9zVG9kYXkpKTtcbiAgfVxuICBpZiAobG9jYWxUb2Rvc1dlZWtzLmluY2x1ZGVzKHRvZG9Ub0VkaXQpKSB7XG4gICAgY29uc3QgaW5kZXhSZXMgPSBsb2NhbFRvZG9zV2Vla3MuZmluZEluZGV4KGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICByZXR1cm4gdG9kbyA9PT0gdG9kb1RvRWRpdDtcbiAgICB9KTtcbiAgICBsb2NhbFRvZG9zV2Vla3Muc3BsaWNlKGluZGV4UmVzLCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsVG9kb3NXZWVrc1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRvZG9zV2Vla3MpKTtcbiAgfVxuICBpZiAobG9jYWxQcm9qZWN0cyAhPT0gXCJcIiAmJiBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGxvY2FsUHJvamVjdHNbaV07XG4gICAgICBpZiAocHJvamVjdC5wcm9qZWN0VG9kb3MuaW5jbHVkZXModG9kb1RvRWRpdCkpIHtcbiAgICAgICAgY29uc3QgaW5kZXhSZXMgPSBwcm9qZWN0LnByb2plY3RUb2Rvcy5maW5kSW5kZXgoZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICByZXR1cm4gdG9kbyA9PT0gdG9kb1RvRWRpdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdC5wcm9qZWN0VG9kb3Muc3BsaWNlKGluZGV4UmVzLCAxKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKTtcblxuICAgICAgICByZW5kZXJQcm9qZWN0VG9kbyhwcm9qZWN0LnByb2plY3RUb2Rvcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsVG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUb2RvcykpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChsb2NhbFByb2plY3RzICE9PSBcIlwiICYmIGNsaWNrZWRPYmouaG9tZUNsaWNrZWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBsb2NhbFByb2plY3RzW2ldO1xuICAgICAgaWYgKHByb2plY3QucHJvamVjdFRvZG9zLmluY2x1ZGVzKHRvZG9Ub0VkaXQpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4UmVzID0gcHJvamVjdC5wcm9qZWN0VG9kb3MuZmluZEluZGV4KGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgcmV0dXJuIHRvZG8gPT09IHRvZG9Ub0VkaXQ7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0LnByb2plY3RUb2Rvcy5zcGxpY2UoaW5kZXhSZXMsIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxQcm9qZWN0cykpO1xuXG4gICAgICAgIHJlbmRlclByb2plY3RUb2RvKHByb2plY3QucHJvamVjdFRvZG9zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxUb2Rvc1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRvZG9zKSk7XG5cbiAgICByZW5kZXJET00oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW5kZXJET00oKTtcbn1cbmV4cG9ydCB7IGRlbGV0ZVRvZG8gfTtcbiIsImltcG9ydCB7IHRvZG9zLHRvZG9zV2Vla3MsdG9kb3NUb2RheSxsb2NhbFRvZG9zLGxvY2FsVG9kb3NUb2RheSxsb2NhbFRvZG9zV2Vla3MgfSBmcm9tIFwiLi9zdG9yZXRvZG9zLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJET00sIHJlbmRlclByb2plY3RUb2RvIH0gZnJvbSBcIi4vcmVuZGVyRE9NLmpzXCI7XG5pbXBvcnQgeyBjbGlja2VkT2JqIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGFkZFByb2plY3ROYW1lLCBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vYWRkLXByb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzLCBkaWZmZXJlbmNlSW5Ib3VycyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRvZG9cIik7XG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbmZ1bmN0aW9uIGVkaXRUb2Rvcyh0b2RvSUQpIHtcbiAgY29uc3QgdG9kb1RvRWRpdCA9IGxvY2FsVG9kb3MuZmluZCgodG9kbykgPT4gdG9kby50b2RvSUQgPT09IHRvZG9JRCk7XG4gIGNvbnN0IGluZGV4V2Vla3MgPSBsb2NhbFRvZG9zV2Vla3MuZmluZEluZGV4KGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5ub3RlSUQgPT09IHRvZG9Ub0VkaXQubm90ZUlEO1xuICB9KTtcbiAgY29uc3QgaW5kZXhUb2RheSA9IGxvY2FsVG9kb3NUb2RheS5maW5kSW5kZXgoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLm5vdGVJRCA9PT0gdG9kb1RvRWRpdC5ub3RlSUQ7XG4gIH0pO1xuXG4gIGVkaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIHNhdmVFZGl0KGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZUVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtZWRpdFwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWEtZWRpdFwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlRWRpdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWVkaXRcIikudmFsdWU7XG4gICAgY29uc3QgbG93UHJpb3JpdHlFZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctZWRpdFwiKTtcbiAgICBjb25zdCBtaWRQcmlvcml0eUVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1lZGl0XCIpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtZWRpdFwiKTtcbiAgICBpZiAodGl0bGVFZGl0VmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRvZG9Ub0VkaXQudGl0bGUgPSB0aXRsZUVkaXRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uRWRpdFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB0b2RvVG9FZGl0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FZGl0VmFsdWU7XG4gICAgfVxuICAgIGlmIChkdWVEYXRlRWRpdFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB0b2RvVG9FZGl0LmR1ZURhdGUgPSBkdWVEYXRlRWRpdFZhbHVlO1xuICAgIH1cblxuICAgIGlmIChsb3dQcmlvcml0eUVkaXRCdXR0b24uc3R5bGUub3V0bGluZS5pbmNsdWRlcyhcInNvbGlkXCIpKSB7XG4gICAgICB0b2RvVG9FZGl0LnByaW9yaXR5ID0gXCJsb3dcIjtcbiAgICB9IGVsc2UgaWYgKG1pZFByaW9yaXR5RWRpdEJ1dHRvbi5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHRvZG9Ub0VkaXQucHJpb3JpdHkgPSBcIm1pZFwiO1xuICAgIH0gZWxzZSBpZiAoaGlnaFByaW9yaXR5RWRpdEJ1dHRvbi5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHRvZG9Ub0VkaXQucHJpb3JpdHkgPSBcImhpZ2hcIjtcbiAgICB9XG4gICAgaWYoKChkaWZmZXJlbmNlSW5EYXlzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpKSA8IDcpICYmICgoZGlmZmVyZW5jZUluRGF5cyh0b2RvVG9FZGl0LmR1ZURhdGUsIGN1cnJlbnREYXRlKSkgPj0gMCkpe1xuICAgICAgY29uc29sZS5sb2coZGlmZmVyZW5jZUluRGF5cyh0b2RvVG9FZGl0LmR1ZURhdGUsIGN1cnJlbnREYXRlKSlcbiAgICAgIGlmKGxvY2FsVG9kb3NXZWVrcy5maW5kKCh0b2RvKT0+IHRvZG8gPT09IHRvZG9Ub0VkaXQpID09PSB1bmRlZmluZWQpe1xuXG4gICAgICAgIGxvY2FsVG9kb3NXZWVrcy5wdXNoKHRvZG9Ub0VkaXQpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxUb2Rvc1dlZWtzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsVG9kb3NXZWVrcykpO1xuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsVG9kb3NXZWVrcy5zcGxpY2UoaW5kZXhXZWVrcywxKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFRvZG9zV2Vla3NcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxUb2Rvc1dlZWtzKSk7XG5cbiAgICB9XG4gICAgaWYgKCgoZGlmZmVyZW5jZUluSG91cnModG9kb1RvRWRpdC5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPj0gMCkgJiYgKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpIDw9IDI0KSl8fCgoZGlmZmVyZW5jZUluSG91cnModG9kb1RvRWRpdC5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPD0gMCkgJiYgKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpID49IC0yNCkpKXtcbiAgICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2VJbkhvdXJzKHRvZG9Ub0VkaXQuZHVlRGF0ZSwgY3VycmVudERhdGUpKTtcbiAgICAgIGlmKGxvY2FsVG9kb3NUb2RheS5maW5kKCh0b2RvKT0+IHRvZG8gPT09IHRvZG9Ub0VkaXQpID09PSB1bmRlZmluZWQpe1xuICAgICAgICBsb2NhbFRvZG9zVG9kYXkucHVzaCh0b2RvVG9FZGl0KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsVG9kb3NUb2RheVwiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRvZG9zVG9kYXkpKTtcblxuICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgIGxvY2FsVG9kb3NUb2RheS5zcGxpY2UoaW5kZXhUb2RheSwgMSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxUb2Rvc1RvZGF5XCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsVG9kb3NUb2RheSkpO1xuICAgIH1cbiAgXG5cbiAgICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXkyXCIpO1xuICAgIGVkaXRUb2RvRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNhdmVFZGl0KTtcbiAgICBpZiAobG9jYWxQcm9qZWN0cyAhPT0gXCJcIiAmJiBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBsb2NhbFByb2plY3RzW2ldO1xuICAgICAgICBpZiAocHJvamVjdC5wcm9qZWN0VG9kb3MuaW5jbHVkZXModG9kb1RvRWRpdCkpIHtcbiAgICAgICAgICByZW5kZXJQcm9qZWN0VG9kbyhwcm9qZWN0LnByb2plY3RUb2Rvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVuZGVyRE9NKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBlZGl0VG9kb3MgfTtcbiIsImNvbnN0IGVkaXRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10b2RvXCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1lZGl0XCIpO1xuY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1lZGl0XCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWVkaXRcIik7XG5cbmZ1bmN0aW9uIGVkaXRGb3JtVUkoKSB7XG4gIGVkaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgaWYgKGV2LnRhcmdldC50eXBlICE9PSBcImRhdGVcIiAmJiBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgIT09IFwiZWRpdC1mb3JtXCIpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImxvdy1lZGl0XCIpIHtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcIm1pZC1lZGl0XCIpIHtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImhpZ2gtZWRpdFwiKSB7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCB7IGVkaXRGb3JtVUkgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xuICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb1wiKTtcbiAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbiAgY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFwiKTtcbiAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoXCIpO1xuICBjb25zdCBsb3dQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1pbi1wcm9qZWN0XCIpO1xuICBjb25zdCBtaWRQcmlvcml0eUJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1pbi1wcm9qZWN0XCIpO1xuICBjb25zdCBoaWdoUHJpb3JpdHlCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWluLXByb2plY3RcIik7XG4gIGNvbnN0IGFkZFRvZG9JblByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1pbi1wcm9qZWN0XCIpO1xuXG4gIGFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGlmIChldi50YXJnZXQudHlwZSAhPT0gXCJkYXRlXCIgJiYgZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpICE9PSBcInN1Ym1pdC1mb3JtXCIpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImxvd1wiKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uLnN0eWxlLm91dGxpbmUgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICB9IGVsc2UgaWYgKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJtaWRcIikge1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgYWRkVG9kb0luUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGlmIChldi50YXJnZXQudHlwZSAhPT0gXCJkYXRlXCIgJiYgZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpICE9PSBcInN1Ym1pdC1mb3JtLWluLXByb2plY3RcIikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibG93LWluLXByb2plY3RcIikge1xuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibWlkLWluLXByb2plY3RcIikge1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvblByb2plY3Quc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiaGlnaC1pbi1wcm9qZWN0XCIpIHtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYWRkSW1hZ2VzIGZyb20gXCIuL2FkZC1pbWFnZXMuanNcIjtcbmltcG9ydCBnZXRGb3JtRGF0YSBmcm9tIFwiLi9mb3JtLXVpLmpzXCI7XG5pbXBvcnQgeyB0b2RvRGVsZXRlQnV0dG9uLCB0b2RvRWRpdEJ1dHRvbiwgdG9kb0RldGFpbHNCdXR0b24sIHRvZG9DaGVja2VkQnV0dG9uIH0gZnJvbSBcIi4vdG9kby1idXR0b25zLmpzXCI7XG5pbXBvcnQgeyBlZGl0Rm9ybVVJIH0gZnJvbSBcIi4vZm9ybS1lZGl0LXVpLmpzXCI7XG5pbXBvcnQgeyBzYXZlVG9kb3NPblN1Ym1pdCB9IGZyb20gXCIuL3N0b3JldG9kb3MuanNcIjtcbmltcG9ydCB7IHJlbmRlckRPTSwgcmVuZGVyVG9kYXlUb2RvcywgcmVuZGVyV2Vla3NUb2RvcyB9IGZyb20gXCIuL3JlbmRlckRPTS5qc1wiO1xuaW1wb3J0IHsgc2F2ZU5vdGVzT25TdWJtaXQsIGFkZE5vdGUgfSBmcm9tIFwiLi9hZGQtbm90ZS5qc1wiO1xuaW1wb3J0IHsgbm90ZURlbGV0ZUJ1dHRvbiB9IGZyb20gXCIuL2RlbGV0ZS1ub3RlLmpzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBzYXZlUHJvamVjdHNPblN1Ym1pdCwgcHJvamVjdHMsIGFkZFByb2plY3ROYW1lIH0gZnJvbSBcIi4vYWRkLXByb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0RGVsZXRlQnV0dG9uIH0gZnJvbSBcIi4vZGVsZXRlLXByb2plY3QuanNcIjtcbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcbmNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvXCIpO1xuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdG9kb1wiKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5jb25zdCBkaXNwbGF5VG9kb0RldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktZGV0YWlsc1wiKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnV0dG9uXCIpO1xuY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LWJ1dHRvblwiKTtcbmNvbnN0IHdlZWtCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWstYnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWJ1dHRvblwiKTtcbmNvbnN0IG5vdGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlcy1idXR0b25cIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgYWRkTm90ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1ub3RlXCIpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xuY29uc3QgYWRkVG9kb0luUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8taW4tcHJvamVjdFwiKTtcbmNvbnN0IHRvZG9UaXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbmNvbnN0IHRvZG9EZXRhaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRhcmVhXCIpO1xuY29uc3QgdG9kb0RhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbmNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3dcIik7XG5jb25zdCBtaWRQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkXCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5Qcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWluLXByb2plY3RcIik7XG5jb25zdCB0b2RvRGV0YWlsc0luUHJvamVjdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYS1pbi1wcm9qZWN0XCIpO1xuY29uc3QgdG9kb0RhdGVJblByb2plY3RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1pbi1wcm9qZWN0XCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctaW4tcHJvamVjdFwiKTtcbmNvbnN0IG1pZFByaW9yaXR5QnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkLWluLXByb2plY3RcIik7XG5jb25zdCBoaWdoUHJpb3JpdHlCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWluLXByb2plY3RcIik7XG5jb25zdCBhZGRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LXRpdGxlXCIpO1xuXG5jb25zdCBhZGROb3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1ub3RlLXRpdGxlXCIpO1xuY29uc3QgYWRkTm90ZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRhcmVhLW5vdGVcIik7XG5cbmNvbnN0IGNsaWNrZWRPYmogPSB7XG4gIGhvbWVDbGlja2VkOiBmYWxzZSxcbiAgdG9kYXlDbGlja2VkOiBmYWxzZSxcbiAgd2Vla0NsaWNrZWQ6IGZhbHNlLFxuICBwcm9qZWN0c0NsaWNrZWQ6IGZhbHNlLFxuICB0aGlzUHJvamVjdENsaWNrZWQ6IGZhbHNlLFxuICBub3Rlc0NsaWNrZWQ6IGZhbHNlLFxufTtcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcbmdldEZvcm1EYXRhKCk7XG5hZGRJbWFnZXMoKTtcbnRvZG9EZWxldGVCdXR0b24oKTtcbnRvZG9FZGl0QnV0dG9uKCk7XG50b2RvRGV0YWlsc0J1dHRvbigpO1xudG9kb0NoZWNrZWRCdXR0b24oKTtcbmVkaXRGb3JtVUkoKTtcbnNhdmVUb2Rvc09uU3VibWl0KCk7XG5zYXZlTm90ZXNPblN1Ym1pdCgpO1xubm90ZURlbGV0ZUJ1dHRvbigpO1xuc2F2ZVByb2plY3RzT25TdWJtaXQoKTtcbnByb2plY3REZWxldGVCdXR0b24oKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKCFhZGRGb3JtLmNvbnRhaW5zKGV2LnRhcmdldCkgJiYgZXYudGFyZ2V0LnRhZ05hbWUgIT09IFwiSVwiKSB7XG4gICAgYWRkRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheVwiKTtcbiAgfVxufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGlmICghYWRkVG9kb0luUHJvamVjdC5jb250YWlucyhldi50YXJnZXQpICYmIGV2LnRhcmdldC50YWdOYW1lICE9PSBcIklcIikge1xuICAgIGFkZFRvZG9JblByb2plY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXk2XCIpO1xuICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKCFhZGROb3RlRm9ybS5jb250YWlucyhldi50YXJnZXQpICYmIGV2LnRhcmdldC50YWdOYW1lICE9PSBcIklcIikge1xuICAgIGFkZE5vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1vdmVybGF5NFwiKTtcbiAgfVxufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGlmICghYWRkUHJvamVjdEZvcm0uY29udGFpbnMoZXYudGFyZ2V0KSAmJiBldi50YXJnZXQudGFnTmFtZSAhPT0gXCJJXCIpIHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTVcIik7XG4gIH1cbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAoIWVkaXRGb3JtLmNvbnRhaW5zKGV2LnRhcmdldCkgJiYgIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0XCIpKSB7XG4gICAgZWRpdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXkyXCIpO1xuICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKCFkaXNwbGF5VG9kb0RldGFpbHMuY29udGFpbnMoZXYudGFyZ2V0KSAmJiAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRldGFpbHNcIikpIHtcbiAgICBkaXNwbGF5VG9kb0RldGFpbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXkzXCIpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHNob3dGb3JtKGV2KSB7XG4gIGlmICghY2xpY2tlZE9iai5wcm9qZWN0c0NsaWNrZWQgJiYgIWNsaWNrZWRPYmoubm90ZXNDbGlja2VkICYmICFjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCkge1xuICAgIHRvZG9UaXRsZVZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICB0b2RvRGV0YWlsLnZhbHVlID0gXCJcIjtcbiAgICB0b2RvRGF0ZVZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICBsb3dQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgYWRkRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW92ZXJsYXlcIik7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZE9iai5ub3Rlc0NsaWNrZWQpIHtcbiAgICBhZGROb3RlVGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGFkZE5vdGVEZXRhaWxzLnZhbHVlID0gXCJcIjtcbiAgICBhZGROb3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW92ZXJsYXk0XCIpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRPYmoucHJvamVjdHNDbGlja2VkKSB7XG4gICAgYWRkUHJvamVjdFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW92ZXJsYXk1XCIpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRPYmoudGhpc1Byb2plY3RDbGlja2VkKSB7XG4gICAgdG9kb1RpdGxlSW5Qcm9qZWN0VmFsdWUudmFsdWUgPSBcIlwiO1xuICAgIHRvZG9EZXRhaWxzSW5Qcm9qZWN0VmFsdWUudmFsdWUgPSBcIlwiO1xuICAgIHRvZG9EYXRlSW5Qcm9qZWN0VmFsdWUudmFsdWUgPSBcIlwiO1xuICAgIGxvd1ByaW9yaXR5QnV0dG9uUHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgbWlkUHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBoaWdoUHJpb3JpdHlCdXR0b25Qcm9qZWN0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICBhZGRUb2RvSW5Qcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTZcIik7XG4gIH1cbn1cblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGNsaWNrZWRPYmouaG9tZUNsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnRvZGF5Q2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnByb2plY3RzQ2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IGZhbHNlO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIHJlbmRlckRPTSgpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgd2Vla0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIG5vdGVzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBjb25zdCBhbGxMaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbGlzdHNcIik7XG4gIGFsbExpc3RJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZDJcIik7XG4gIH0pO1xufSk7XG50b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGNsaWNrZWRPYmouaG9tZUNsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnRvZGF5Q2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnByb2plY3RzQ2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IGZhbHNlO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIHJlbmRlclRvZGF5VG9kb3MoKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIHdlZWtCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBub3Rlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgY29uc3QgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RzXCIpO1xuICBhbGxMaXN0SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWQyXCIpO1xuICB9KTtcbn0pO1xud2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGNsaWNrZWRPYmouaG9tZUNsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnRvZGF5Q2xpY2tlZCA9IHRydWU7XG4gIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnByb2plY3RzQ2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IGZhbHNlO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIHJlbmRlcldlZWtzVG9kb3MoKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIHdlZWtCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBub3Rlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgY29uc3QgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RzXCIpO1xuICBhbGxMaXN0SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWQyXCIpO1xuICB9KTtcbn0pO1xucHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICBjbGlja2VkT2JqLmhvbWVDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoudG9kYXlDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai5wcm9qZWN0c0NsaWNrZWQgPSB0cnVlO1xuICBjbGlja2VkT2JqLnRoaXNQcm9qZWN0Q2xpY2tlZCA9IGZhbHNlO1xuICBjbGlja2VkT2JqLm5vdGVzQ2xpY2tlZCA9IGZhbHNlO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGFkZFByb2plY3QoKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIHdlZWtCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICBub3Rlc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgY29uc3QgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RzXCIpO1xuICBhbGxMaXN0SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWQyXCIpO1xuICB9KTtcbn0pO1xuXG5ub3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjbGlja2VkT2JqLmhvbWVDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoudG9kYXlDbGlja2VkID0gZmFsc2U7XG4gIGNsaWNrZWRPYmoud2Vla0NsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai5wcm9qZWN0c0NsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai50aGlzUHJvamVjdENsaWNrZWQgPSBmYWxzZTtcbiAgY2xpY2tlZE9iai5ub3Rlc0NsaWNrZWQgPSB0cnVlO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGFkZE5vdGUoKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgdG9kYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIHdlZWtCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICBub3Rlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgY29uc3QgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWxpc3RzXCIpO1xuICBhbGxMaXN0SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWQyXCIpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgeyBjbGlja2VkT2JqIH07XG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFkZFByb2plY3ROYW1lKTtcbiIsImltcG9ydCB7XG4gIHRvZG9zLFxuICB0b2Rvc1RvZGF5LFxuICB0b2Rvc1dlZWtzLFxuICB0b2Rvc1Byb2plY3QsXG4gIGxvY2FsVG9kb3MsXG4gIGxvY2FsVG9kb3NUb2RheSxcbiAgbG9jYWxUb2Rvc1dlZWtzLFxufSBmcm9tIFwiLi9zdG9yZXRvZG9zLmpzXCI7XG5pbXBvcnQgeyBjbGlja2VkT2JqIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vYWRkLXByb2plY3RzLmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgdG9kb1JvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1yb3dcIik7XG5mdW5jdGlvbiByZW5kZXJET00oKSB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGxvY2FsVG9kb3NbaV07XG5cbiAgICBjb25zdCBteVRvZG9Sb3cgPSB0b2RvUm93LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpO1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc1wiKTtcbiAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG4gICAgY29uc3QgdG9kb0VkaXRJY29uQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuYmktcGVuY2lsLWZpbGxcIik7XG4gICAgY29uc3QgdG9kb0RlbGV0ZUljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS10cmFzaDMtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuICAgIHRvZG9EZXRhaWxzQnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9EZWxldGVCdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0VkaXRCdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0VkaXRJY29uQnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9EZWxldGVJY29uQnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctc3VjY2Vzc1wiKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibWlkXCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctd2FybmluZ1wiKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLWRhbmdlclwiKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChteVRvZG9Sb3cpO1xuICB9XG59XG5mdW5jdGlvbiByZW5kZXJUb2RheVRvZG9zKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVG9kb3NUb2RheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBsb2NhbFRvZG9zVG9kYXlbaV07XG4gICAgY29uc3QgbXlUb2RvUm93ID0gdG9kb1Jvdy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKTtcbiAgICBjb25zdCB0b2RvRGV0YWlsc0J1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNcIik7XG4gICAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0SWNvbkJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmJpLXBlbmNpbC1maWxsXCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVJY29uQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuYmktdHJhc2gzLWZpbGxcIik7XG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZVwiKTtcbiAgICB0b2RvRGV0YWlsc0J1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9FZGl0QnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9FZGl0SWNvbkJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRGVsZXRlSWNvbkJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLXN1Y2Nlc3NcIik7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIm1pZFwiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLXdhcm5pbmdcIik7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXJcIik7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXlUb2RvUm93KTtcbiAgfVxufVxuZnVuY3Rpb24gcmVuZGVyV2Vla3NUb2RvcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFRvZG9zV2Vla3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbG9jYWxUb2Rvc1dlZWtzW2ldO1xuICAgIGNvbnN0IG15VG9kb1JvdyA9IHRvZG9Sb3cuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG4gICAgY29uc3QgdG9kb0RldGFpbHNCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdFwiKTtcbiAgICBjb25zdCB0b2RvRWRpdEljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS1wZW5jaWwtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlSWNvbkJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmJpLXRyYXNoMy1maWxsXCIpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG4gICAgdG9kb0RldGFpbHNCdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEJ1dHRvbi50b2RvSUQgPSBlbGVtZW50LnRvZG9JRDtcbiAgICB0b2RvRWRpdEljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG4gICAgdG9kb0RlbGV0ZUljb25CdXR0b24udG9kb0lEID0gZWxlbWVudC50b2RvSUQ7XG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLXN1Y2Nlc3NcIik7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIm1pZFwiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLXdhcm5pbmdcIik7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1kYXJrXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1vcGFjaXR5LTEwXCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1vcGFjaXR5LTI1XCIpO1xuICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJiZy1kYW5nZXJcIik7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXlUb2RvUm93KTtcbiAgfVxufVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRvZG8oYXJyYXkpIHtcbiAgLy8gZGVidWdnZXI7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3QgPSBhcnJheVtpXTtcbiAgICBjb25zdCBteVRvZG9Sb3cgPSB0b2RvUm93LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRvZG9EYXRlID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpO1xuICAgIGNvbnN0IHRvZG9EZXRhaWxzQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc1wiKTtcbiAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG4gICAgY29uc3QgdG9kb0VkaXRJY29uQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuYmktcGVuY2lsLWZpbGxcIik7XG4gICAgY29uc3QgdG9kb0RlbGV0ZUljb25CdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5iaS10cmFzaDMtZmlsbFwiKTtcbiAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuICAgIHRvZG9EZXRhaWxzQnV0dG9uLnRvZG9JRCA9IHByb2plY3QudG9kb0lEO1xuICAgIHRvZG9EZWxldGVCdXR0b24udG9kb0lEID0gcHJvamVjdC50b2RvSUQ7XG4gICAgdG9kb0VkaXRCdXR0b24udG9kb0lEID0gcHJvamVjdC50b2RvSUQ7XG4gICAgdG9kb0VkaXRJY29uQnV0dG9uLnRvZG9JRCA9IHByb2plY3QudG9kb0lEO1xuICAgIHRvZG9EZWxldGVJY29uQnV0dG9uLnRvZG9JRCA9IHByb2plY3QudG9kb0lEO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG4gICAgaWYgKHByb2plY3QucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctc3VjY2Vzc1wiKTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3QucHJpb3JpdHkgPT09IFwibWlkXCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctd2FybmluZ1wiKTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3QucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLWRhbmdlclwiKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChteVRvZG9Sb3cpO1xuICB9XG59XG5leHBvcnQgeyByZW5kZXJET00sIHJlbmRlclRvZGF5VG9kb3MsIHJlbmRlcldlZWtzVG9kb3MsIHJlbmRlclByb2plY3RUb2RvIH07XG4iLCJpbXBvcnQgeyByZW5kZXJET00sIHJlbmRlclRvZGF5VG9kb3MsIHJlbmRlclByb2plY3RUb2RvIH0gZnJvbSBcIi4vcmVuZGVyRE9NLmpzXCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzLCBkaWZmZXJlbmNlSW5Ib3VycyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgY2xpY2tlZE9iaiB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbmNvbnN0IG1pZFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRcIik7XG5jb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5jb25zdCB0b2RvcyA9IFtdO1xuY29uc3QgdG9kb3NUb2RheSA9IFtdO1xuY29uc3QgdG9kb3NXZWVrcyA9IFtdO1xuY29uc3QgdG9kb3NQcm9qZWN0ID0gW107XG5cbmNvbnN0IGxvY2FsVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxUb2Rvc1wiKSkgfHwgW107XG5jb25zdCBsb2NhbFRvZG9zVG9kYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxUb2Rvc1RvZGF5XCIpKSB8fCBbXTtcbmNvbnN0IGxvY2FsVG9kb3NXZWVrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbFRvZG9zV2Vla3NcIikpIHx8IFtdO1xuY29uc3QgbG9jYWxUb2Rvc1Byb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxUb2Rvc1Byb2plY3RcIikpIHx8IFtdO1xuXG5cbmNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMudG9kb0lEID0gbG9jYWxUb2Rvcy5sZW5ndGggKyAxO1xuICB9XG59XG5cbmNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb1wiKTtcbmZ1bmN0aW9uIHNhdmVUb2Rvc09uU3VibWl0KCkge1xuICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNhdmVUb2Rvcyk7XG5cbiAgZnVuY3Rpb24gc2F2ZVRvZG9zKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGV0YWlsc1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0YXJlYVwiKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBpZiAobG93UHJpb3JpdHlCdXR0b24uc3R5bGUub3V0bGluZS5pbmNsdWRlcyhcInNvbGlkXCIpKSB7XG4gICAgICBwcmlvcml0eSA9IFwibG93XCI7XG4gICAgfSBlbHNlIGlmIChtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJtaWRcIjtcbiAgICB9IGVsc2UgaWYgKGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5vdXRsaW5lLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIHByaW9yaXR5ID0gXCJoaWdoXCI7XG4gICAgfVxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kb3ModG9kb1RpdGxlVmFsdWUsIHRvZG9EZXRhaWxzVmFsdWUsIHRvZG9EYXRlVmFsdWUsIHByaW9yaXR5KTtcbiAgICBcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIGxvY2FsVG9kb3MucHVzaCh0b2RvKTtcbiAgICBpZigoKGRpZmZlcmVuY2VJbkRheXModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpIDwgNykgJiYgKChkaWZmZXJlbmNlSW5EYXlzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpKSA+PSAwKSl7XG4gICAgICBjb25zb2xlLmxvZyhkaWZmZXJlbmNlSW5EYXlzKHRvZG8uZHVlRGF0ZSwgY3VycmVudERhdGUpKVxuICAgICAgbG9jYWxUb2Rvc1dlZWtzLnB1c2godG9kbylcbiAgICAgIHRvZG9zV2Vla3MucHVzaCh0b2RvKVxuICAgIH1cbiAgICBpZiAoKChkaWZmZXJlbmNlSW5Ib3Vycyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA+PSAwKSAmJiAoZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPD0gMjQpKXx8KChkaWZmZXJlbmNlSW5Ib3Vycyh0b2RvLmR1ZURhdGUsIGN1cnJlbnREYXRlKSA8PSAwKSAmJiAoZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkgPj0gLTI0KSkpe1xuICAgICAgY29uc29sZS5sb2coZGlmZmVyZW5jZUluSG91cnModG9kby5kdWVEYXRlLCBjdXJyZW50RGF0ZSkpO1xuICAgICAgbG9jYWxUb2Rvc1RvZGF5LnB1c2godG9kbylcbiAgICAgIHRvZG9zVG9kYXkucHVzaCh0b2RvKTsgICBcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbFRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsVG9kb3MpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsVG9kb3NXZWVrc1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRvZG9zV2Vla3MpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsVG9kb3NUb2RheVwiLCBKU09OLnN0cmluZ2lmeShsb2NhbFRvZG9zVG9kYXkpKTtcblxuXG4gICAgLy8gbG9jYWxTdG9yYWdlLnRvZG9zV2Vla3MgPSBKU09OLnN0cmluZ2lmeSh0b2RvcylcbiAgICAvLyBsb2NhbFN0b3JhZ2UudG9kb3NUb2RheSA9IEpTT04uc3RyaW5naWZ5KHRvZG9zKVxuICAgIGNvbnNvbGUubG9nKGxvY2FsVG9kb3MpXG4gICAgcmVuZGVyRE9NKCk7XG4gICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXlcIik7XG4gIH1cbn1cbmV4cG9ydCB7IHNhdmVUb2Rvc09uU3VibWl0LCB0b2RvcywgdG9kb3NUb2RheSwgdG9kb3NXZWVrcywgdG9kb3NQcm9qZWN0LCBUb2Rvcyxsb2NhbFRvZG9zLCBsb2NhbFRvZG9zVG9kYXksbG9jYWxUb2Rvc1dlZWtzIH07XG4iLCJpbXBvcnQgeyB0b2RvcywgbG9jYWxUb2RvcyB9IGZyb20gXCIuL3N0b3JldG9kb3MuanNcIjtcbmltcG9ydCB7IGVkaXRUb2Rvcywgc2F2ZVRvZG9zT25FZGl0IH0gZnJvbSBcIi4vZm9ybS1lZGl0LXN1Ym1pdC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gXCIuL2RlbGV0ZS10b2RvLmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRvZG9cIik7XG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuY29uc3QgZGlzcGxheVRvZG9EZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktZGV0YWlsc1wiKTtcbmNvbnN0IGxvd1ByaW9yaXR5QnV0dG9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93LWVkaXRcIik7XG5jb25zdCBtaWRQcmlvcml0eUJ1dHRvbkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1lZGl0XCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1lZGl0XCIpO1xuY29uc3QgdGl0bGVFZGl0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWVkaXRcIik7XG5jb25zdCBkZXNjcmlwdGlvbkVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWEtZWRpdFwiKTtcbmNvbnN0IGR1ZURhdGVFZGl0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtZWRpdFwiKTtcblxuZnVuY3Rpb24gdG9kb0NoZWNrZWRCdXR0b24oKSB7XG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGlmIChldi50YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIGV2LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxzXCIpLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNlZGl0LWJ1dHRvblwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9XG4gICAgICAgIFwibGluZS10aHJvdWdoXCI7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwidGV4dC1zZWNvbmRhcnlcIik7XG4gICAgfSBlbHNlIGlmIChldi50YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmICFldi50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbHNcIilcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGV2LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNlZGl0LWJ1dHRvblwiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9XG4gICAgICAgIFwibm9uZVwiO1xuICAgICAgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtc2Vjb25kYXJ5XCIpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiB0b2RvRGVsZXRlQnV0dG9uKCkge1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBsb2NhbFRvZG9zW2ldO1xuICAgICAgaWYgKFxuICAgICAgICBldi50YXJnZXQudG9kb0lEID09PSBlbGVtZW50LnRvZG9JRCAmJlxuICAgICAgICAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSB8fCBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmktdHJhc2gzLWZpbGxcIikpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcmVzSUQgPSBldi50YXJnZXQudG9kb0lEO1xuICAgICAgICBkZWxldGVUb2RvKHJlc0lEKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gdG9kb0VkaXRCdXR0b24oKSB7XG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGxvY2FsVG9kb3NbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGV2LnRhcmdldC50b2RvSUQgPT09IGVsZW1lbnQudG9kb0lEICYmXG4gICAgICAgIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSB8fCBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmktcGVuY2lsLWZpbGxcIikpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcmVzSUQgPSBldi50YXJnZXQudG9kb0lEO1xuICAgICAgICB0aXRsZUVkaXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uRWRpdFZhbHVlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZHVlRGF0ZUVkaXRWYWx1ZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxvd1ByaW9yaXR5QnV0dG9uRWRpdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uRWRpdC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbkVkaXQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTJcIik7XG4gICAgICAgIGVkaXRUb2RvcyhyZXNJRCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZG9EZXRhaWxzQnV0dG9uKCkge1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBsb2NhbFRvZG9zW2ldO1xuICAgICAgaWYgKGV2LnRhcmdldC50b2RvSUQgPT09IGVsZW1lbnQudG9kb0lEICYmIGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXRhaWxzXCIpKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUb2RvVGl0bGUgPSBkaXNwbGF5VG9kb0RldGFpbHNNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG9kby10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheVRvZG9EZXRhaWxzID0gZGlzcGxheVRvZG9EZXRhaWxzTW9kYWwucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvZG8tZGV0YWlsc1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheVRvZG9Qcmlvcml0eSA9IGRpc3BsYXlUb2RvRGV0YWlsc01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS10b2RvLXByaW9yaXR5XCIpO1xuICAgICAgICBkaXNwbGF5VG9kb1RpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgZGlzcGxheVRvZG9EZXRhaWxzLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMT1dcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZnctYm9sZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIm1pZFwiKSB7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTUlEXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrb3JhbmdlXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZnctYm9sZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAwLCAwLCAwLjg4MylcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmdy1ib2xkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk5PVCBERUZJTkVEXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImZ3LWJvbGRcIik7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiYmctc2Vjb25kYXJ5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlUb2RvRGV0YWlsc01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW92ZXJsYXkzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHRvZG9EZWxldGVCdXR0b24sIHRvZG9FZGl0QnV0dG9uLCB0b2RvRGV0YWlsc0J1dHRvbiwgdG9kb0NoZWNrZWRCdXR0b24gfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIChudW1iZXIpID0+IHtcbiAgICBjb25zdCByb3VuZCA9IG1ldGhvZCA/IE1hdGhbbWV0aG9kXSA6IE1hdGgudHJ1bmM7XG4gICAgY29uc3QgcmVzdWx0ID0gcm91bmQobnVtYmVyKTtcbiAgICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbiAgfTtcbn1cbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheSBwZXJpb2RzIGJldHdlZW4gdHdvIGRhdGVzLiBGcmFjdGlvbmFsIGRheXMgYXJlXG4gKiB0cnVuY2F0ZWQgdG93YXJkcyB6ZXJvLlxuICpcbiAqIE9uZSBcImZ1bGwgZGF5XCIgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBsb2NhbCB0aW1lIGluIG9uZSBkYXkgdG8gdGhlIHNhbWVcbiAqIGxvY2FsIHRpbWUgb24gdGhlIG5leHQgb3IgcHJldmlvdXMgZGF5LiBBIGZ1bGwgZGF5IGNhbiBzb21ldGltZXMgYmUgbGVzcyB0aGFuXG4gKiBvciBtb3JlIHRoYW4gMjQgaG91cnMgaWYgYSBkYXlsaWdodCBzYXZpbmdzIGNoYW5nZSBoYXBwZW5zIGJldHdlZW4gdHdvIGRhdGVzLlxuICpcbiAqIFRvIGlnbm9yZSBEU1QgYW5kIG9ubHkgbWVhc3VyZSBleGFjdCAyNC1ob3VyIHBlcmlvZHMsIHVzZSB0aGlzIGluc3RlYWQ6XG4gKiBgTWF0aC50cnVuYyhkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KS8yNCl8MGAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBmdWxsIGRheXMgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbCB0aW1lem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDEgTWFyY2ggMjAyMCAwOjAwIGFuZCAxIEp1bmUgMjAyMCAwOjAwID9cbiAqIC8vIE5vdGU6IGJlY2F1c2UgbG9jYWwgdGltZSBpcyB1c2VkLCB0aGVcbiAqIC8vIHJlc3VsdCB3aWxsIGFsd2F5cyBiZSA5MiBkYXlzLCBldmVuIGluXG4gKiAvLyB0aW1lIHpvbmVzIHdoZXJlIERTVCBzdGFydHMgYW5kIHRoZVxuICogLy8gcGVyaW9kIGhhcyBvbmx5IDkyKjI0LTEgaG91cnMuXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDIwLCA1LCAxKSxcbiAqICAgbmV3IERhdGUoMjAyMCwgMiwgMSlcbiAqIClcbiAqIC8vPT4gOTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3Qgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpO1xuICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkpO1xuXG4gIF9kYXRlTGVmdC5zZXREYXRlKF9kYXRlTGVmdC5nZXREYXRlKCkgLSBzaWduICogZGlmZmVyZW5jZSk7XG5cbiAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICBjb25zdCBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKFxuICAgIGNvbXBhcmVMb2NhbEFzYyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpID09PSAtc2lnbixcbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7XG4gIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn1cblxuLy8gTGlrZSBgY29tcGFyZUFzY2AgYnV0IHVzZXMgbG9jYWwgdGltZSBub3QgVVRDLCB3aGljaCBpcyBuZWVkZWRcbi8vIGZvciBhY2N1cmF0ZSBlcXVhbGl0eSBjb21wYXJpc29ucyBvZiBVVEMgdGltZXN0YW1wcyB0aGF0IGVuZCB1cFxuLy8gaGF2aW5nIHRoZSBzYW1lIHJlcHJlc2VudGF0aW9uIGluIGxvY2FsIHRpbWUsIGUuZy4gb25lIGhvdXIgYmVmb3JlXG4vLyBEU1QgZW5kcyB2cy4gdGhlIGluc3RhbnQgdGhhdCBEU1QgZW5kcy5cbmZ1bmN0aW9uIGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRpZmYgPVxuICAgIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKSB8fFxuICAgIGRhdGVMZWZ0LmdldERhdGUoKSAtIGRhdGVSaWdodC5nZXREYXRlKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRIb3VycygpIC0gZGF0ZVJpZ2h0LmdldEhvdXJzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaW51dGVzKCkgLSBkYXRlUmlnaHQuZ2V0TWludXRlcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0U2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldFNlY29uZHMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluRGF5cztcbiIsImltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4vX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5tanNcIjtcbmltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbkhvdXJzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluSG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBob3Vyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5Ib3VyO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucz8ucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkhvdXJzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGVMZWZ0KSAtICt0b0RhdGUoZGF0ZVJpZ2h0KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=