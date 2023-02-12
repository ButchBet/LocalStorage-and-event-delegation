const itemsList = document.getElementById("itemsList");
const items = JSON.parse(localStorage.getItem("items")) || [];
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
    console.log("Adding item...");
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
    console.log("We are now setting  the items...");
}