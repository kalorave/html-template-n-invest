new fullpage('#fullpage');

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

$(".slider-slick").slick({
  slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false
});
