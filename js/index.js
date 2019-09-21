// JavaScript Document
$(window).load(function(){
	$('.split').css('display','none');
	setTimeout(function(){
        $('.split').fadeIn(500);
	},500);
	setTimeout(function(){
        $('.split').fadeOut('slow');
	},3000);
	setTimeout(function(){
		$('.openinglogo').fadeIn('slow');
	},3500);
	setTimeout(function(){
        $('.opening').fadeOut(2000);
	},5500);
});

$(window).scroll(function() {
    $('.opening').fadeOut(500);
});

$(function(){
    $('.opening').click(function() {
        $('.opening').fadeOut(500);
    });
});

$(function(){
    var setElm = $('.split'),
    delaySpeed = 80,
    fadeSpeed = 0;
 
    setText = setElm.html();
 
    setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    $(window).load(function(){
        setTimeout(function(){
            splitLength = $('.textSplitLoad').length;
            setElm.find('.textSplitLoad').each(function(i){
                splitThis = $(this);
                splitTxt = splitThis.text();
                splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
            });
            setTimeout(function(){
                    setElm.html(setText);
            },splitLength*delaySpeed+fadeSpeed);
        },1000);
    });
});

