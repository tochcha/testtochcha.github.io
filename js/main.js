$(document).ready(function () {
    document.createElement('header');
    document.createElement('nav');
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('footer');
    document.createElement('figure');
    document.createElement('figcaption');

    $('.slider-1').slick({
        autoplaySpeed: 5000,
        speed: 700,
        autoplay: true,
        arrows: false,
        dots: true,
		pauseOnHover: false
      });
    $('.slider-2').slick({
        autoplaySpeed: 3000,
        speed: 700,
        autoplay: true,
        arrows: false,
        dots: true,
		fade: true,
		pauseOnHover: false
      });

    setTimeout(function () {
        $(".menu-left").addClass("anim-menu-left");
        $(".menu-right").addClass("anim-menu-right");
    }, 500);


});