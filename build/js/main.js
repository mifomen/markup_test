var nojs=document.querySelector(".main-menu-nojs"),ButtonOfMenu=document.querySelector(".main-menu__toggle"),MainMenu=document.querySelector(".main-menu"),nav=document.querySelector(".main-menu__list");document.addEventListener("DOMContentLoaded",function(e){MainMenu.classList.remove("main-menu--nojs")}),ButtonOfMenu.addEventListener("click",function(e){e.preventDefault(),MainMenu.classList.toggle("main-menu--opened"),MainMenu.classList.toggle("main-menu--closed")}),console.log("mifomen");