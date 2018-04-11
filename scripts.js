$('.tab-list').on('click', '.tab', event => {
  event.preventDefault();
  $('.tab').removeClass('active');
  $('.tab')
    .parent()
    .removeClass('selected-div');
  $('.tab-content').removeClass('show');

  $(event.target.parentElement).addClass('selected-div');
  $(event.target).addClass('active');
  $($(event.target).attr('href')).addClass('show');
});

$('.menu-btn').on('click', event => {
  event.preventDefault();
  $('.nav-bar').toggleClass('mobile-menu');
  $('.nav-a').toggleClass('mobile-nav');
});

// link to accordian tabs
// https://codepen.io/PreciseSlice/pen/oqENWV
