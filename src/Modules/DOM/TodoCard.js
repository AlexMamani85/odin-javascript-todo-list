function TodoCard(todo) {

    let element = document.createElement('div');
    let title = document.createElement('div');
    let description = document.createElement('div');
    let dueDate = document.createElement('input');
    let priority = document.createElement('div');
    let completedLabel = document.createElement('label');
    let completedInput = document.createElement('input');
    let completedDiv = document.createElement('div');
    
    
    title.innerHTML = todo.title;
    description.innerHTML = todo.description;
    dueDate.type = 'date';
    dueDate.value = todo.dueDate;
    priority.innerHTML = todo.priority;
    completedLabel.innerHTML = 'Completed';
    completedInput.type = 'checkbox';
    completedInput.checked = todo.completed;
    
    element.style = `
        border: 1px solid black;
        padding: 20px;    
        font-size: 1.3rem;    
    `

    title.style = `
        text-align: center;
        background-color: lightblue;
        color: black;
        weight: bold;
        font-size: 1.5rem;
        border-radius: 10px;
    `

    description.style = `
        padding: 10px 0;
        margin: 10px 0;
        background-color: lightgreen;
        border-radius: 10px;
    `
    completedInput.style = `
        margin: 20px;
    `

    dueDate.style = `
        margin:  0 10px;
        padding: 10px 0;
        margin: 10px 0;
        font-size: 1.2rem;
    `
    let lowPriorityStyle = `
        background-color: blue;
        color: white;
    `
    let mediumPriorityStyle = `
        background-color: yellow;
        color: black;
    `
    let highPriorityStyle = `
        background-color: red;
        color: white;
    `
    if(todo.priority == 'low'){
        priority.style = lowPriorityStyle
    } else if(todo.priority == 'medium'){
        priority.style = mediumPriorityStyle
    } else if(todo.priority == 'high'){
        priority.style = highPriorityStyle
    } 
    priority.style.margin='10px 0';
    priority.style.textAlign='center';
    priority.style.padding='10px 0';
    priority.style.borderRadius='10px';
    

    element.appendChild(title);
    element.appendChild(description);
    element.appendChild(dueDate);
    element.appendChild(priority);    
    completedDiv.appendChild(completedInput);
    completedDiv.appendChild(completedLabel);
    element.appendChild(completedDiv);

    return element;
}

export default TodoCard;
