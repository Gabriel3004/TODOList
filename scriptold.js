/*

//Push input value in array

const taskArray = [];

function pushTaskInArray() {
  inputValue = document.getElementById("enter").value;
  taskArray.push(inputValue);
  document.getElementById("enter").value = "";
  console.log("function", taskArray);
}

const enterBtn = document.getElementById("plus");

enterBtn.addEventListener("click", () => {
  pushTaskInArray();
  document.getElementById("tasksInput").innerHTML = displayTasks(taskArray);
  deleteListener();
});

//Display array items on screen

function displayTasks(data) {
  let items = "";
  for (let i = 0; i < data.length; i++) {
    items += `<div class="tasks">
                <input id="check" type="checkbox">
                <p>${taskArray[i]}</p>
                <button id="edit"><i class="fa fa-pencil"></i></button>
                <button id="delete"><i class="fa fa-trash"></i></button>
              </div>`;
  }
  return items;
}

//Delete Button

function deleteListener() {
  const deleteBtn = document.querySelectorAll("#delete");
  deleteBtn.forEach((element, index) => {
    element.addEventListener("click", () => {
      taskArray.splice(index, 1);
      document.getElementById("tasksInput").innerHTML = displayTasks(taskArray);
    });
  });
}


*/
