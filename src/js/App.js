const itemsList = document.getElementById("itemsList");
const items = JSON.parse(localStorage.getItem("items")) || 
[/* {name: "Fish", done: false}, {name: "Bread", done: false}, {name: "Cucumber", done: false}, {name: "Cucumber", done: false} */];
const from = document.getElementById("form");
const addButton = document.getElementById("add");
const deleteAllButton = document.getElementById("deleteAll");
const checkAllButton = document.getElementById("checkAll");
const uncheckAllButton = document.getElementById("uncheckAll");

// Respective events handling
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    addItem(itemsList, items);
})

deleteAllButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeAllItems(itemsList, items);
})

checkAllButton.addEventListener("click", (e) => {
    e.preventDefault();
    checkAllItems(itemsList, items);
})

uncheckAllButton.addEventListener("click", (e) => {
    e.preventDefault();
    uncheckAllItems(itemsList, items);
})

function addItem(place, items) {
    let name = (form.querySelector("[name=inputText]")).value;

    const item = {
        name,
        done: false
    }
    
    items.push(item);
    
    localStorage.setItem("items", JSON.stringify(items));

    setItems(place, items);

    form.reset();
}

function removeAllItems(place, items) {
    console.log("Removing items...")
}

function checkAllItems(place, items) {
    console.log("Checking all items...");
}

function uncheckAllItems(place, items) {
    console.log("Unchecking all items...")
}

function setItems(place, items) {
    place.innerHTML = items.map((item, index) => {
        return `
            <li class="item">
                <input type="checkbox" class="item__checkbox" data-index=${index} id="item${index}" ${ item.done ? "checked" : ""}>
            
                <label for="item${index}" class="item__label">${item.name}</label>
            </li>
        `
    }).join("");
}

