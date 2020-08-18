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
