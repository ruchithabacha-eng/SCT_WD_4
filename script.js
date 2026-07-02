const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

addBtn.onclick = function () {

    let task = taskInput.value;
    let date = taskDate.value;
    let time = taskTime.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
        <h3>${task}</h3>
        <p>Date: ${date} | Time: ${time}</p>

        <div class="buttons">
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(div);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";

    // Complete Task
    div.querySelector(".complete").onclick = function () {
        div.classList.toggle("completed");
    };

    // Edit Task
    div.querySelector(".edit").onclick = function () {

        let heading = div.querySelector("h3");

        let newTask = prompt("Edit Task", heading.innerText);

        if (newTask !== null && newTask !== "") {
            heading.innerText = newTask;
        }
    };

    // Delete Task
    div.querySelector(".delete").onclick = function () {
        div.remove();
    };

};