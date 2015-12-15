$(document).ready(function(){ 

$('a').on('click',function(){ // quand on clique sur le lien

$('.paragraphe').hide(); // tous les paragraphes sont cachés
	var toto=$(this).attr('href'); // on appelle le paragraphe lié au lien choisi
	$(toto).show(); // on ne montre que le paragraphe lié au lien initial

});
});
