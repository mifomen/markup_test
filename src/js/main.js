
var nojs=document.querySelector(".main-menu-nojs"),
    ButtonOfMenu=document.querySelector(".main-menu__toggle"),
    MainMenu=document.querySelector(".main-menu"),
    nav=document.querySelector(".main-menu__list");

var BlurEffect=document.querySelector(".main-header");
document.addEventListener("DOMContentLoaded",function(a){
 MainMenu.classList.remove("main-menu--nojs");
 BlurEffect.classList.remove("blur-effect");
});

ButtonOfMenu.addEventListener("click",function(evt){
   evt.preventDefault(),
   MainMenu.classList.toggle("main-menu--opened"),
   MainMenu.classList.toggle("main-menu--closed")
});
// console.log('a;; work')
//scroll blur effect on header 
document.addEventListener("scroll",function(a){

});
//gallery
var Gallery = document.querySelector(".gallery");
var  GalleryWrapper = document.querySelector(".gallery__wrapper");
var WidthViewPortPicture = '-50vw';

Gallery.addEventListener("click",function(evt){
    evt.preventDefault();
    var WidthOnePicture = 'translateX(' + WidthViewPortPicture+ ')';
    GalleryWrapper.style.transform = WidthOnePicture;
    WidthViewPortPicture = parseInt(WidthViewPortPicture) - parseInt(50);
    WidthViewPortPicture += 'vw';
    if (parseInt(WidthViewPortPicture)<-150) {
      WidthViewPortPicture='0vh';
    }
console.log(WidthOnePicture);
});