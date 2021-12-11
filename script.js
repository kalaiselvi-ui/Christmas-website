let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".header .search-form");

searchBtn.onclick = () => {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};


let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}