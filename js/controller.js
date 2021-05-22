import {sendData,getData,deleteData,updateData} from './model.js'
import {renderHTML,hideElement,changeVisible} from './view.js'
const addInput = document.getElementById('add-input');
let data = await getData()
let dataArray;
data ? dataArray = Object.values(data) : dataArray = []
let unicalID = data ? Object.keys(data) : null
dataArray.forEach((item, i)=>{
    if (typeof item === 'object') {
        item = item.newText;
        renderHTML(unicalID[i], item)
    } 
    else {
        renderHTML(unicalID[i], item)
    }
})

async function addTodoItem(event) {
    event.preventDefault();   
    if (addInput.value === '') {
        return console.log('Введите название задачи');
    }
    await sendData(addInput.value)
    data = await getData()
    dataArray = Object.values(data)
    unicalID = data ? Object.keys(data) : null
    renderHTML(unicalID[unicalID.length - 1], dataArray[dataArray.length - 1])
    addInput.value = '';
}

async function deleteItem(e) {
    e.preventDefault()
    const target = e.target;
    if (!(target.classList.contains('delete') && target.tagName == "BUTTON")) return
    const id = target.parentElement.id
    await deleteData(id)
    dataArray = Object.values(data)
    hideElement(target.parentElement)
}

async function changeItemContent(e) {
    e.preventDefault()
    const target = e.target
    if (!(target.classList.contains('edit') && target.tagName == "BUTTON")) return
    const id = target.parentElement.id
    const elemToHide = target.parentElement.querySelector('.title')
    const elemToShow = target.parentElement.querySelector('.textfield')
    elemToShow.value ? elemToHide.textContent = elemToShow.value : null
    if (elemToShow.classList.contains('visible')) {
        await updateData(id,elemToShow.value)
    }
    changeVisible(elemToHide,elemToShow)
    elemToShow.value = elemToHide.textContent
    elemToShow.addEventListener('input', ()=>{
        elemToShow.value = elemToShow.value
    })
    
}

// Добавляем обработчики
(function() {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    todoForm.addEventListener('submit', addTodoItem)
    todoList.addEventListener('click', changeItemContent)
    todoList.addEventListener('click', deleteItem)
})()
