import '../css/styleAddTodo.css'
import {removeAllEventListeners} from '../index.js'
import imgDelete from '../assets/delete.png'
import imgModif from '../assets/edit.png'
import imgDetail from '../assets/detail.png'


const dialogTodo = document.querySelector('.dialogTodo')
const btnCloseDialogTodo = document.querySelector('.closeAddTodo')
const formDialog = document.querySelectorAll('form')

const dialogModifTodo = document.querySelector('.dialogModifTodo')
const dialogShowDetait = document.querySelector('.dialogShowDetail')



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
    constructor(nameListe , importance ,date, detail,isdo,projectName ){
        this.name = nameListe
        this.date = date
        this.details = detail
        this.importance = importance
        this.do = isdo
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
        title.textContent = "Nom todo : "+this.name

        let date = document.createElement('p')
        date.textContent = "Date prevu : "+String(this.date)

        let importanc = document.createElement('btn')
        importanc.classList.add(this.importance)
        importanc.classList.add("importance")
        
        let isDo = document.createElement('div')
        isDo.classList.add('isdo')
        if (this.do) {
            isDo.classList.add('yes')
        } else {
            isDo.classList.add('no')
        }


        let btnDeletTodo = document.createElement('button')
        let imgsup = document.createElement('img')
        imgsup.src = imgDelete
        imgsup.width = 30
        btnDeletTodo.classList.add('deleteTodo')
        btnDeletTodo.appendChild(imgsup)
        
        btnDeletTodo.addEventListener('click' , ()=>{

            deleteTodo(this.name)
            todoContainer.removeChild(btnDeletTodo.parentElement.parentElement)
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
            setupFormInDialog(2,this)
            
            formDialog[2].children[7].addEventListener('click' , ()=>{
                modifyTodoInfo(this)
            })
            
        })

        let btnDetail = document.createElement('button')
        btnDetail.classList.add('showDetail')
        let imgdetail = document.createElement('img')
        imgdetail.src = imgDetail
        imgdetail.width = 30
        btnDetail.appendChild(imgdetail)
        btnDetail.addEventListener('click' , ()=>{
            dialogShowDetait.showModal()
            setupFormInDialog(3,this)
            formDialog[3].children[7].addEventListener('click' , ()=>{
                dialogShowDetait.close()
            })
        })

        let divBtn = document.createElement('div')
        divBtn.classList.add('divBtn')
        divBtn.appendChild(btnDeletTodo)
        divBtn.appendChild(btnModif)
        divBtn.appendChild(btnDetail)
        
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
                    updateArrayTodo(this.name)
                } else {
                    isdo.classList.replace('yes','no')
                    updateArrayTodo(this.name)
                }
            })
        })
    }

    static transformElementIntoInstance(ele){
        return new Todo(ele.name, ele.importance,ele.date,ele.details,ele.do,ele.projectName)
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

    console.log(detail)
    let newTodo = new Todo(titleTodo, todoImport ,dateTodo ,detail,false , document.querySelector('.containerTodo').firstChild.classList[1])
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


function setupFormInDialog(index , todo) {
    formDialog[index].children[1].value = todo.name
    formDialog[index].children[3].value = todo.date
    switch (todo.importance) {
        case "high":
            formDialog[index].children[5].children[0].checked = true;
            break;
        case "mid":
            formDialog[index].children[5].children[2].checked = true;
            break;
                
        case "low":
            formDialog[index].children[5].children[4].checked = true;
            break;
    }
    formDialog[index].children[6].value = todo.details
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


function updateArrayTodo(title) {
    let index = todos.findIndex(element => element.name === title );
    todos[index].do = !todos[index].do
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