// Select language
const dropdown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const select = document.querySelector(".select");
const selectImg = document.querySelector(".select-img");

dropdown.addEventListener("click", () => {
    list.classList.toggle("show");
});

// Escucha el evento en los elementos individuales dentro de la lista
const items = document.querySelectorAll(".item");
items.forEach((item) => {
    item.addEventListener("click", (e) => {
        const img = e.currentTarget.querySelector("img"); // Utiliza currentTarget
        const text = e.currentTarget.querySelector(".select"); // Utiliza currentTarget
        selectImg.src = img.src;
        select.innerHTML = text.innerHTML;
    });
});
// Menu hamburger
const hamburger = document.querySelector("#burger");
const nav = document.querySelector("#nav");
const cta = document.querySelector("#container-cta");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("none");
    cta.classList.toggle("none");
});
// Tech stack
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);
const copy2 = document.querySelector(".logos-slide2").cloneNode(true);
document.querySelector(".logo-slider2").appendChild(copy);
