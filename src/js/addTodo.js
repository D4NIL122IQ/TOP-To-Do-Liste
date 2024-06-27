import '../css/styleAddTodo.css'


const dialogTodo = document.querySelector('.dialogTodo')
const btnCloseDialogTodo = document.querySelector('.closeAddTodo')
const formDialog = document.querySelectorAll('form')



class todoliste{
    constructor(nameListe , importance , detail ,date){
        this.name = nameListe
        this.date = date
        this.importance = importance
        this.detail =detail
    }

    addTodoIntoContainer(){
        // let div = document.createElement 
        // let 
        // let 
        // let 
        // let
    }
}


btnCloseDialogTodo.addEventListener('click',()=>{
    dialogTodo.close()
})

formDialog[1].addEventListener('submit',()=>{
    console.log('hello')
})



function ShowDialogTodo(){
    dialogTodo.showModal()
}

export{ShowDialogTodo}