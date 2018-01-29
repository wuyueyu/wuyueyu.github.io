jQuery(document).ready(function($){
	scroNav = (function() {

		var headNav = $(".headWrap");

		return function() {
			$(document).scroll(function() {
				
				if($(document).scrollTop() > 300) {
					headNav.css({
					})
				}else {
					headNav.css({

					});
				}
			})
		}
	})()

	scroNav();
})