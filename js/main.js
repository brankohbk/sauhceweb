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
const qrSection = document.querySelector("#qr-section");

const appearOptions = {
  threshold: .10,
  rootMargin: "0px 0px -50px 0px"
};

const glowOptions = {
  threshold: .90,
  rootMargin: "-50px 0px 0px 0px"
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

const glowOnScroll = new IntersectionObserver(function(
  entries,
  glowOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("glow");
      return;
    } else {
      entry.target.classList.add("glow");
      glowOnScroll.unobserve(entry.target);
    }
  });
},
glowOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// glowOnScroll.observe(qrSection);



// ===============================
// CONFIRMAR ACCIONES DEL FORMULARIO

function confirmReset() {
  return confirm("Está por limpiar los datos del formulario ¿Es correcto?");
}

function confirmSend() {
  return confirm("¿Confirma el envío del formulario?");
}

