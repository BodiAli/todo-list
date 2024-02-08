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
  const cardElementAdd = document.querySelector(".card.add");
  const cardElementEdit = document.querySelector(".card.edit");
  const linkTag = document.createElement("link");
  const formBackgroundImageAdd = new Image();
  formBackgroundImageAdd.src = _images_form_background_jpg__WEBPACK_IMPORTED_MODULE_2__;
  formBackgroundImageAdd.classList.add("card-img");
  formBackgroundImageAdd.setAttribute("id", "form-background");
  const formBackgroundImageEdit = new Image();
  formBackgroundImageEdit.src = _images_form_background_jpg__WEBPACK_IMPORTED_MODULE_2__;
  formBackgroundImageEdit.classList.add("card-img");
  formBackgroundImageEdit.setAttribute("id", "form-background-edit");
  linkTag.rel = "icon";
  linkTag.href = _images_task_list1_png__WEBPACK_IMPORTED_MODULE_1__;
  const iconHeader = new Image();
  iconHeader.src = _images_task_list_png__WEBPACK_IMPORTED_MODULE_0__;
  iconHeader.alt = "task list";
  header.appendChild(iconHeader);
  head.appendChild(linkTag);
  cardElementAdd.insertBefore(formBackgroundImageAdd, cardBodyAdd);
  cardElementEdit.insertBefore(formBackgroundImageEdit, cardBodyEdit);
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

const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
function editTodos(element) {
  editTodoForm.addEventListener("submit", saveEdit);
  function saveEdit(ev) {
    ev.preventDefault();
    const titleEditValue = document.getElementById("title-edit").value;
    const descriptionEditValue = document.getElementById("textarea-edit").value;
    const dueDateEditValue = document.getElementById("date-edit").value;
    const lowPriorityEditButton = document.getElementById("low-edit");
    const midPriorityEditButton = document.getElementById("mid-edit");
    const highPriorityEditButton = document.getElementById("high-edit");
    element.title = titleEditValue;
    element.description = descriptionEditValue;
    element.dueDate = dueDateEditValue;
    if (lowPriorityEditButton.style.border.includes("solid")) {
      element.priority = "low";
    } else if (midPriorityEditButton.style.border.includes("solid")) {
      element.priority = "mid";
    } else if (highPriorityEditButton.style.border.includes("solid")) {
      element.priority = "high";
    }
    editTodoForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay2");
    console.log(element);
  }
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
        lowPriorityButton.style.border = "2px solid black";
        midPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "mid-edit") {
        midPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "high-edit") {
        highPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        midPriorityButton.style.border = "none";
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
  addForm.addEventListener("click", function (ev) {
    if (ev.target.type !== "date" && ev.target.getAttribute("id") !== "submit-form") {
      ev.preventDefault();
      if (ev.target.getAttribute("id") === "low") {
        lowPriorityButton.style.border = "2px solid black";
        midPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "mid") {
        midPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        highPriorityButton.style.border = "none";
      } else if (ev.target.getAttribute("id") === "high") {
        highPriorityButton.style.border = "2px solid black";
        lowPriorityButton.style.border = "none";
        midPriorityButton.style.border = "none";
      }
    }
  });
}


/***/ }),

/***/ "./src/renderDOM.js":
/*!**************************!*\
  !*** ./src/renderDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDOM: () => (/* binding */ renderDOM)
/* harmony export */ });
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");

const content = document.getElementById("content");
const todoRow = document.getElementById("todo-row");
function renderDOM() {
  content.innerHTML = "";
  for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
    const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i];

    const myTodoRow = todoRow.cloneNode(true);
    const todoTitle = myTodoRow.querySelector("#todo-title");
    const todoDate = myTodoRow.querySelector("#todo-date");
    const todoDetailsButton = myTodoRow.querySelector(".details");
    const todoEditButton = myTodoRow.querySelector(".edit");
    todoDetailsButton.todoID = element.todoID;
    todoEditButton.todoID = element.todoID;
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




