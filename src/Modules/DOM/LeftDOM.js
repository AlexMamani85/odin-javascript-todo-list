function leftDOM(todosAlone, projects,setProjectOrTodo) {

    let element = document.createElement('div');
    let home = document.createElement('button');


    element.style = `
        height:     100%;
        background-color: blue;
        padding: 10px;
    `
    let buttonStyle=`
        display: block;
        margin: 10px auto;
        background-color: red;
        color:white;
        font-size: 20px;
        align-items: center;
        height: 3.5rem;
        align-self: center;
        border:none;
        border-radius: 10px;
        letter-spacing: 2px;
        padding: 20px;
`
    home.style = buttonStyle;
    home.style.backgroundColor='green'

    home.innerHTML='Home'
    home.addEventListener('click', () => {
        setProjectOrTodo(todosAlone);
        console.log(todosAlone)
    });
    element.appendChild(home);

    projects.forEach(project => {
        let projectButton = document.createElement('button');
        projectButton.style = buttonStyle
        projectButton.innerHTML = project.title;
        projectButton.addEventListener('click', () => {
            setProjectOrTodo(project);
            console.log(project)
        });
        element.appendChild(projectButton);
    });

    return element;
}

export default leftDOM;
