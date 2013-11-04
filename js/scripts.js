// JavaScript Document

$(document).ready(function(){
	$('body').hide('fast').show('slow');
	$('img').click(function() {
		$(this).transition({
  			perspective: '100px',
 			 rotateY: '180deg'
	}, 500, 'easeInQuad').transition( {
			x : '200px'
	});
	});	
});