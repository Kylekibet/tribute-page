$('body').scrollspy({ target: '#mainNav' });
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});
