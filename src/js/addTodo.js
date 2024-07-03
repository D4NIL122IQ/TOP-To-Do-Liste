import '../css/styleAddTodo.css'
import {removeAllEventListeners} from '../index.js'
import imgDelete from '../assets/delete.png'
import imgModif from '../assets/edit.png'
import imgDo from '../assets/do.png'
import imgNDo from '../assets/notdo.png'

const dialogTodo = document.querySelector('.dialogTodo')
const btnCloseDialogTodo = document.querySelector('.closeAddTodo')
const formDialog = document.querySelectorAll('form')

const dialogModifTodo = document.querySelector('.dialogModifTodo')

// pour recuperer les todo prensent dans le storage
let todos =[]

////// todoInlocaleStorage undefined
function getTodoFromStorage(nomProject){
    const todoInLocalStorage = localStorage.getItem(nomProject)?.toString()
    if(todoInLocalStorage){
        todos = JSON.parse(todoInLocalStorage)
        todos.forEach((todo)=>{
            const todoInstance = Todo.transformElementIntoInstance(todo)
            todoInstance.addTodoIntoContainer()
        })
    }
}

class Todo{
    constructor(nameListe , importance ,date, detail,projectName ){
        this.name = nameListe
        this.date = date
        this.details = detail
        this.importance = importance
        this.projectName = projectName

    }

    // creation d'une carte todo
    addTodoIntoContainer(){
        const todoContainer = document.querySelector('.todoContainer')
        let div = document.createElement('div')
        div.classList.add('cardTodo')
        div.classList.add(this.importance)
        let index = this.name.indexOf(' ')
        div.classList.add(this.name.slice(0, index))

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
        let imgsup = document.createElement('img')
        imgsup.src = imgDelete
        imgsup.width = 30
        btnDeletTodo.classList.add('deleteTodo')
        btnDeletTodo.appendChild(imgsup)
        
        btnDeletTodo.addEventListener('click' , ()=>{

            deleteTodo(this.name)
            todoContainer.removeChild(btnDeletTodo.parentElement)
        })


        let btnModif = document.createElement('button')
        btnModif.classList.add('modifTodo')
        let imgedit = document.createElement('img')
        imgedit.src = imgModif
        imgedit.width = 30


        btnModif.appendChild(imgedit)
        btnModif.addEventListener('click',()=>{
            // acces to todo
            dialogModifTodo.showModal()
            formDialog[2].children[1].value = this.name
            formDialog[2].children[3].value = this.date
            switch (this.importance) {
                case "high":
                    formDialog[2].children[5].children[0].checked = true;
                    break;
                case "mid":
                    formDialog[2].children[5].children[2].checked = true;
                    break;
                
                case "low":
                    formDialog[2].children[5].children[4].checked = true;
                    break;
            }
            formDialog[2].children[6].value = this.details
            formDialog[2].children[7].addEventListener('click' , ()=>{
                modifyTodoInfo(this)
            })
            console.log(this.details)
        })


        divBtn.classList.add('divBtn')
        divBtn.appendChild(btnDeletTodo)
        divBtn.appendChild(btnModif)

        div.appendChild(isDo)  
        div.appendChild(title) 
        div.appendChild(date) 
        div.appendChild(importanc)  
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
    const detail = formInputs.get("detailTodo")


    let newTodo = new Todo(titleTodo, todoImport ,dateTodo ,detail,document.querySelector('.containerTodo').firstChild.classList[1])
    todos.push(newTodo)
    addArrayTodoIntoContainer()
    addTodoIntoLocalStorage()
    
    resetFormDialog(formDialog[1],dialogTodo)
})

function addArrayTodoIntoContainer(){
    document.querySelector('.todoContainer').innerHTML = ""
    todos.forEach((element)=>{
        const todoInstance = Todo.transformElementIntoInstance(element)
        todoInstance.addTodoIntoContainer()
    })
}


function modifyTodoInfo(todo) {


    const formInputs = new FormData(formDialog[2])
    const titleTodo = formInputs.get("nameTodo")
    const dateTodo =formInputs.get("dateTodo")
    const todoImport = formInputs.get("importance")
    const detailTodo =  formInputs.get("detail")

    let todoTemp = new Todo(titleTodo, todoImport ,dateTodo , detailTodo ,document.querySelector('.containerTodo').firstChild.classList[1])

    let index = todos.findIndex(element => element.name === todo.name && element.date === todo.date && element.importance === todo.importance);


    todos[index] = todoTemp
    addArrayTodoIntoContainer()
    addTodoIntoLocalStorage()
    
 
}



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