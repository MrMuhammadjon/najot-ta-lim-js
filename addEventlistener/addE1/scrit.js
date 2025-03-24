let area = document.querySelector(".area");
let items = document.querySelectorAll(".item");

let currentItem = null;

items.forEach((item) => {
    item.addEventListener("dragstart", () => {
        console.log(item);
        item.style.opacity = "0.1";
        currentItem = item;
    });
    item.addEventListener("dragend", () => {
        item.style.opacity = "1";
    });
});

area.addEventListener("dragover", (e) => {
    e.preventDefault();
});

area.addEventListener("drop", () => {
    if (currentItem) {
        area.appendChild(currentItem);
    }
});




items.forEach((item) => {
    item.addEventListener("dragenter", () => {
        item.style.border = "2px dashed #000";
    });
    item.addEventListener("dragleave", () => {
        item.style.border = "none";
    });
});


