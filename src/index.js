import './styleGeneral.css'

import './js/addProjectManage.js'

import imgClose from './assets/close.png'

const imgcls = document.createElement('img')

imgcls.src =imgClose
imgcls.width = 30
imgcls.height = 30

document.querySelector('#BtnCloseDialog').appendChild(imgcls)
document.querySelector('#btnCloseDialog').appendChild(imgcls)





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


function removeAllEventListeners(elements) {
    elements.forEach((element) => {

        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
    });
}

export {removeAllEventListeners}


