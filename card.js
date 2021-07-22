$('.close').click(function(){
    var $target = $(this).parents('#kt_card_3');
    $target.hide('slow', function(){ $target.remove(); });
  })