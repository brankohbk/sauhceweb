"use strict"
// ===============================
// Fixes unnecessary scrolling in mobile
let vh, vw;

function updateSize() {
  vh = window.innerHeight * 0.01;
  vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener("resize", updateSize);
updateSize();

// ===============================
// MUESTRA UN "TO THE TOP" AL SCROLLEAR.
let topper = document.getElementById("toTop");

const toggleTopperHover=()=>{topper.classList.toggle("toTop-hover")};

const toggleTopper = function () {
 window.scrollY >= 222 ? topper.className = "toTop showTopper" : topper.className = "toTop hideTopper"  ;
};

topper.addEventListener("mouseenter",toggleTopperHover);
topper.addEventListener('mouseleave',toggleTopperHover);
window.addEventListener("scroll", toggleTopper);

// ===============================
// CERRAR EL NAVBAR AL TOCAR AFUERA DEL MENU

$(document).ready(function () {
  $(document).click(function (event) {
      var click = $(event.target);
      var _open = $(".navbar-collapse").hasClass("show");
      if (_open === true && !click.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
      }
  });
});

// ===============================
// APARECER ELEMENTOS ON SCROLL

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");


const appearOptions = {
  threshold: .0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("appear");
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

const botonLeerMasProblemas = document.querySelector("#btn-problemas-mas");
const textoLeerMasProblemas = document.querySelector("#problemas-mas");
botonLeerMasProblemas.addEventListener("click",()=>{
  botonLeerMasProblemas.innerHTML==="Leer más..." ? botonLeerMasProblemas.innerHTML="Leer menos." : botonLeerMasProblemas.innerHTML="Leer más...";

  textoLeerMasProblemas.classList.toggle("show")

})
