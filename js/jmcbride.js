var JasonMcBride;
JasonMcBride = JasonMcBride || {};

JasonMcBride.Header = {
	init: function() {
		/* scroll to portfolio */
        var n = $("#moveToWork").click(function(n) {
            n.preventDefault();
            $("html,body").animate({
                scrollTop: $("#portfolio").position().top
            }, 600, function() {
                location.hash = "portfolio"
            })
        })
	}
};

(function(){
	$(function() {
		
		JasonMcBride.Header.init();
		
		if(mainTimer != undefined) {
			clearInterval(mainTimer);
			mainTimer = 0; // I just do this so I know I've cleared the interval
		} 
		
		var mainTimer = setInterval(blink, 5000);
		var $logo = $('.logo');
		$logo.mouseout(closeMouth);
		$logo.mouseover(openMouth);
	});
	
	function blink() {
		var $rightEye = $('#Eye_Right');
		var $leftEye = $('#Eye_Left');
		
		$rightEye.addClass('eyes_close').removeClass('eyes_open');
		$leftEye.addClass('eyes_close').removeClass('eyes_open');
		
		setTimeout(function () {      
			$rightEye.removeClass('eyes_close').addClass('eyes_open');
			$leftEye.removeClass('eyes_close').addClass('eyes_open');
	    }, 200);
		
	};
	
	function openMouth() {
		var $mouth = $('#Mouth');
		$mouth.addClass('openMouth');
	};
	function closeMouth() {
		var $mouth = $('#Mouth');
		$mouth.removeClass('openMouth');
	};
	
})();
