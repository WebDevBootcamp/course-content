$(document).ready(function() {
    $('.navButton').mouseenter(function() {
        $(this).css('background','-webkit-linear-gradient(#4b4b4b, #3a3a3a, #4b4b4b)');
        //$(this).css('background','-moz-linear-gradient(#4b4b4b, #3a3a3a, #4b4b4b)');
        //$(this).css('background','linear-gradient(#4b4b4b, #3a3a3a, #4b4b4b)');
        //$(this).css('background','-o-linear-gradient(#4b4b4b, #3a3a3a, #4b4b4b)');
        var $children = $(this).children('.subMenuNav');
        $children.slideToggle('fast');
    });
    $('.navButton').mouseleave(function() {
        //$(this).css('background','-webkit-linear-gradient(#4b4b4b, #6e6e6e, #4b4b4b)');
        $(this).css('background','none');
        var $children = $(this).children('.subMenuNav');
        $children.slideToggle('fast');
    });
    $('.popUpMenuItem').mouseenter(function() {
        $(this).css('background','#6e6e6e');
    });
    $('.popUpMenuItem').mouseleave(function() {
        $(this).css('background','#4b4b4b');
    });
    $('.tagLine').css('top','0').css('right','100%').css('opacity',0).animate({top:"50%", right:"0",opacity:1}, 2000);
    
	jQuery.fn.rotate = function(degrees) {
	    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
	};

    var interval;
    var rotation = 5;
    var rotObj;
    
    function doRotation() {
        rotObj.rotate(rotation);
        rotation *= -1;
    }
    
	$('.logo img').mouseenter(function() {
	    rotation = 3;
        rotObj = $(this);
        interval = setInterval(doRotation, 100);
	});
    
    $('.logo img').mouseleave(function() {
        clearInterval(interval);
    });
});