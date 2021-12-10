////////////////////////////////////
//            ripples.js
////////////////////////////////////

$(function() {
  $('.RIPPLES div').ripples({
    resolution: 256,
    dropRadius: 20, //px
    perturbance: 0.04,
  });
});

setInterval(function() {
  var $obj = $('body');
  var x = Math.random() * $obj.outerWidth();
  var y = Math.random() * $obj.outerHeight();
  var dropRadius = 20;
  var strength = 0.03 + Math.random() * 0.05;
  $obj.ripples('drop', x, y, dropRadius, strength);
}, 400);
