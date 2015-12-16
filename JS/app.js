$(document).ready(function(){ 

$('a').on('click',function(){ // quand on clique sur le lien

$('.paragraphe').hide(); // tous les paragraphes sont cachés
	var toto=$(this).attr('href'); // on appelle le paragraphe lié au lien choisi
	$(toto).show(); // on ne montre que le paragraphe lié au lien initial

});
});

	$(function(){
		$.getJSON('http://vps227573.ovh.net/u-9.json', function(donnees) {
			var tata = $('[elt]');
			for (var index = 0; index < tata.length ; index ++){

			var attribut = $(tata[index]).attr('elt'); // attribut peut etre le first name (clé)
			var valeur = donnees [attribut];
			$(tata[index]).html(valeur);
			}
 		});

	});
    

  