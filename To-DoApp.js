
class MyDoList {

    constructor(name, date) {
        this._name = name;
        this._date = date;
        this._completed = false;

    }
    get getCompleted() {
        return this._completed;
    }

    getCompleted() {
        this._completed = !this._completed;

    }

    static createElement = (item) => {
        return `<li class="activeTask task"> 
                            <span>${item._name}</span> - 
                            <span>${item._date}</span> -
                            <span>${item._completed}</span> -
                            
                        </li>`;
        /* <button class="deleteBtn" onclick="deleteItem(event)">Delete</button> | */
    }

}

/*``-----Array to store objects----------*/

//getting references to buttons
const add = document.getElementById('input1B');
const refresh = document.getElementById('refresh');
const save = document.getElementById('save');
const taskList = document.getElementById("taskList");
const deleteButton = document.getElementById("deleteButton");

//getting reference to div where content is displayed
const entrypoint = document.getElementById('entry');

/* --- functions --- */

//Creates object using values of input fields
function adding() {

    const mytask = new MyDoList(inputA.value, inputB.value);

    let todo = localStorage.getItem("todo");

    if (todo === null) {
        task = [];
    } else {
        task = JSON.parse(todo);
    }

    task.push(mytask);

    taskList.innerHTML += MyDoList.createElement(mytask);
    inputA.value = "";
    inputB.value = "";

    localStorage.setItem("todo", JSON.stringify(task));
    //displayTodo();

    console.log(task)
    console.log(localStorage.getItem("todo"))

}

//---------------------------------------
//      Delete Functionality
//--------------------------------------

function deleteItem(ind) {

    let todo = localStorage.getItem("todo");
    task = JSON.parse(todo);

    // Deleting from task array
    task.splice(ind, 1);

    // Delete from local Storage
    localStorage.setItem("todo", JSON.stringify(task));

    // Delete from the DOM (website)
    refreshDOM(task);    

    /*  
        console.log(task)
        console.log(localStorage.getItem("todo"))
    */

}

//---------------------------------------
//      Update Functionality
//--------------------------------------

function editItem(int) {
    let todo = localStorage.getItem("todo");
    task = JSON.parse(todo);
    task[int] = input3.value;
    input3.value = "";
    localStorage.setItem("todo", JSON.stringify(task));

}

//---------------------------------------
//      Sort Functionality
//--------------------------------------

function sortItem() {
    let todo = localStorage.getItem("todo");
    task = JSON.parse(todo);
    task.sort((a, b) => (a._name > b._name) ? 1 : -1); 
    localStorage.setItem("todo", JSON.stringify(task));
    refreshDOM(task);
}

function AddingDate() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        task = [];
    } else {
        task = JSON.parse(todo);
    }
    let date = document.getElementById("input6").value;
    let localDate = new Date(date);
    task.push(localDate);
    localStorage.setItem("todo", JSON.stringify(task));
    //console.log(localDate);

}

//---------------------------------------
//      Delete Functionality
//--------------------------------------


//Display FUnction Old 
function Display() {
    let todo = localStorage.getItem("todo");
    task = JSON.parse(todo);

    let lt = task.length;
    let text = "<ul>";
    for (let i = 0; i < lt; i++) {
        text += "<li>" + task[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("ramsp").innerHTML = text;
}

//---------------------------------------
//      Clear Functionality
//--------------------------------------


function ClearItem() {
    let todo = localStorage.getItem("todo");
    task = JSON.parse(todo);
    task = [];
    localStorage.setItem("todo", JSON.stringify(task));


}


// ----- Adds HTML elements for item in List ----- //

function refreshDOM(taskArray) {

    // Clear all items from taskList UL element
    taskList.innerHTML = "";

    //loop through remaing tasks in array
    taskArray.forEach(todoItem => {
        
        // Add new DOM elements to UL element
        taskList.innerHTML += MyDoList.createElement(todoItem);

    });
}

//--------------------------------------------------------------------//
//                      Events Functionality
//--------------------------------------------------------------------//

// When you click on delete button
deleteButton.addEventListener("click", () => {

    // get value of input
    let index = document.getElementById("input2")
    index = index.value;

    // delete with index given in input field
    deleteItem(index);

})

/*
document.addEventListener("click",  (event) => {

    console.log(event.target.parentElement)
})
*/