$( function(){

    var scrollTop = $(window).scrollTop();

    function lol( $this ) {
      var translate = (scrollTop - $($this).data('orig-offset')) / $(window).height() * 250;
      $($this).css({transform: 'translate3d(0,' + translate +'%'+', 0)'});
    }

    $('.parallax-text').each( function() {
      $(this).data('orig-offset', $(this).offset().top);
      lol( $(this) );
    });

    $(window).scroll( function() {
      scrollTop = $(window).scrollTop();

      $('.parallax-text').each( function() {
        lol( $(this) );
      });
    });

  $(window).on('resize', function () {
    scrollTop = $(window).scrollTop();

    $('.parallax-text').each( function() {
      $(this).data('orig-offset', $(this).offset().top);
      lol( $(this) );
    });
  });

});
