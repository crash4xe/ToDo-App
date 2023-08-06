const inputText = document.getElementById('input-text');
const taskList = document.getElementById('task-list');
const addTask = document.getElementById('add');

addTask.addEventListener('click', AddTask);

function AddTask()
{
    if(inputText.value===''){
        return;
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        taskList.appendChild(li);

        let close = document.createElement('span');
        close.innerHTML = '\u00d7';
        li.appendChild(close);
        SaveData();

        inputText.value = '';
    }
}

taskList.addEventListener('click', function(event){
    if(event.target.tagName === 'LI')
    {
        event.target.classList.toggle('checked');
        SaveData();
    } else if(event.target.tagName === 'SPAN')
    {
        event.target.parentElement.remove();
        SaveData();
    }
});

function SaveData(){
    localStorage.setItem('data', taskList.innerHTML);
}

function GetData(){
    taskList.innerHTML = localStorage.getItem('data');
}

GetData();