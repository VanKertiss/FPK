var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay:7000
    },
    loop: true,
    spaceBetween: 500,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    
    
});
mySwiper = document.querySelector('.swiper-container').swiper;

$(document).ready(function() {
    $(".single_image").fancybox();
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.nav-panel');

menuButton.addEventListener ('click', click)

function click(){
  menuButton.classList.toggle('menu-button-active')
  menu.classList.toggle('nav-panel-active');
  console.log('клик')
}