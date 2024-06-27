import './styleGeneral.css'

import './js/addProjectManage.js'




document.querySelector('button').addEventListener('click', ()=>{
    document.querySelector('button').style.display = 'none'
    document.querySelector('aside').style.display = 'block'
    document.querySelector('input[type="button"]').style.display ='block'
})

document.querySelector('input[type="button"]').addEventListener('click', ()=>{
    document.querySelector('button').style.display = 'block'
    document.querySelector('aside').style.display = 'none'
    document.querySelector('input[type="button"]').style.display ='none'
})



