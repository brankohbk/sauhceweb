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
let microNav = document.getElementById("microNav");

const toggleMicroNavHover=(element)=>{element.classList.toggle("microNav-hover")};

const toggleMicroNav = function () {
  window.scrollY >= 222 ? microNav.className = "microNav showMicroNav" : microNav.className = "microNav hideMicroNav"  ;
};

microNav.childNodes.forEach(child => {
  child.addEventListener("mouseenter",(e)=>toggleMicroNavHover(e.target));
  child.addEventListener('mouseleave',(e)=>toggleMicroNavHover(e.target));
})

window.addEventListener("scroll", toggleMicroNav);


// ===============================
// AVERIGUA QUÉ section SE ESTÁ MOSTRANDO.

let active="home";
const sections = document.querySelectorAll("section");
let sectionNames=[];

const isActiveOptions = {
  threshold: .10,
  rootMargin: "0px 0px 0px 0px"
};
const isActive = new IntersectionObserver(function(
  entries,
  isActive
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      active= entry.target.id;
    }
  });
},
isActiveOptions);

 sections.forEach(section => {
   isActive.observe(section);
   sectionNames.push(section.id)  
  });

// ===============================
// MINI NAVEGADOR

function nextSection(){
  if(sectionNames.indexOf(active) + 1 < sectionNames.length){window.location.hash=`#${sectionNames[sectionNames.indexOf(active) + 1]}` }
}

function prevSection(){
  if(sectionNames.indexOf(active) - 1 >= 0 ){ window.location.hash=`#${sectionNames[sectionNames.indexOf(active) - 1]}` }
}

 



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
  threshold: .30,
  rootMargin: "0px 0px 0px 0px"
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

glowOnScroll.observe(qrSection);



// ===============================
// CONFIRMAR ACCIONES DEL FORMULARIO

function confirmReset() {
  return confirm("Está por limpiar los datos del formulario ¿Es correcto?");
}

function confirmSend() {
  return confirm("¿Confirma el envío del formulario?");
}

// ===============================
// CONFIRMAR ACCIONES DEL FORMULARIO

document.querySelectorAll(".toHome").forEach( element => {
  element.addEventListener("click",e=>{
    e.preventDefault;
    document.querySelector("#home").scrollIntoView({ behavior: "smooth"})
  })
})