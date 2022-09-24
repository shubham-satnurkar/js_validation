
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  infinite: true,
  dots: false,

  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

});

// On before slide change
$('.slider').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide){
  let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
  $('.slick-now').removeClass('slick-now');
  $(selectors).addClass('slick-now');
});

$('[data-slick-index="0"]').addClass('slick-now');
