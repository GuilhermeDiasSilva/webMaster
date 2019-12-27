//clicar no botao 1 e mudar o paragrafo
document.getElementById('botao1').onclick = function() {
	//adicionar um html no paragrafo
	document.querySelector('p').innerHTML = 'Mudei o texto';
}

//getElementById -> busca por id
//querySelector -> busca por uma TAG


//clicar no botao2 e mudar o paragrafo com jquery
//document.querySelector('h1').innerHTML = 'Olá jQuery';
//(objeto).evento
$(document).ready( function () {
//mudar o que  esta escrito no h1

$('h1').html('Olá jQuery');

//clicar no botao2 mudar o h2
$('#botao2').click( function(){
	$('h2').html('Mudei brô!');

	})

	//esconder o h1 
	$("#esconder").click( function() {
		$("h1").hide();
	})

	//mostrar h1
	$("#mostrar").click( function() {
		$("h1").show();

	})

	//mostrar e esconder
	$("#milagre").click( function() {
		$("h1").toggle('fast');
	})
})