const   addBtn = document.getElementById("AddBtn"),
        clearBtn = document.getElementById("ClearBtn"), 
        clearAllBtn = document.getElementById("ClearAllBtn"), 
        inText = document.getElementById("inputTodo"),
        todoList = document.getElementById("todoList");

let tasks = [];

addBtn.addEventListener("click",AddTask);
clearBtn.addEventListener("click", RemoveCompleted);
clearAllBtn.addEventListener("click", RemoveAll);

function AddTask(){
    if(inText.value.trim() != ""){
        tasks.push({text:inText.value});
        inText.value = "";
        DisplayTasks();
    }
}

function RemoveCompleted() {
    tasks = tasks.filter((task)=> !task.checked);
    DisplayTasks();
}

function RemoveAll(){
    tasks.length = 0;
    DisplayTasks();
}

function DisplayTasks() {
    if(tasks.length == 0){
        todoList.innerHTML = "<h3>Nothing new!</h3>";
    }else{
        todoList.innerHTML = "";
    }

    tasks.forEach((task, index)=>{
        const li = document.createElement("li");
        const check = document.createElement("input");
        const label = document.createElement("label");
        
        label.setAttribute("for","todo"+index);
        label.textContent = task.text;
        
        check.type = "checkbox";
        check.id = "todo"+index;
        check.checked = task.checked ? true: false;

        check.addEventListener("change", ()=>toogleTodo(index));
        
        li.appendChild(check);
        li.appendChild(label);

        todoList.appendChild(li);
    });
}

function toogleTodo(id){
    tasks[id].checked = !tasks[id].checked;
}

