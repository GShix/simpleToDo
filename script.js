
var tasks= []

function addTask(){
    var taskInput = document.querySelector("#todoInput")
    var taskInputValue = taskInput.value;

    if(taskInputValue.trim() !==''){
        tasks.push({
            todo: taskInputValue,
            completed: false
        })
        taskInput.value= "";
        updateTodoList()
    }

}

function updateTodoList(){
    const todoList = document.querySelector("#todoList")

    //clear existing list
    todoList.innerHTML =""

    tasks.forEach((task)=>{
        var ListItem = document.createElement("li")
        ListItem.textContent= task.todo
        ListItem.className= task.completed ? 'completed': ''
        ListItem.onclick=()=>{
            toogleCompleted(task)
        }
        todoList.appendChild(ListItem)
    })
    //function to calculate todos
    updateAggregrate()
}
function toogleCompleted(task){
    task.completed = ! task.completed
    updateTodoList()
}

function updateAggregrate(){
    var totalTasks = document.querySelector("#totalTasks")
    var completedTasks = document.querySelector("#completedTasks")
    var total = tasks.length
    var completed = tasks.reduce((acc, task)=>{
        return task.completed ? acc+1: acc
    },0)
    totalTasks.textContent = total 
    completedTasks.textContent = completed 
}

function filterTasks(){
    var searchTask = document.querySelector("#searchTask")
    var searchValue = searchTask.value.toLowerCase();
    var filteredTasks = tasks.filter((task)=>{
        return task.todo.toLowerCase().includes(searchValue)
    })

    //updateTodoList with filteredTasks
    updateTodoWithFiltered(filteredTasks)
}

function updateTodoWithFiltered(filteredTasks){
    var todoList = document.querySelector("#todoList"
    )
    todoList.innerHTML =""

    filteredTasks.forEach((task)=>{
        var ListItem = document.createElement("li")
        ListItem.textContent= task.todo
        ListItem.className= task.completed ? 'completed': ''
        ListItem.onclick=()=>{
            toogleCompleted(task)
        }
        todoList.appendChild(ListItem)
    })
    //function to calculate todos
    updateAggregrate()
}