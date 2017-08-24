$(document).ready(function() {
  var alarm = $('#gentle-alarm')[0];
  var breakLength = parseInt($('#break-length').html(), 10);
  var sessionLength = parseInt($('#session-length').html(), 10);
  var sessionLengthSecs = sessionLength * 60; //turns the chosen minutes into seconds
  var breakLengthSecs = breakLength * 60; //turns the chosen minutes into seconds

  $('#start-countdown').click(function() {
    startSessionCountdown();
    event.preventDefault();
  });



  $('#session-minus').click(function() {
    if (sessionLength > 0) {
      sessionLength -= 1;
      sessionLengthSecs = sessionLength * 60; //turns the chosen minutes into seconds
      $('#session-length').html(sessionLength);
    }
    event.preventDefault();
  });

  $('#session-plus').click(function() {
    sessionLength += 1;
    sessionLengthSecs = sessionLength * 60; //turns the chosen minutes into seconds
    $('#session-length').html(sessionLength);
    event.preventDefault();
  });

  $('#break-minus').click(function() {
    if (breakLength > 0) {
      breakLength -= 1;
      breakLengthSecs = breakLength * 60; //turns the chosen minutes into seconds
      $('#break-length').html(breakLength);
    }
    event.preventDefault();
  });

  $('#break-plus').click(function() {
    breakLength += 1;
    breakLengthSecs = breakLength * 60; //turns the chosen minutes into seconds
    $('#break-length').html(breakLength);
    event.preventDefault();
  });

  function startSessionCountdown() {
    if (sessionLengthSecs > 0) {
      $('#session-minus, #session-plus, #start-countdown, #stop-session-countdown, #stop-break-countdown').hide();
      $('#start-countdown').html('Resume session');
      $('#stop-session-countdown').show();
      if (sessionLength === sessionLengthSecs/60)
        $('#session-length').html(sessionLength + ':00');
      var sessionCountdown = setInterval(function() {
        sessionLengthSecs -=1;
        if (sessionLengthSecs % 60 >= 10)
          $('#session-length').html(Math.floor(sessionLengthSecs/60) + ':' + sessionLengthSecs % 60);
        else $('#session-length').html(Math.floor(sessionLengthSecs/60) + ':' + '0' + sessionLengthSecs % 60);

        if (sessionLengthSecs === 0) {
          $('#stop-session-countdown').hide();
          alarm.play();
          clearInterval(sessionCountdown);

          if (breakLength > 0) {
            startBreakCountdown();
          }
        }
      }, 1000);

      $('#stop-session-countdown').click(function() {
        $(this).hide();
        $('#start-countdown').show();
        clearInterval(sessionCountdown);
      });
    }
  }
  

  function startBreakCountdown() {
    $('#break-minus, #break-plus').hide();
    $('#break-length').html(breakLength + ':00');
    var breakCountdown = setInterval(function() {
      breakLengthSecs -=1;
      if (breakLengthSecs % 60 >= 10)
        $('#break-length').html(Math.floor(breakLengthSecs/60) + ':' + breakLengthSecs % 60);
      else $('#break-length').html(Math.floor(breakLengthSecs/60) + ':' + '0' + breakLengthSecs % 60);

      if (breakLengthSecs === 0) {
        alarm.play();
        clearInterval(breakCountdown);
      }
    }, 1000);
  }

});
