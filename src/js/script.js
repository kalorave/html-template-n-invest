new fullpage('#fullpage', {
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  keyboardScrolling: true
});

(function() {
  let mapElems = document.querySelectorAll('#svg-map path');

  let x = 5;

  mapElems.forEach((path, i) => {
    path.onmouseenter = () => {
      console.log(`${Math.floor(i / x) + 1}; ${(i % x) + 1}`);
    }
    path.onmouseleave = () => {

    }
  });

})();

$(document).on('ready', function() {
  $(".slider-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 250
  });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slick-slider').slick('slickGoTo', slideno - 1);
  });
});