/***/ }),

/***/ "./src/storetodos.js":
/*!***************************!*\
  !*** ./src/storetodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveTodosOnSubmit: () => (/* binding */ saveTodosOnSubmit),
/* harmony export */   todos: () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _renderDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderDOM.js */ "./src/renderDOM.js");

const darkOverlay = document.getElementById("dark-overlay");
const lowPriorityButton = document.getElementById("low");
const midPriorityButton = document.getElementById("mid");
const highPriorityButton = document.getElementById("high");
const todos = [];
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
    if (lowPriorityButton.style.border.includes("solid")) {
      priority = "low";
    } else if (midPriorityButton.style.border.includes("solid")) {
      priority = "mid";
    } else if (highPriorityButton.style.border.includes("solid")) {
      priority = "high";
    }
    const todo = new Todos(todoTitleValue, todoDetailsValue, todoDateValue, priority);
    todos.push(todo);
    (0,_renderDOM_js__WEBPACK_IMPORTED_MODULE_0__.renderDOM)();
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
/* harmony export */   todoDeleteButton: () => (/* binding */ todoDeleteButton),
/* harmony export */   todoDetailsButton: () => (/* binding */ todoDetailsButton),
/* harmony export */   todoEditButton: () => (/* binding */ todoEditButton)
/* harmony export */ });
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");
/* harmony import */ var _form_edit_submit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-edit-submit.js */ "./src/form-edit-submit.js");


const content = document.getElementById("content");
const editTodoForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetailsModal = document.getElementById("display-details");
function todoDeleteButton() {
  content.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("delete")) {
      ev.target.parentElement.parentElement.parentElement.remove();
    }
  });
}
function todoEditButton() {
  content.addEventListener("click", function (ev) {
    for (let i = 0; i < _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
      const element = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i];
      if (ev.target.todoID === element.todoID && ev.target.classList.contains("edit")) {
        const resID = ev.target.todoID;
        editTodoForm.style.display = "block";
        darkOverlay.classList.add("dark-overlay2");
        const res = _storetodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.find(function (item) {
          return item.todoID === resID;
        });
        (0,_form_edit_submit_js__WEBPACK_IMPORTED_MODULE_1__.editTodos)(res);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _add_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-images.js */ "./src/add-images.js");
/* harmony import */ var _form_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-ui.js */ "./src/form-ui.js");
/* harmony import */ var _todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-buttons.js */ "./src/todo-buttons.js");
/* harmony import */ var _form_edit_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-edit-ui.js */ "./src/form-edit-ui.js");
/* harmony import */ var _storetodos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storetodos.js */ "./src/storetodos.js");







