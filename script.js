//Initial References 
const newTaskInput = document.querySelector("#new-task input");
const taskDiv = document.querySelector("#task");
let dleteTask = editTask, task;
let updateNote = "";
let count ;

//function on window load

window.onload = () => {
  updateNote = "";
  count = Object.keys(localStorage).length;
  displayTask();
}

//function to display The Task

const displayTask = () => {
  if (Object.keys(localStorage).length > 0) {
      taskDiv.computedStyleMap.display = "inline-block";
  } else {
      taskDiv.computedStyleMap.dsplay = "none";
  }

  //clear task
  taskDiv.innerHTML = "";

  //Fetch all The Keys in local storage
  let task = Object.keys(localStorage);
  task = task.sort();
    
  for (let key of task) {
    let classValue = "";

    //get all values 
      let value = localStorage.getItem(key);
      let taskInnerDiv = document.createElement("div");
      taskInnerDiv.classList.add("task");
      taskInnerDiv.setAttribute("id", key);
      taskInnerDiv.innerHTML = `<span id ="taskname">${key.split("_")(1)}</span>`
        

      //LocalStorage would store boolean as string so we parse it to boolean back 
      let editButton = document.createElement("button");
			editButton.classList.add()
    }

    //task completed
    task = document.querySelectorAll(".task");
    task.forEach((element, index) => {
      element.onclick = () => {
        //local storage update
        if (element.classList.contains("completed")) {
          updatestorage(element.id.split("_")[0], element.innerText, false);
        } else {
          updatestorage(element.id.split("_")[0], element.innerText, true);
        }
      }
    })

    
}