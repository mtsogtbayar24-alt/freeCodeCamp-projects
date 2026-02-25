// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let dashSep = count + " - " 
    saveEl.textContentxs += dashSep
    countEl.textContent = 0
    count = 0
}