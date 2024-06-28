import '../css/styleAddProject.css'
import  {ShowDialogTodo , getTodoFromStorage} from'./addTodo.js'
import {removeAllEventListeners} from '../index.js'
import imgAddTodo from '../assets/addTodo.png'
const addIntoDetails = document.querySelector('details')
const btnCloseAddProject = document.querySelector('.btnClose')
const allForm = document.querySelectorAll('form')
const btnOpenAddProjectDialog = document.querySelector('.addProject')
const dialogAddProject = document.querySelector('.dialogAddProject')


//recuperer les project cree et stocker dans le localStorage
//ensuite on re affiche les project  a leurs places

const projectInStorage = localStorage.getItem("project")?.toString()

let projects = []

if(projectInStorage){

    projects  = JSON.parse(projectInStorage)
    projects.forEach((project)=>{
        addProjectIntoDetails(project)
    })
}


function resetFormDialog(fo,dia){
    fo.reset()
    dia.close()
}


function addProjectIntoDetails(projectName){
    let div = document.createElement('div')
    div.classList.add('divProject')

    let btnDelet =document.createElement('button')
    btnDelet.classList.add('brnDeletProject')
    btnDelet.classList.add(projectName)

    let p =document.createElement('p')
    p.textContent = projectName
    p.classList.add(projectName)
    

    div.appendChild(p)
    div.appendChild(btnDelet)
    addIntoDetails.appendChild(div)

    addProjectCardIntoLocalStorage(projectName)

    //on sup les ecouteurs precedent (ca cause le double click)
    const allProject = document.querySelectorAll('p')
    removeAllEventListeners(allProject)

    const allProjects = document.querySelectorAll('p')

    allProjects.forEach((project)=>{
        project.addEventListener('click' , ()=>{
            setupProjectContainer(project.className)
        })
    })
    
    //meme chose on sup les ecouteur precedent
    const allBtnDeletProject = document.querySelectorAll('.brnDeletProject')
    removeAllEventListeners(allBtnDeletProject)

    const allBtnDeletProjects = document.querySelectorAll('.brnDeletProject')
    allBtnDeletProjects.forEach((btn)=>{
        btn.addEventListener('click' , ()=>{
            deleteProject(btn.classList[1])
            addIntoDetails.removeChild(btn.parentElement)
        })
    })
    
}

allForm[0].addEventListener('submit', ()=>{
    const formValue =document.querySelector('#nameTheme').value;
    if(projects.find(project => project === formValue) == null){
        addProjectIntoDetails(formValue)

        addProjectIntoLocalStorage(formValue)
    }else{
        alert(formValue + " : nom de projet deja existant")
    }
    

    resetFormDialog(allForm[0],dialogAddProject)
})

btnCloseAddProject.addEventListener('click' , ()=>{
    resetFormDialog(allForm[0],dialogAddProject)
})

btnOpenAddProjectDialog.addEventListener('click', ()=>{
    dialogAddProject.showModal()
})


function deleteProject(nameProject){
    projects = projects.filter((project)=> project!= nameProject)
    localStorage.removeItem(nameProject)
    updateLocalStorage()
}

function addProjectIntoLocalStorage(nameProject){
    projects.push(nameProject)
    localStorage.setItem("project" , JSON.stringify(projects))
}

function updateLocalStorage(){
    localStorage.setItem("project" , JSON.stringify(projects))
}

function addProjectCardIntoLocalStorage(projectName){
    const recup = localStorage.getItem(projectName)
    if (!recup) {
        localStorage.setItem(projectName, JSON.stringify([]))
    }
   
}





function setupProjectContainer(name){
    const container = document.querySelector('.containerTodo')
    let ContainerName = document.createElement('div')
    ContainerName.classList.add('Title')
    let h1 = document.createElement('h1')
    h1.textContent = name + " Todo liste"


    let ContainerBtnAddTodo =document.createElement('div')
    ContainerBtnAddTodo.classList.add('addTodo')
    let imgAdd = document.createElement('img')
    imgAdd.src = imgAddTodo
    imgAdd.width =50
    imgAdd.height = 50

    let h3 = document.createElement('h3')
    h3.textContent ="add Todo"
    let btnAddTodo =document.createElement('btn')
    btnAddTodo.classList.add('btnAddTodo')
    btnAddTodo.appendChild(imgAdd)

    let divContainTodo = document.createElement('div')
    divContainTodo.classList.add('todoContainer')

    ContainerName.appendChild(h1)
    ContainerBtnAddTodo.appendChild(btnAddTodo)
    ContainerBtnAddTodo.appendChild(h3)
    
    let divContainAddTitle = document.createElement('div')
    divContainAddTitle.classList.add('headerProject')
    divContainAddTitle.classList.add(name)
    
    divContainAddTitle.appendChild(ContainerName)
    divContainAddTitle.appendChild(ContainerBtnAddTodo)

    container.innerHTML = ""
    container.appendChild(divContainAddTitle)
    container.appendChild(divContainTodo)


    getTodoFromStorage(name)


    const btnShowDialogTodo = document.querySelector('.addTodo')
    btnShowDialogTodo.addEventListener('click' , ShowDialogTodo)
    
}

