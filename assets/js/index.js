/*============================================================================
  All
==============================================================================*/
/*================ Menu open / close ================*/
$('.menu-sidebar').click(function() {
  $('html').toggleClass('no-scroll');
  $('.menu').toggleClass('is-open');
});

$('.menu__close').click(function() {
  $('html').toggleClass('no-scroll');
  $('.menu').toggleClass('is-open');
});

/*================ Menu mouseover ================*/
$('.menu-content__links a').mouseenter(function() {
  $('.menu').addClass('link-selected');
});

$('.menu-content__links a').mouseleave(function() {
  $('.menu').removeClass('link-selected');
});

/*================ Mobile Menu open / close ================*/
$('.header__menu').click(function() {
  $('html').toggleClass('no-scroll');
  $('.menu').toggleClass('is-open');
  $('.header').toggleClass('is-open');
});

/*================ Mobile Menu Scroll ================*/
$(window).scroll(function() {
  if ($(window).width() < 768) {
    if ($(window).scrollTop() > 20) {
      if (!$('.header').hasClass('is-scrolled')) {
        $('.header').addClass('is-scrolled');
      }
    } else {
      $('.header').removeClass('is-scrolled');
    }
  }
});

/*============================================================================
  Homepage
==============================================================================*/
/*================ Testimonials Slider ================*/
$('.testimonials-home__slider').slick({
  appendArrows: $('.testimonials-home__slider-controls'),
  prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none"><circle r="23.5" transform="matrix(-1 0 0 1 23.5 23.5)" fill="#FF2424"/><path d="M34 22.2929C34.3905 22.2929 34.7071 22.6095 34.7071 23C34.7071 23.3905 34.3905 23.7071 34 23.7071L34 22.2929ZM13.5 23.5C13.2239 23.2239 13.2239 22.7761 13.5 22.5L18 18C18.2761 17.7239 18.7239 17.7239 19 18C19.2761 18.2761 19.2761 18.7239 19 19L15 23L19 27C19.2761 27.2761 19.2761 27.7239 19 28C18.7239 28.2761 18.2761 28.2761 18 28L13.5 23.5ZM34 23.7071L14 23.7071L14 22.2929L34 22.2929L34 23.7071Z" fill="white"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none"><circle cx="23.5" cy="23.5" r="23.5" fill="#FF2424"/><path d="M13 22.2929C12.6095 22.2929 12.2929 22.6095 12.2929 23C12.2929 23.3905 12.6095 23.7071 13 23.7071L13 22.2929ZM33.5 23.5C33.7761 23.2239 33.7761 22.7761 33.5 22.5L29 18C28.7239 17.7239 28.2761 17.7239 28 18C27.7239 18.2761 27.7239 18.7239 28 19L32 23L28 27C27.7239 27.2761 27.7239 27.7239 28 28C28.2761 28.2761 28.7239 28.2761 29 28L33.5 23.5ZM13 23.7071L33 23.7071L33 22.2929L13 22.2929L13 23.7071Z" fill="white"/></svg></button>',
  asNavFor: '.testimonials-home__testimonial-slider'
});

$('.testimonials-home__testimonial-slider').slick({
  arrows: false,
  dots: false,
  draggable: false,
  fade: true,
  asNavFor: '.testimonials-home__slider'
});