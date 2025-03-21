
let ul = document.querySelector('.ul')
let counter = 50;


function add() {
    for (let i = 1; i < counter; i++) {
        let li = document.createElement('li')
        li.textContent = `Item ${i}`
        ul.appendChild(li)
    }
}