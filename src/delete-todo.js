import { todos } from "./storetodos.js";
import { renderDOM } from "./renderDOM.js";
function deleteTodo(todoID) {
  const index = todos.findIndex(function (value) {
    return value.todoID === todoID;
  });
  todos.splice(index, 1);
  renderDOM();
}
export { deleteTodo };
