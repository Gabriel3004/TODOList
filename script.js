const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

window.onload = function () {
  displayTasks();
};

document.querySelector("#plus").addEventListener("click", () => {
  const item = document.querySelector("#enter");
  createItem(item);
});

function showMessage() {
  const message = document.querySelector("#message");
  message.style.display = "block";
}

function createItem(item) {
  if (item.value !== "") {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    document.getElementById("enter").value = "";
    location.reload();
  } else {
    showMessage();
  }
}

function displayTasks() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="tasks">
                <input class="checkedDone" type="checkbox">
                <textarea id="taskText" disabled>${itemsArray[i]}</textarea>
                <div class="edit-buttons">
                  <button class="edit"><i class="fa fa-pencil"></i></button>
                  <button class="delete"><i class="fa fa-trash"></i></button>
                </div>
                <div class="update-buttons">
                  <button id="save">Save</button>
                  <button id="cancel">Cancel</button>
                </div>
              </div>`;
  }
  document.querySelector(".tasksInput").innerHTML = items;
  activateDeleteListener();
  activateEditListener();
  activateSaveListener();
  activateCancelListener();
  activateClearAllListener();
  addEventListenerDone();
}

function activateDeleteListener() {
  let deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((dbElement, index) => {
    dbElement.addEventListener("click", () => {
      deleteBotton(index);
    });
  });
}

function deleteBotton(index) {
  itemsArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function activateEditListener() {
  const editBtn = document.querySelectorAll(".edit");
  const updateController = document.querySelectorAll(".update-buttons");
  const inputs = document.querySelectorAll("#taskText");
  editBtn.forEach((ebElement, index) => {
    ebElement.addEventListener("click", () => {
      updateController[index].style.display = "block";
      inputs[index].removeAttribute("disabled");
    });
  });
}

function activateSaveListener() {
  const saveBtn = document.querySelectorAll("#save");
  const inputs = document.querySelectorAll("#taskText");
  saveBtn.forEach((sbElement, index) => {
    sbElement.addEventListener("click", () => {
      updateItem(inputs[index].value, index);
    });
  });
}

function updateItem(text, index) {
  itemsArray[index] = text;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function activateCancelListener() {
  const cancelBtn = document.querySelectorAll("#cancel");
  const updateController = document.querySelectorAll(".update-buttons");
  const inputs = document.querySelectorAll("#taskText");
  cancelBtn.forEach((cbElement, index) => {
    cbElement.addEventListener("click", () => {
      updateController[index].style.display = "none";
      inputs[index].disabled = true;
    });
  });
}

function activateClearAllListener() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", () => {
    deleteAllItems();
  });
}

function deleteAllItems() {
  itemsArray.length = 0;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function showClearAllButton() {
  if (itemsArray.length > 1) {
    const clearBtn = document.querySelector("#clear");
    clearBtn.style.display = "block";
  }
}
showClearAllButton();

function addEventListenerDone() {
  const done = document.querySelectorAll(".checkedDone");
  done.forEach((chbElement, index) => {
    chbElement.addEventListener("click", () => {
      activateDone(chbElement, index);
      saveChacked(doneCheck, index);
    });
  });
}

function saveChacked(checkedCheckBox, index) {
  localStorage.setItem("checkedCheckBox", checkedCheckBox[index].checked);
}

function activateDone(doneCheck, index) {
  const textArea = document.querySelectorAll("textarea");
  if (doneCheck.checked == true) {
    textArea[index].style.textDecoration = "2px line-through";
  } else {
    textArea[index].style.textDecoration = "none";
  }
}
