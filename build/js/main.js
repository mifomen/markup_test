var nojs=document.querySelector(".main-menu-nojs"),ButtonOfMenu=document.querySelector(".main-menu__toggle"),MainMenu=document.querySelector(".main-menu"),nav=document.querySelector(".main-menu__list"),BlurEffect=document.querySelector(".main-header");document.addEventListener("DOMContentLoaded",function(e){MainMenu.classList.remove("main-menu--nojs"),BlurEffect.classList.remove("blur-effect"),Timer()}),ButtonOfMenu.addEventListener("click",function(e){e.preventDefault(),MainMenu.classList.toggle("main-menu--opened"),MainMenu.classList.toggle("main-menu--closed")}),document.addEventListener("scroll",function(e){});var Gallery=document.querySelector(".gallery"),GalleryWrapper=document.querySelector(".gallery__wrapper"),WidthOfPicture="-50vw";function Timer(){if(today=new Date,today=Math.floor((timeend-today)/1e3),today<0)return!0;tsec=today%60,today=Math.floor(today/60),tmin=today%60,today=Math.floor(today/60),thour=today%24,today=Math.floor(today/24),document.getElementById("day").innerHTML=today,document.getElementById("hour").innerHTML=thour,document.getElementById("min").innerHTML=tmin,document.getElementById("sec").innerHTML=tsec,window.setTimeout("Timer()",1e3)}Gallery.addEventListener("click",function(e){e.preventDefault();var t="translateX("+WidthOfPicture+")";GalleryWrapper.style.transform=t,WidthOfPicture=parseInt(WidthOfPicture)-parseInt(50),WidthOfPicture+="vw",parseInt(WidthOfPicture)<-150&&(WidthOfPicture="0vh"),console.log(t)}),timeend=new Date(2018,8,28,17,0,0,0);