const itemsList = document.getElementById("itemsList");
const items = JSON.parse(localStorage.getItem('items')) || [];
const from = document.getElementById("form");
const addButton = document.getElementById("add");
const deleteAllButton = document.getElementById("deleteAll");
const checkAllButton = document.getElementById("checkAll");
const uncheckAllButton = document.getElementById("uncheckAll");
let allChecked = false;
let allRemoved = false;

// Respective events handling
addButton.addEventListener("click", (e) => {
    e.preventDefault();

    addItem(itemsList, items);
})

deleteAllButton.addEventListener("click", (e) => {
    e.preventDefault();

    removeAllItems(itemsList, items);
})

itemsList.addEventListener("click", (e) => {
    if(e.target.localName === "input") {
        let index = e.target.dataset.index;
    
        toggleItem(items, index)
    }
});

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

    allRemoved = false;
    
    form.reset();
}

function removeAllItems(place, items) {
    if(!allRemoved) {
        console.log("All removed");
        items.splice(0, items.length);
        
        place.innerHTML = `
            <p>
                Waiting food...
            </p>
        `
    
        localStorage.removeItem("items");
    }

    allRemoved = true;
}

function toggleItem(items, index) {
    items[index].done = !items[index].done;

    localStorage.setItem("items", JSON.stringify(items));
}

function checkAllItems(place, items) {
    if(!allChecked) {
        console.log("checking");
        items.map((item) => {
            item.done = true;
        })
    
        setItems(place, items);
    }

    allChecked = true;
}

function uncheckAllItems(place, items) {
    if(allChecked) {
        console.log("Uncheking");
        items.map((item) => {
            item.done = false;
        })
    
        setItems(place, items);
    }

    allChecked = false;
}

function setItems(place, items) {
    if(items.length === 0) {
        place.innerHTML = `
            <p>
                Waiting food...
            </p>
        `
    } else {
        place.innerHTML = items.map((item, index) => {
            return `
                <li class="item">
                    <input type="checkbox" class="item__checkbox" data-index=${index} id="item${index}" ${ item.done ? "checked" : ""}>
                
                    <label for="item${index}" class="item__label">${item.name}</label>
                </li>
            `
        }).join("");
    }
}

setItems(itemsList, items);