import "./reset.css";
import "./style.css";
import icon from "./images/task-list.png";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const header = document.querySelector("header");
const iconHeader = new Image();
iconHeader.src = icon;
iconHeader.alt = "task list";
header.appendChild(iconHeader);
