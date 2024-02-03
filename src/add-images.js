import icon from "./images/task-list.png";
import tabIcon from "./images/task-list1.png";
import todoBackground from "./images/form-background.jpg";

export default function addImages() {
  const header = document.querySelector("header");
  const head = document.querySelector("head");
  const linkTag = document.createElement("link");
  linkTag.rel = "icon";
  linkTag.href = tabIcon;
  const iconHeader = new Image();
  iconHeader.src = icon;
  iconHeader.alt = "task list";
  header.appendChild(iconHeader);
  head.appendChild(linkTag);
}
