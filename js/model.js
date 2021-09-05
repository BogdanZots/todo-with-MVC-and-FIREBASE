import {REQ_URL,DELETE_URL,PATCH_URL} from './config.js'

export const getData = async function (item) { // с этой функции я получаю последний массив массивов из firebase он самый актуальный
  const response = await fetch(`${REQ_URL}`)
  let data = await response.json()
  if (!data) return
  return data 
}

export const sendData = async function (item) {
  await fetch(`${REQ_URL}`, {
    method: 'POST',
    body: JSON.stringify(item)
  })
}

export const deleteData = async function (itemID) {
  await fetch(`${DELETE_URL}${itemID}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const updateData = async function(itemID,newContent){
  newContent = {'newText':`${newContent}`}
  await fetch(`${PATCH_URL}${itemID}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({a:5})
  })
}
