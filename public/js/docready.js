// run plugins on docready 

;(function($){


  // blurry banner for desktop only
  if(!Modernizr.touch){
    $('#banner').blurScroll({
      blurElement: '#blur',
      opacityElement: '#banner-img'
    })
  }


  // lazy load images
  $('img.lazy').unveil();



  // show banner after page loaded
  window.onload = function(){
    $opacityElem.removeClass('hidden');
  }


})(jQuery);
