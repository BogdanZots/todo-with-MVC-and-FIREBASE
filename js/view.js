const parentEl = document.querySelector('#todo-list')
export const createHTML = function (unicalID, data) {
    return `
     <li id="${unicalID}" class="todo-item">
     <label class="title">${data}</label>
     <input class="textfield" type="text">
     <button id="edit" class="edit">Изменить</button>
     <button class="delete">Удалить</button>
     </li>
     `
}
export const renderHTML = function (unicalID, data) {
    const content = createHTML(unicalID, data)
    parentEl.insertAdjacentHTML('beforeend', content)
}
export const hideElement = function (element) {
    element.classList.add('hidden')
}
export const changeVisible = function (elemToHide, elemToShow) {
    elemToHide.classList.toggle('hidden')
    elemToShow.classList.toggle('visible')
}