const addTodoButton = document.getElementById("add");
const addForm = document.getElementById("add-todo");
const editForm = document.getElementById("edit-todo");
const darkOverlay = document.getElementById("dark-overlay");
const displayTodoDetails = document.getElementById("display-details");
addTodoButton.addEventListener("click", showForm);
(0,_form_ui_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_add_images_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoDeleteButton)();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoEditButton)();
(0,_todo_buttons_js__WEBPACK_IMPORTED_MODULE_4__.todoDetailsButton)();
(0,_form_edit_ui_js__WEBPACK_IMPORTED_MODULE_5__.editFormUI)();
(0,_storetodos_js__WEBPACK_IMPORTED_MODULE_6__.saveTodosOnSubmit)();
document.addEventListener("click", (ev) => {
  if (!addForm.contains(ev.target) && ev.target.tagName !== "I") {
    addForm.style.display = "none";
    darkOverlay.classList.remove("dark-overlay");
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
  addForm.style.display = "block";
  darkOverlay.classList.add("dark-overlay");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQjtBQUNBO0FBQ21CO0FBQ0Q7QUFDaUQ7QUFDekM7QUFDSztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVztBQUNYLDBEQUFTO0FBQ1Qsa0VBQWdCO0FBQ2hCLGdFQUFjO0FBQ2QsbUVBQWlCO0FBQ2pCLDREQUFVO0FBQ1YsaUVBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGQtaW1hZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLWVkaXQtc3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLWVkaXQtdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlckRPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmV0b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1idXR0b25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGljb24gZnJvbSBcIi4vaW1hZ2VzL3Rhc2stbGlzdC5wbmdcIjtcbmltcG9ydCB0YWJJY29uIGZyb20gXCIuL2ltYWdlcy90YXNrLWxpc3QxLnBuZ1wiO1xuaW1wb3J0IHRvZG9CYWNrZ3JvdW5kIGZyb20gXCIuL2ltYWdlcy9mb3JtLWJhY2tncm91bmQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEltYWdlcygpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICBjb25zdCBjYXJkQm9keUFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC1ib2R5LmNhcmQtaW1nLW92ZXJsYXkuYWRkXCIpO1xuICBjb25zdCBjYXJkQm9keUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtYm9keS5jYXJkLWltZy1vdmVybGF5LmVkaXRcIik7XG4gIGNvbnN0IGNhcmRFbGVtZW50QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLmFkZFwiKTtcbiAgY29uc3QgY2FyZEVsZW1lbnRFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLmVkaXRcIik7XG4gIGNvbnN0IGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgZm9ybUJhY2tncm91bmRJbWFnZUFkZCA9IG5ldyBJbWFnZSgpO1xuICBmb3JtQmFja2dyb3VuZEltYWdlQWRkLnNyYyA9IHRvZG9CYWNrZ3JvdW5kO1xuICBmb3JtQmFja2dyb3VuZEltYWdlQWRkLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWltZ1wiKTtcbiAgZm9ybUJhY2tncm91bmRJbWFnZUFkZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tYmFja2dyb3VuZFwiKTtcbiAgY29uc3QgZm9ybUJhY2tncm91bmRJbWFnZUVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgZm9ybUJhY2tncm91bmRJbWFnZUVkaXQuc3JjID0gdG9kb0JhY2tncm91bmQ7XG4gIGZvcm1CYWNrZ3JvdW5kSW1hZ2VFZGl0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWltZ1wiKTtcbiAgZm9ybUJhY2tncm91bmRJbWFnZUVkaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWJhY2tncm91bmQtZWRpdFwiKTtcbiAgbGlua1RhZy5yZWwgPSBcImljb25cIjtcbiAgbGlua1RhZy5ocmVmID0gdGFiSWNvbjtcbiAgY29uc3QgaWNvbkhlYWRlciA9IG5ldyBJbWFnZSgpO1xuICBpY29uSGVhZGVyLnNyYyA9IGljb247XG4gIGljb25IZWFkZXIuYWx0ID0gXCJ0YXNrIGxpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGljb25IZWFkZXIpO1xuICBoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuICBjYXJkRWxlbWVudEFkZC5pbnNlcnRCZWZvcmUoZm9ybUJhY2tncm91bmRJbWFnZUFkZCwgY2FyZEJvZHlBZGQpO1xuICBjYXJkRWxlbWVudEVkaXQuaW5zZXJ0QmVmb3JlKGZvcm1CYWNrZ3JvdW5kSW1hZ2VFZGl0LCBjYXJkQm9keUVkaXQpO1xufVxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi9zdG9yZXRvZG9zLmpzXCI7XG5jb25zdCBlZGl0VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdG9kb1wiKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5mdW5jdGlvbiBlZGl0VG9kb3MoZWxlbWVudCkge1xuICBlZGl0VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzYXZlRWRpdCk7XG4gIGZ1bmN0aW9uIHNhdmVFZGl0KGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZUVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtZWRpdFwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkVkaXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWEtZWRpdFwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlRWRpdFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLWVkaXRcIikudmFsdWU7XG4gICAgY29uc3QgbG93UHJpb3JpdHlFZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctZWRpdFwiKTtcbiAgICBjb25zdCBtaWRQcmlvcml0eUVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1lZGl0XCIpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eUVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtZWRpdFwiKTtcbiAgICBlbGVtZW50LnRpdGxlID0gdGl0bGVFZGl0VmFsdWU7XG4gICAgZWxlbWVudC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWRpdFZhbHVlO1xuICAgIGVsZW1lbnQuZHVlRGF0ZSA9IGR1ZURhdGVFZGl0VmFsdWU7XG4gICAgaWYgKGxvd1ByaW9yaXR5RWRpdEJ1dHRvbi5zdHlsZS5ib3JkZXIuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgZWxlbWVudC5wcmlvcml0eSA9IFwibG93XCI7XG4gICAgfSBlbHNlIGlmIChtaWRQcmlvcml0eUVkaXRCdXR0b24uc3R5bGUuYm9yZGVyLmluY2x1ZGVzKFwic29saWRcIikpIHtcbiAgICAgIGVsZW1lbnQucHJpb3JpdHkgPSBcIm1pZFwiO1xuICAgIH0gZWxzZSBpZiAoaGlnaFByaW9yaXR5RWRpdEJ1dHRvbi5zdHlsZS5ib3JkZXIuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgZWxlbWVudC5wcmlvcml0eSA9IFwiaGlnaFwiO1xuICAgIH1cbiAgICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW92ZXJsYXkyXCIpO1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICB9XG59XG5leHBvcnQgeyBlZGl0VG9kb3MgfTtcbiIsImNvbnN0IGVkaXRUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdC10b2RvXCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdy1lZGl0XCIpO1xuY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZC1lZGl0XCIpO1xuY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLWVkaXRcIik7XG5cbmZ1bmN0aW9uIGVkaXRGb3JtVUkoKSB7XG4gIGVkaXRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgaWYgKGV2LnRhcmdldC50eXBlICE9PSBcImRhdGVcIiAmJiBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgIT09IFwiZWRpdC1mb3JtXCIpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImxvdy1lZGl0XCIpIHtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcIm1pZC1lZGl0XCIpIHtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImhpZ2gtZWRpdFwiKSB7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCB7IGVkaXRGb3JtVUkgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xuICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb1wiKTtcbiAgY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbiAgY29uc3QgbWlkUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFwiKTtcbiAgY29uc3QgaGlnaFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoXCIpO1xuICBhZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBpZiAoZXYudGFyZ2V0LnR5cGUgIT09IFwiZGF0ZVwiICYmIGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSAhPT0gXCJzdWJtaXQtZm9ybVwiKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJsb3dcIikge1xuICAgICAgICBsb3dQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgICBtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIGlmIChldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibWlkXCIpIHtcbiAgICAgICAgbWlkUHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIGhpZ2hQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAoZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImhpZ2hcIikge1xuICAgICAgICBoaWdoUHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgbG93UHJpb3JpdHlCdXR0b24uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIG1pZFByaW9yaXR5QnV0dG9uLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3N0b3JldG9kb3MuanNcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCB0b2RvUm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXJvd1wiKTtcbmZ1bmN0aW9uIHJlbmRlckRPTSgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRvZG9zW2ldO1xuXG4gICAgY29uc3QgbXlUb2RvUm93ID0gdG9kb1Jvdy5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gbXlUb2RvUm93LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKTtcbiAgICBjb25zdCB0b2RvRGV0YWlsc0J1dHRvbiA9IG15VG9kb1Jvdy5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHNcIik7XG4gICAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSBteVRvZG9Sb3cucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuICAgIHRvZG9EZXRhaWxzQnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9FZGl0QnV0dG9uLnRvZG9JRCA9IGVsZW1lbnQudG9kb0lEO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctc3VjY2Vzc1wiKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibWlkXCIpIHtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctZGFya1wiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctb3BhY2l0eS0xMFwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctb3BhY2l0eS0yNVwiKTtcbiAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYmctd2FybmluZ1wiKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLWRhcmtcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImJnLW9wYWNpdHktMTBcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLW9wYWNpdHktMjVcIik7XG4gICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImJnLWRhbmdlclwiKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChteVRvZG9Sb3cpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlckRPTSB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyRE9NIH0gZnJvbSBcIi4vcmVuZGVyRE9NLmpzXCI7XG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuY29uc3QgbG93UHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbmNvbnN0IG1pZFByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRcIik7XG5jb25zdCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5jb25zdCB0b2RvcyA9IFtdO1xuY2xhc3MgVG9kb3Mge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy50b2RvSUQgPSB0b2Rvcy5sZW5ndGggKyAxO1xuICB9XG59XG5cbmNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kb1wiKTtcbmZ1bmN0aW9uIHNhdmVUb2Rvc09uU3VibWl0KCkge1xuICBhZGRUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNhdmVUb2Rvcyk7XG5cbiAgZnVuY3Rpb24gc2F2ZVRvZG9zKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvVGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0RldGFpbHNWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dGFyZWFcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb0RhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHk7XG4gICAgaWYgKGxvd1ByaW9yaXR5QnV0dG9uLnN0eWxlLmJvcmRlci5pbmNsdWRlcyhcInNvbGlkXCIpKSB7XG4gICAgICBwcmlvcml0eSA9IFwibG93XCI7XG4gICAgfSBlbHNlIGlmIChtaWRQcmlvcml0eUJ1dHRvbi5zdHlsZS5ib3JkZXIuaW5jbHVkZXMoXCJzb2xpZFwiKSkge1xuICAgICAgcHJpb3JpdHkgPSBcIm1pZFwiO1xuICAgIH0gZWxzZSBpZiAoaGlnaFByaW9yaXR5QnV0dG9uLnN0eWxlLmJvcmRlci5pbmNsdWRlcyhcInNvbGlkXCIpKSB7XG4gICAgICBwcmlvcml0eSA9IFwiaGlnaFwiO1xuICAgIH1cbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG9zKHRvZG9UaXRsZVZhbHVlLCB0b2RvRGV0YWlsc1ZhbHVlLCB0b2RvRGF0ZVZhbHVlLCBwcmlvcml0eSk7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICByZW5kZXJET00oKTtcbiAgICBhZGRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheVwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzYXZlVG9kb3NPblN1Ym1pdCwgdG9kb3MgfTtcbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vc3RvcmV0b2Rvcy5qc1wiO1xuaW1wb3J0IHsgZWRpdFRvZG9zLCBzYXZlVG9kb3NPbkVkaXQgfSBmcm9tIFwiLi9mb3JtLWVkaXQtc3VibWl0LmpzXCI7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgZWRpdFRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LXRvZG9cIik7XG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuY29uc3QgZGlzcGxheVRvZG9EZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktZGV0YWlsc1wiKTtcbmZ1bmN0aW9uIHRvZG9EZWxldGVCdXR0b24oKSB7XG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgIGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4gICAgICBldi50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHRvZG9FZGl0QnV0dG9uKCkge1xuICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdG9kb3NbaV07XG4gICAgICBpZiAoZXYudGFyZ2V0LnRvZG9JRCA9PT0gZWxlbWVudC50b2RvSUQgJiYgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRcIikpIHtcbiAgICAgICAgY29uc3QgcmVzSUQgPSBldi50YXJnZXQudG9kb0lEO1xuICAgICAgICBlZGl0VG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRhcmstb3ZlcmxheTJcIik7XG4gICAgICAgIGNvbnN0IHJlcyA9IHRvZG9zLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS50b2RvSUQgPT09IHJlc0lEO1xuICAgICAgICB9KTtcbiAgICAgICAgZWRpdFRvZG9zKHJlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiB0b2RvRGV0YWlsc0J1dHRvbigpIHtcbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRvZG9zW2ldO1xuICAgICAgaWYgKGV2LnRhcmdldC50b2RvSUQgPT09IGVsZW1lbnQudG9kb0lEICYmIGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXRhaWxzXCIpKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlUb2RvVGl0bGUgPSBkaXNwbGF5VG9kb0RldGFpbHNNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdG9kby10aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheVRvZG9EZXRhaWxzID0gZGlzcGxheVRvZG9EZXRhaWxzTW9kYWwucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRvZG8tZGV0YWlsc1wiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheVRvZG9Qcmlvcml0eSA9IGRpc3BsYXlUb2RvRGV0YWlsc01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS10b2RvLXByaW9yaXR5XCIpO1xuICAgICAgICBkaXNwbGF5VG9kb1RpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICAgICAgZGlzcGxheVRvZG9EZXRhaWxzLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMT1dcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZnctYm9sZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcIm1pZFwiKSB7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTUlEXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrb3JhbmdlXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZnctYm9sZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgIGRpc3BsYXlUb2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhJR0hcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgZGlzcGxheVRvZG9Qcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU1LCAwLCAwLCAwLjg4MylcIjtcbiAgICAgICAgICBkaXNwbGF5VG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJmdy1ib2xkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlUb2RvRGV0YWlsc01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW92ZXJsYXkzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHRvZG9EZWxldGVCdXR0b24sIHRvZG9FZGl0QnV0dG9uLCB0b2RvRGV0YWlsc0J1dHRvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFkZEltYWdlcyBmcm9tIFwiLi9hZGQtaW1hZ2VzLmpzXCI7XG5pbXBvcnQgZ2V0Rm9ybURhdGEgZnJvbSBcIi4vZm9ybS11aS5qc1wiO1xuaW1wb3J0IHsgdG9kb0RlbGV0ZUJ1dHRvbiwgdG9kb0VkaXRCdXR0b24sIHRvZG9EZXRhaWxzQnV0dG9uIH0gZnJvbSBcIi4vdG9kby1idXR0b25zLmpzXCI7XG5pbXBvcnQgeyBlZGl0Rm9ybVVJIH0gZnJvbSBcIi4vZm9ybS1lZGl0LXVpLmpzXCI7XG5pbXBvcnQgeyBzYXZlVG9kb3NPblN1Ym1pdCB9IGZyb20gXCIuL3N0b3JldG9kb3MuanNcIjtcbmNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFwiKTtcbmNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvXCIpO1xuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtdG9kb1wiKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5jb25zdCBkaXNwbGF5VG9kb0RldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktZGV0YWlsc1wiKTtcbmFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcbmdldEZvcm1EYXRhKCk7XG5hZGRJbWFnZXMoKTtcbnRvZG9EZWxldGVCdXR0b24oKTtcbnRvZG9FZGl0QnV0dG9uKCk7XG50b2RvRGV0YWlsc0J1dHRvbigpO1xuZWRpdEZvcm1VSSgpO1xuc2F2ZVRvZG9zT25TdWJtaXQoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKCFhZGRGb3JtLmNvbnRhaW5zKGV2LnRhcmdldCkgJiYgZXYudGFyZ2V0LnRhZ05hbWUgIT09IFwiSVwiKSB7XG4gICAgYWRkRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheVwiKTtcbiAgfVxufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGlmICghZWRpdEZvcm0uY29udGFpbnMoZXYudGFyZ2V0KSAmJiAhZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXRcIikpIHtcbiAgICBlZGl0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTJcIik7XG4gIH1cbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAoIWRpc3BsYXlUb2RvRGV0YWlscy5jb250YWlucyhldi50YXJnZXQpICYmICFldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGV0YWlsc1wiKSkge1xuICAgIGRpc3BsYXlUb2RvRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstb3ZlcmxheTNcIik7XG4gIH1cbn0pO1xuZnVuY3Rpb24gc2hvd0Zvcm0oZXYpIHtcbiAgYWRkRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiZGFyay1vdmVybGF5XCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9