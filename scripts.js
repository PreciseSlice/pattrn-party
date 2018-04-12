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

$('.accordion-code').on('click', event => {
  event.preventDefault();
  window.open('https://codepen.io/PreciseSlice/pen/oqENWV', '_blank');
});

$('.card-code').on('click', event => {
  event.preventDefault();
  window.open('https://codepen.io/PreciseSlice/pen/ivTWXA', '_blank');
});

$('.nav-code').on('click', event => {
  event.preventDefault();
  window.open('https://codepen.io/PreciseSlice/pen/pwPFJW', '_blank');
});

if (window.innerWidth < 1215) {
  $('.show').insertAfter('.selected-div');
  //$('.tab').children().toggleClass('plus');
  
  $('.selected-div').children().children().toggleClass('minus');

  $('.tab-list').on('click', '.tab', event => {
    $('.show').insertAfter('.selected-div');
    $('.selected-div').children().children().toggleClass('minus');
  })

}
