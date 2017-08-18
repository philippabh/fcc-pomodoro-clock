$(document).ready(function() {
  var buzzer = $('#buzzer')[0];
  var breakLength = parseInt($('#break-length').html(), 10);
  var sessionLength = parseInt($('#session-length').html(), 10);

  $('#session-minus').click(function() {
    if (sessionLength > 0) {
      sessionLength -= 5;
      $('#session-length').html(sessionLength);
    }
    event.preventDefault();
  });

  $('#session-plus').click(function() {
    sessionLength += 5;
    $('#session-length').html(sessionLength);
    event.preventDefault();
  });

  $('#break-minus').click(function() {
    if (breakLength > 0) {
      breakLength -= 1;
      $('#break-length').html(breakLength);
    }
    event.preventDefault();
  });

  $('#break-plus').click(function() {
    breakLength += 1;
    $('#break-length').html(breakLength);
    event.preventDefault();
  });

});
