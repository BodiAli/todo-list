import icon from "./images/task-list.png";
import tabIcon from "./images/task-list1.png";
import todoBackground from "./images/form-background.jpg";

export default function addImages() {
  const header = document.querySelector("header");
  const head = document.querySelector("head");
  const cardBodyAdd = document.querySelector(".card-body.card-img-overlay.add");
  const cardBodyEdit = document.querySelector(".card-body.card-img-overlay.edit");
  const cardBodyProject = document.querySelector(".card-body.card-img-overlay.add-in-project");
  const cardElementAdd = document.querySelector(".card.add");
  const cardElementEdit = document.querySelector(".card.edit");
  const cardElementProject = document.querySelector(".card.add-in-project");
  const collapseButton = document.querySelector("#collapse");
  const logoDiv = document.querySelector("#logo");
  const linkTag = document.createElement("link");
  const formBackgroundImageAdd = new Image();
  formBackgroundImageAdd.src = todoBackground;
  formBackgroundImageAdd.classList.add("card-img");
  formBackgroundImageAdd.setAttribute("id", "form-background");
  const formBackgroundImageEdit = new Image();
  formBackgroundImageEdit.src = todoBackground;
  formBackgroundImageEdit.classList.add("card-img");
  formBackgroundImageEdit.setAttribute("id", "form-background-edit");
  const formBackgroundImageProject = new Image();
  formBackgroundImageProject.src = todoBackground;
  formBackgroundImageProject.classList.add("card-img");
  formBackgroundImageProject.setAttribute("id", "form-background-project");
  linkTag.rel = "icon";
  linkTag.href = tabIcon;
  const iconHeader = new Image();
  iconHeader.src = icon;
  iconHeader.alt = "task list";
  logoDiv.appendChild(iconHeader);
  head.appendChild(linkTag);
  cardElementAdd.insertBefore(formBackgroundImageAdd, cardBodyAdd);
  cardElementEdit.insertBefore(formBackgroundImageEdit, cardBodyEdit);
  cardElementProject.insertBefore(formBackgroundImageProject, cardBodyProject);
}
