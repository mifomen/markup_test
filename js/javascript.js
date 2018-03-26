 // background header on scroll
var head = document.getElementById('header');
var topHead = head.offsetTop;

function backgroundNav() {
  if(window.scrollY > topHead) {
    head.classList.add('active-header');
  }
  else {
    head.classList.remove('active-header');
    for( var i = 0; i < links.length; i++) {
      links[i].classList.remove('active-link');
    }
  }
}

window.addEventListener('scroll', backgroundNav);



//toggle program for days
var day = document.querySelectorAll('.program-days__day');
var program = document.querySelectorAll('.program-day');

for(var i = 0; i < day.length; i++) {
  day[i].addEventListener('click', function(e){
  event.preventDefault();
    for(var i = 0; i < day.length; i++) {
      day[i].classList.remove('active-day');
      program[i].classList.remove('active-program');
    }
    this.classList.add('active-day');
    document.querySelector(this.getAttribute('data-info')).classList.add('active-program');
  });
}


//burger-menu
var burgerBtn = document.querySelector(".mobile-btn");
var mobileMenu = document.querySelector(".mobile-block");
var burgerItems = burgerBtn.querySelectorAll('.mobile-btn__item');
var links = document.querySelectorAll('.navigation__link');
var logo = document.querySelector('.logo');


burgerBtn.addEventListener('click', function(){
  mobileMenu.classList.toggle('active-menu');
  burgerItems[0].classList.toggle('rotate-left');
  burgerItems[1].classList.toggle('hidden');
  burgerItems[2].classList.toggle('rotate-right');

  for( var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){
      mobileMenu.classList.remove('active-menu');
      burgerItems[0].classList.remove('rotate-left');
      burgerItems[1].classList.remove('hidden');
      burgerItems[2].classList.remove('rotate-right');
  }); 
  };
}); 


//style for active link
if( window.innerWidth > 900) {
  for( var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(){

    for( var i = 0; i < links.length; i++) {
      if(links[i].classList.contains('active-link')) {
        links[i].classList.remove('active-link');
      } else {
        continue;
      }
    };
    this.classList.add('active-link');
    });
  };
};



logo.addEventListener('click', function(){
  for( var i = 0; i < links.length; i++) {
    links[i].classList.remove('active-link');
  }
});


