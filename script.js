const input = document.getElementById("task");
const listContainer = document.getElementById("list-container");

const addTask = function () {
  if (input.value === "") {
    alert("Enter a valid task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  input.value = "";
};

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showData = function () {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData();
