
var nojs=document.querySelector(".main-menu-nojs"),
    ButtonOfMenu=document.querySelector(".main-menu__toggle"),
    MainMenu=document.querySelector(".main-menu"),
    nav=document.querySelector(".main-menu__list");

var BlurEffect=document.querySelector(".main-header");
document.addEventListener("DOMContentLoaded",function(a){
 MainMenu.classList.remove("main-menu--nojs");
 BlurEffect.classList.remove("blur-effect");
 Timer();
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
var WidthOfPicture = '-40vw';

Gallery.addEventListener("click",function(evt){
    evt.preventDefault();
    var WidthOnePicture = 'translateX(' + WidthOfPicture+ ')';
    GalleryWrapper.style.transform = WidthOnePicture;
    WidthOfPicture = parseInt(WidthOfPicture) - parseInt(30);
    WidthOfPicture += 'vw';
    if (parseInt(WidthOfPicture)<-110) {
      WidthOfPicture='0vh';
    }
console.log(WidthOnePicture);
});

//timer
timeend= new Date(2020, 02, 28,17,45,0,0);
 // time = new Date(year, month, date hours, minutes, seconds, ms)

function Timer() {
  today = new Date();
  // console.log('today ' + today)
  today = Math.floor((timeend-today)/1000);
  if (today<0) {
    return true;
  } else {
  // console.log('today ' + today)
  tsec=today%60;
  today=Math.floor(today/60); 
  // if(tsec<10)tsec='0'+tsec;
  tmin=today%60;
  today=Math.floor(today/60);
  // if(tmin<10)tmin='0'+tmin;
  thour=today%24; 
  today=Math.floor(today/24);


  document.getElementById('day').innerHTML=today;
  document.getElementById('hour').innerHTML=thour;
  document.getElementById('min').innerHTML=tmin;
  document.getElementById('sec').innerHTML=tsec;
  window.setTimeout("Timer()",1000);
}
  // if (day<0) break;
}

//conference prgram button toggle

var ButtonForFirstDayOfConference = document.querySelector(".btn-day-one");
var ButtonForSecondDayOfConference = document.querySelector(".btn-day-two");

var ConferenceProgramDayOne = document.querySelector(".event__day-one");
var ConferenceProgramDayTwo = document.querySelector(".event__day-two");

ButtonForFirstDayOfConference.addEventListener("click",function(evt){
  evt.preventDefault(evt);
  ConferenceProgramDayTwo.classList.add('display-none');
  ConferenceProgramDayOne.classList.remove('display-none');
ButtonForFirstDayOfConference.classList.add('intro__button-first');
ButtonForSecondDayOfConference.classList.remove('intro__button-first');

});
ButtonForSecondDayOfConference.addEventListener("click",function(evt){
  evt.preventDefault(evt);
  ConferenceProgramDayOne.classList.add('display-none');
  ConferenceProgramDayTwo.classList.remove('display-none');
ButtonForFirstDayOfConference.classList.remove('intro__button-first');
ButtonForSecondDayOfConference.classList.add('intro__button-first');

});

