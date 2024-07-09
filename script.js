import { items } from "./lib/db.js"
import { reload } from "./lib/utills.js"
import { todoItem } from "./components/todoItem.js"



const tbody = document.querySelector('table tbody')
const form = document.querySelector('.form-container form')

form.onsubmit = (e) => {
    e.preventDefault()

    
    const todo = {
        name: new FormData(e.target).get('name'),
        age: new Date().getFullYear() - new FormData(e.target).get('age')
    }

    items.push(todo)
    reload(items, todoItem, tbody);
}



reload(items, todoItem, tbody);



