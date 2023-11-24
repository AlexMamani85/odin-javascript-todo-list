function leftDOM(projects) {

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
        height: 2rem;
        border:none;
        border-radius: 10px;
`
    home.style = buttonStyle;
    home.style.backgroundColor='green'

    home.innerHTML='home'
    element.appendChild(home);

    projects.forEach(project => {
        let projectButton = document.createElement('button');
        projectButton.style = buttonStyle
        projectButton.innerHTML = project.title;
        console.log(project.title)
        element.appendChild(projectButton);
    });

    return element;
}

export default leftDOM;
