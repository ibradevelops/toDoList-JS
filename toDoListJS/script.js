const btn = document.querySelector(".btn");
const ul = document.querySelector(".second-section");
const inputList = document.querySelector(".input-list");

const addItem = function () {
  const itemHolder = inputList.value;
  if (itemHolder) {
    inputList.value = "";
    const part = document.createElement("span");
    const list = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const counter = document.createElement("p");
    counter.setAttribute("class", "counter-list");
    part.appendChild(counter);
    ul.appendChild(part);
    part.setAttribute("class", "list-part");
    part.appendChild(list);
    part.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "delete-btn");
    list.setAttribute("class", "list");
    list.textContent = itemHolder;

    deleteBtn.addEventListener("click", function () {
      ul.removeChild(part);
      //
    });
    list.addEventListener("click", function () {
      list.style.textDecoration = "line-through";
    });
    counter.textContent = "🔸";
  }

  if (ul.childElementCount > 8) {
    alert("Maksimalan broj Itema je 8!");
    ul.replaceChildren();
  }
};

btn.addEventListener("click", addItem);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

inputList.addEventListener("input", function () {
  inputList.value = inputList.value.slice(0, 20);
});
