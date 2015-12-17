$(document).ready(function(){ 

$('a').on('click',function(){ // quand on clique sur le lien

$('.paragraphe').hide(); // tous les paragraphes sont cachés
	var toto=$(this).attr('href'); // on appelle le paragraphe lié au lien choisi
	$(toto).show(); // on ne montre que le paragraphe lié au lien initial

});

	// });
// $(function(){
	// 	$.getJSON('http://vps227573.ovh.net/u-9.json', function(donnees) {
	// 		var tata = $('[elt]');
	// 		for (var index = 0; index < tata.length ; index ++){

	// 		var attribut = $(tata[index]).attr('elt'); // attribut peut etre le first name (clé)
	// 		var valeur = donnees [attribut];
	// 		$(tata[index]).html(valeur);
	// 		}
 // 		});

// $.getJSON('http://vps227573.ovh.net/u-9.json', function(data) {
// 		   // var FullName = '{{first_name}} {{last_name}}';
// 		   var FullName = Mustache.to_html('{{first_name}} {{last_name}}', data);
// 		    //var infoFullName = Mustache.to_html(FullName, data);
// 		    $('h1').html(FullName);

// 		    var Occupation = Mustache.to_html('{{occupation}}', data);
// 		    $ ('h3').html(Occupation);
// 		});

 $.getJSON('http://vps227573.ovh.net/u-9.json', function(data){
 	var template = $('#template').html();
 	var info = Mustache.to_html(template, data);
 	$('body').html(info);
 });
	});
    

  