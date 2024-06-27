import '../css/styleAddTodo.css'

const btnOpenDialogTodo = document.querySelector('btnOpenTodo')
const dialogTodo = document.querySelector('.dialogTodo')


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


function ShowDialogTodo(){
    dialogTodo.showModal()
}

export{ShowDialogTodo}