var navButton = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
navButton.addEventListener('click', function(){
  if(navButton.classList.length === 1){
    navButton.classList.add('main-nav__toggle--open');
    navList.classList.add('main-nav__list--open');
  } else{
    navButton.classList.remove('main-nav__toggle--open');
    navList.classList.remove('main-nav__list--open');
  }
});