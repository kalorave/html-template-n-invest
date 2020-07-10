(function () {
  let database = [
    {id: 1, floor: 7, section: 1},
    {id: 2, floor: 7, section: 2},
    {id: 3, floor: 7, section: 3},
    {id: 4, floor: 7, section: 4},
    {id: 5, floor: 7, section: 5},
    {id: 6, floor: 6, section: 1},
    {id: 7, floor: 6, section: 2},
    {id: 8, floor: 6, section: 3},
    {id: 9, floor: 6, section: 4},
    {id: 10, floor: 6, section: 5},
    {id: 11, floor: 5, section: 1},
    {id: 12, floor: 5, section: 2},
    {id: 13, floor: 5, section: 3},
    {id: 14, floor: 5, section: 4},
    {id: 15, floor: 5, section: 5},
    {id: 16, floor: 4, section: 1},
    {id: 17, floor: 4, section: 2},
    {id: 18, floor: 4, section: 3},
    {id: 19, floor: 4, section: 4},
    {id: 20, floor: 4, section: 5},
    {id: 21, floor: 3, section: 1},
    {id: 22, floor: 3, section: 2},
    {id: 23, floor: 3, section: 3},
    {id: 24, floor: 3, section: 4},
    {id: 25, floor: 3, section: 5},
    {id: 26, floor: 2, section: 1},
    {id: 27, floor: 2, section: 2},
    {id: 28, floor: 2, section: 3},
    {id: 29, floor: 2, section: 4},
    {id: 30, floor: 2, section: 5},
    {id: 31, floor: 1, section: 1},
    {id: 32, floor: 1, section: 2},
    {id: 33, floor: 1, section: 3},
    {id: 34, floor: 1, section: 4},
    {id: 35, floor: 1, section: 5}
  ]


  $('#svg-scheme-map path').mousemove(function(e) {

    let section = database[this.getAttribute('data-id') - 1].section;
    let floor = database[this.getAttribute('data-id') - 1].floor;

    $(`#svg-scheme-map .section-list > div:nth-child(${section})`).addClass('active');

    $('#svg-scheme-map .floor-tooltip > p').text(floor)
    $('#svg-scheme-map .floor-tooltip').addClass('active')
      .css({'top': e.offsetY - 140, 'left': e.offsetX - 70});
  })

  $('path').mouseleave(function() {

    $('.section-list > div').removeClass('active');
    $('#svg-scheme-map .floor-tooltip').removeClass('active');

  });

})();












































































//
