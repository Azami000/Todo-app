const todoArray = ["To do", "In progress", "Stuck", "Done"];
const boards = document.getElementById("boards");
const modal = document.querySelector(".modal");
const button = document.getElementById("add-button");
const modalContainer = document.querySelector(".modalContainer");
const button1 = document.querySelector(".button1");
const title = document.getElementById("title");
const descp = document.querySelector(".desc");
const newstatus = document.getElementById("status");
const priority = document.getElementById("priority");

todoArray.forEach((item) => {
  boards.innerHTML += `<div class="board">
          <div class="boardHeader">
            <div id="title">${item}</div>
            <span class="count">1</span>
          </div>
          <button id="add-button">+ Add card</button>`;
});

button.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

window.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
button1.addEventListener("click", () => {});
console.log("ssss");
