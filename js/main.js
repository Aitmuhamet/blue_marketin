var oldScrollY = 0;
var div = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var dY = scrolled - oldScrollY;
  
  if ( dY <= 0 ){
    div.classList.add('navbar-top-fixed');
  } else if ( dY > 0 || scrolled == 0 ) {
    div.classList.remove('navbar-top-fixed');
    div.classList.add('navbar-to-top');
  }
  oldScrollY = scrolled;
  
  console.log(scrolled);
  // oldScrollY = scrolled;
});