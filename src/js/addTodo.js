import '../css/styleAddTodo.css'
import {removeAllEventListeners} from '../index.js'


const dialogTodo = document.querySelector('.dialogTodo')
const btnCloseDialogTodo = document.querySelector('.closeAddTodo')
const formDialog = document.querySelectorAll('form')



// pour recuperer les todo prensent dans le storage
let todos =[]

////// todoInlocaleStorage undefined
function getTodoFromStorage(nomProject){
    const todoInLocalStorage = localStorage.getItem(nomProject)?.toString()
    console.log(todoInLocalStorage)
    if(todoInLocalStorage){
        todos = JSON.parse(todoInLocalStorage)
        console.log(todos)
        todos.forEach((todo)=>{
            const todoInstance = Todo.transformElementIntoInstance(todo)
            todoInstance.addTodoIntoContainer()
        })
    }
}

class Todo{
    constructor(nameListe , importance ,date, projectName ){
        this.name = nameListe
        this.date = date
        this.importance = importance
        this.projectName = projectName
    }

    addTodoIntoContainer(){
        const todoContainer = document.querySelector('.todoContainer')
        let div = document.createElement('div')
        div.classList.add('cardTodo')
        div.classList.add(this.importance)
        div.classList.add(this.name)

        let title = document.createElement('h3')
        title.textContent = this.name

        let date = document.createElement('p')
        date.textContent = String(this.date)

        let importanc = document.createElement('btn')
        importanc.classList.add(this.importance)
        importanc.classList.add("importance")
        
        let isDo = document.createElement('div')
        isDo.classList.add('isdo')
        isDo.classList.add('no')

        let divBtn = document.createElement('div')

        let btnDeletTodo = document.createElement('button')
        btnDeletTodo.classList.add('deleteTodo')

        btnDeletTodo.addEventListener('click' , ()=>{

            deleteTodo(btnDeletTodo.parentElement.classList[2])
            todoContainer.removeChild(btnDeletTodo.parentElement)
        })

        let btnModif = document.createElement('button')
        btnModif.classList.add('modifTodo')
        btnModif.addEventListener('click',()=>{
            // acces to todo
        })

        divBtn.appendChild(btnDeletTodo)

        div.appendChild(isDo)  
        div.appendChild(title) 
        div.appendChild(date) 
        div.appendChild(importanc)  
        div.appendChild(btnDeletTodo)
        div.appendChild(divBtn)
        todoContainer.appendChild(div)

        const allIsDoBtn = document.querySelectorAll('.isdo')
        removeAllEventListeners(allIsDoBtn)
        const allIsDoBtns = document.querySelectorAll('.isdo')
        allIsDoBtns.forEach((isdo)=>{
            isdo.addEventListener('click',()=>{
                if (isdo.classList.contains('no')) {
                    isdo.classList.replace('no','yes')
                } else {
                    isdo.classList.replace('yes','no')
                }
            })
        })
    }

    static transformElementIntoInstance(ele){
        return new Todo(ele.name, ele.importance,ele.date,ele.projectName)
    }
}


btnCloseDialogTodo.addEventListener('click',()=>{
    dialogTodo.close()
})

formDialog[1].addEventListener('submit',()=>{
    const formInputs = new FormData(formDialog[1])
    const titleTodo = formInputs.get("nameTodo")
    const dateTodo =formInputs.get("dateTodo")
    const todoImport = formInputs.get("importance")



    let newTodo = new Todo(titleTodo, todoImport ,dateTodo , document.querySelector('.containerTodo').firstChild.classList[1])
    newTodo.addTodoIntoContainer()
    todos.push(newTodo)
    addTodoIntoLocalStorage()
    
    resetFormDialog(formDialog[1],dialogTodo)
})



function deleteTodo(nameTodo){
    todos = todos.filter((todo)=> todo.name!= nameTodo)
    addTodoIntoLocalStorage()
}

function addTodoIntoLocalStorage(){
  localStorage.setItem(document.querySelector('.containerTodo').firstChild.classList[1], JSON.stringify(todos))  
}


function ShowDialogTodo(){
    dialogTodo.showModal()
}

function resetFormDialog(fo,dia){
    fo.reset()
    dia.close()
}


export{ShowDialogTodo , getTodoFromStorage}