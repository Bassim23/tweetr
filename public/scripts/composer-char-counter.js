$(document).ready(function() {
  $('.container').on('keyup', 'textarea', function(){
    let text = $(this).val().length;
    let length = 140;
    let counter = $(this).closest('.new-tweet').find('.counter').text(length - text);
    if((length - text) >= 0) {
      counter.css("color", "black")
    } else {
      counter.css("color", "red")
    }
  })
});