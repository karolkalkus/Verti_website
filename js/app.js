document.addEventListener('DOMContentLoaded', function () {

  var menu = document.querySelector('.nav-items');
  var toogle = document.getElementById('menu-trigger');
  var brand = document.querySelector('.brand');
  var menuLi = document.querySelectorAll('.nav-item a');


  if (toogle) {
    toogle.addEventListener('click', function (e) {
      toogle.classList.toggle('open');
      menu.classList.toggle('show');
      brand.classList.toggle('close');
      e.preventDefault();
    }, false);
  }

  menuLi.forEach(function (element) {
    element.addEventListener('mouseover', function () {
      this.classList.add('active');
      this.style.color = '#fff';
    });
    element.addEventListener('mouseout', function () {
      this.classList.remove('active');
      this.style.color = '#444444';
    });
  });

});


//
//$('a[href^="#"]').on('click', function (event) {
//
//  var target = $(this.getAttribute('href'));
//
//  if (target.length) {
//    event.preventDefault();
//    $('html, body').stop().animate({
//      scrollTop: target.offset().top
//    }, 1000);
//  }
//});
