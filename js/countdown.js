
  $('.countdown').countdown('2018/09/25 00:09:00', function(event) {
 var $this = $(this).html(event.strftime(''
   + '<div class="date">%m <span>Months</span></div>  '
   + '<div class="date">%n <span>Days</span></div> '
   + '<div class="date">%H <span>Hours</span></div>  '
   + '<div class="date">%M <span>Minutes</span></div>  '
   + '<div class="date">%S <span>Seconds</span></div> '));
});