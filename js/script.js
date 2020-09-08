

//define UI Element
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');


//Define Event lisenter
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask)

//Remove Task
function addTask(e){
    if(taskInput.value === ' '){
        alert("Are you sure ?");
    }else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ''));
        taskList.appendChild(li);
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.appendChild(link);
        taskInput.value = ' ';
    }
    e.preventDefault();
}


//Remove Task
function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            //console.log(ele);
        }
    }
}

//Clear Task
function clearTask(e){
    taskList.innerHTML = ' ';
}
