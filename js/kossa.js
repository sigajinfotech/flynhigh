jQuery(document).ready(function($) {

	$(".cd-primary-nav a").mouseover(function(){//  executer lors du sorvol
		var _this = $(this),
			img   = _this.data('bg-img'),
			_bg	  = $('.cd-primary-nav');

		console.log(_bg);
		console.log(img);
		_bg.css('background-image', 'url('+img+')');


	});
});