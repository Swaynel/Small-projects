// Create input field


const InputDiv = document.createElement('input');
InputDiv.placeholder = 'Enter your task here...';
InputDiv.style.position = 'fixed';
InputDiv.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
    else if (e.key === 'Escape') {
        deleteBtn.click();
    }
});
InputDiv.style.backgroundColor = 'white';
InputDiv.style.flex = '1';
InputDiv.style.top = '20px';
InputDiv.style.left = '20px';
InputDiv.style.width = '200px';
InputDiv.style.padding = '5px';
InputDiv.style.border = '1px solid #007bff';
document.body.appendChild(InputDiv);


// Create task list container


const newDivList = document.createElement('li');
newDivList.style.display = 'flex';
newDivList.style.flexDirection = 'column';
newDivList.style.backgroundColor = 'grey';
newDivList.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
newDivList.style.border = 'black solid 1px';
newDivList.style.borderRadius = '5px';
newDivList.style.position = 'fixed';
newDivList.style.alignItems = 'center';
newDivList.style.width = '200px';
newDivList.style.margin = '0';
newDivList.style.minHeight = '20px';
newDivList.style.maxHeight = '200px';
newDivList.style.overflowY = 'auto';
newDivList.style.overflowX = 'hidden';
newDivList.style.height = 'auto';
newDivList.style.top = '120px';
newDivList.style.left = '20px';
newDivList.style.padding = '0';
newDivList.style.margin = '0';
newDivList.style.listStyle = 'disc';
document.body.appendChild(newDivList);


// Create Submit button and function


const submitBtn = document.createElement('button');
submitBtn.onclick = function () {
    if (InputDiv.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = InputDiv.value;
        taskItem.onclick = () => {
            taskItem.style.textDecoration = 
            taskItem.style.textDecoration === 'line-through' ? 'none' : 'line-through';
          };
      
        taskItem.style.cursor = 'pointer';
        taskItem.style.padding = '5px 0';
        taskItem.style.width = '70%';
        newDivList.appendChild(taskItem);
        InputDiv.value = '';
        // Create Delete button for each task item
const deleteTaskBtn = document.createElement('button');
deleteTaskBtn.textContent = '✖';
deleteTaskBtn.style.marginLeft = '10px';
deleteTaskBtn.style.backgroundColor = 'transparent';
deleteTaskBtn.style.border = 'none';
deleteTaskBtn.style.cursor = 'pointer';
deleteTaskBtn.onclick = () => {
  newDivList.removeChild(taskItem);
};
taskItem.appendChild(deleteTaskBtn);

        // Add hover effect to task items
        taskItem.onmouseover = function () {
            taskItem.style.backgroundColor = '#f0f0f0';
        };
    }
};
submitBtn.textContent = 'Submit';
submitBtn.style.position = 'fixed';
submitBtn.style.top = '60px';
submitBtn.style.left = '20px';
submitBtn.style.cursor = 'pointer';
submitBtn.style.backgroundColor = '#007bff';
submitBtn.style.color = 'white';
submitBtn.style.border = 'solid 1px #007bff';
submitBtn.style.borderRadius = '5px';
submitBtn.style.fontSize = '11px';
submitBtn.style.padding = '5px 10px';
document.body.appendChild(submitBtn);


// Create Delete button and function


const deleteBtn = document.createElement('button');

deleteBtn.onclick = function () {
    newDivList.innerHTML = '';
};

deleteBtn.textContent = 'Delete All';
deleteBtn.style.position = 'fixed';
deleteBtn.style.top = '60px';
deleteBtn.style.left = '100px';
deleteBtn.style.cursor = 'pointer';
deleteBtn.style.backgroundColor = '#dc3545';
deleteBtn.style.color = 'white';
deleteBtn.style.border = 'solid 1px #dc3545';
deleteBtn.style.borderRadius = '5px';
deleteBtn.style.fontSize = '11px';
deleteBtn.style.padding = '5px 10px';
document.body.appendChild(deleteBtn);

