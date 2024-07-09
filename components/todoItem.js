export function todoItem(item, idx, arr) {
    const tr = document.createElement('tr')
    const number = document.createElement('td')
    const name = document.createElement('td')
    const year = document.createElement('td')
    const actions = document.createElement('td')
    const edit = document.createElement('button')
    const del = document.createElement('button')

    
    number.innerHTML = (idx + 1)
    name.innerHTML = item.name
    year.innerHTML = item.age
    actions.classList.add("actions")
    edit.classList.add("edit")
    del.classList.add("delete")

    tr.append(number, name, year, actions)
    actions.append(edit, del)

    del.onclick = () => {
        const forSure = confirm('Are you sure?')

        if(forSure === true) {
            arr.splice(idx, 1)
            tr.remove()
        }

    }

    const close = document.querySelector('.close')
    const dialog = document.querySelector('dialog')
    
    edit.onclick = () => {
        dialog.showModal()

        openAndSave(item)


    }

    close.onclick = () => {
        dialog.close()
    }

    return tr

    
}

function openAndSave(item) {
    const form = document.forms.namedItem("changeItem");
    
    form.onsubmit = (e) => {
        e.preventDefault();
        
        const newName = new FormData(e.target).get('name');
        const newAge = new FormData(e.target).get('age');
        
        item.name = newName;
        item.age = newAge;
    
        
        name.innerHTML = newName;
        age.innerHTML = newAge;
        
        e.target.reset();
        dialog.close();
    };
}
