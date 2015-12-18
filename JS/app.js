"use strict"
$(document).ready(function(){ 

	$('body').on('click','a',function(event){
		event.preventDefault(); 
		$('.paragraphe').hide(); 
		var toto = $(this).attr('href'); 
		$(toto).show();


		$('.close').on('click', function(){
			$(GrosseBoite).hide();
		});
		// var GrosseBoite=$this.attr('href');
		// $(GrosseBoite).show();

		// if (toto=='#GrosseBoite'){
		// 	$('#GrosseBoite').show(); 
		// } else {
		// 	$('.paragraphe').hide();
		// 	$(toto).show();
		// };

	});

//var url ='https://s.idsympa.com/u-9.json'
var url ='user-9.json'

$.getJSON(url, function(data){
	var template = $('#template').html();
	var info = Mustache.to_html(template, data);
	$('body').html(info);
});

});


