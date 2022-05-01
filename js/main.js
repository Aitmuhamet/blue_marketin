var oldScrollY = 0;
var div = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  // var dY = scrolled - oldScrollY;
  
  if ( scrolled > 0 ){
    div.classList.add('navbar-top-fixed');
  } else {
    div.classList.remove('navbar-top-fixed');
  }
  
  // oldScrollY = scrolled;
});