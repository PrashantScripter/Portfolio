
const slidingnav = document.querySelector(".slidingnav");
const hamburger = document.querySelector(".hamburger")
const width = document.querySelector(".width")
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");


hamburger.addEventListener("click",()=> {
    slidingnav.classList.toggle("width");
    line1.classList.toggle("span1");
    line2.classList.toggle("span2");
    line3.classList.toggle("span3");
});