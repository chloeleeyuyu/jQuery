$(document).ready(function(){
    var btns = $("#btns :button");
	var pic = $("#pic");

	btns.eq(0).click(function(){
		pic.show(1);
	});
	btns.eq(1).click(function(){
		pic.hide();
	});
	btns.eq(2).click(function(){
		pic.toggle();
	});
	btns.eq(3).click(function(){
		pic.fadeIn();
	});
	btns.eq(4).click(function(){
		pic.fadeOut();
	});
	btns.eq(5).click(function(){
		pic.fadeTo(1000,0.5);
	});
	btns.eq(6).click(function(){
		pic.fadeTo(1000,1);
	});
	btns.eq(7).click(function(){
		pic.fadeToggle();
	});
	btns.eq(8).click(function(){
		pic.slideDown();
	});
	btns.eq(9).click(function(){
		pic.slideUp();
	});
	btns.eq(10).click(function(){
		pic.slideToggle();
	});
});