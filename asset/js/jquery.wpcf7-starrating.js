/*
 ### jQuery Star Rating Plugin v1.0 - 2014-04-29 ###
    * Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
*/

;
(function($) {
    $(document).ready(function() {             
        $('.starratingawesome input').click(function() {            
            var set = $(this).parent() ;            
            set.find('.starrating_number').html($(this).val()) ;
        });
    });
})(jQuery);
        