
var nojs=document.querySelector(".main-menu-nojs"),
    ButtonOfMenu=document.querySelector(".main-menu__toggle"),
    MainMenu=document.querySelector(".main-menu"),
    nav=document.querySelector(".main-menu__list");

  // nav.classList.remove('menu-nav--opened');
  // nav.classList.remove('menu-nav--nojs');
  // nav.classList.add('menu-nav--closed');

document.addEventListener("DOMContentLoaded",function(a){
 MainMenu.classList.remove("main-menu--nojs")
});

ButtonOfMenu.addEventListener("click",function(evt){
   evt.preventDefault(),
   MainMenu.classList.toggle("main-menu--opened"),
   MainMenu.classList.toggle("main-menu--closed")
});
console.log('mifomen')