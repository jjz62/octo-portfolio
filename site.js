$(window).on('resize', function() {
  if($(window).width() > 864) {
      $('#introduction').addClass('row');
      $('#introduction').removeClass('col-8');
  }else{
      $('#profile-image').addClass('row');
      $('#profile-image').removeClass('col-4');
  }
})