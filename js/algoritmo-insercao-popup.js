//ALGORITMO PARA OTIMIZAR A INSERÇÃO DE POPUPS

//Modelo atual:

/* 

var Ambiente2_pop = '<div class="poppy"> <ul class="tabs">'
	+'<h2>Ambiente dos Professores II</h2>'
	+'<li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected">'
		+'<img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">'
		+'<h4>Salas</h4> <p>57, 58, 59, 60, 61</p></div> </li>'
	+'<li id="option2"> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>'
		+'<img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível">'
		+'<h4>Salas</h4> <p>62, 63, 64, 65, 66</p>   </div> </li>'
	+'<li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>'
		+'<img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível">'
		+'<h4>Salas</h4> <p>67, 68, 69, 70, 71</p> </div> </li> </ul> </div>';

*/


//var titulo = "Nome do local";
//var wc0, wc1, wc2 = Booleano;
//var ac0, ac1, ac2 = Booleano;
//var salas0, salas1, salas2 = "Salas listadas aqui";
//var labs0, labs1, labs2 = "Salas listadas aqui";
//var amb0, amb1, amb2 = "Salas listadas aqui";


function InserirPopUp(andares, titulo, wc0, wc1, wc2, ac0, ac1, ac2, salas0, salas1, salas2, labs0, labs1, labs2, amb0, amb1, amb2) {


	function DefinirAcessibilidade(x){
		if (x==0) {
		return 'inacessivel';
		}
		else { 
		return 'acessivel';
		};
	};

	var wc0r = DefinirAcessibilidade(wc0);
	var wc1r = DefinirAcessibilidade(wc1);
	var wc2r = DefinirAcessibilidade(wc2);
	var ac0r = DefinirAcessibilidade(ac0);
	var ac1r = DefinirAcessibilidade(ac1);
	var ac2r = DefinirAcessibilidade(ac2);

console.log(wc0r);
console.log(wc1r);
console.log(wc2r);

	Se (andares == 1) {

		Retorna a string:
		'<div class="poppy"> <ul class="tabs"><h2>' + titulo +
		'<li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"><img id="icone-acessibilidade" src="images/wc-' +
		wc0r + '.png" title="Banheiro' + wc0r + '"><img id="icone-acessibilidade" src="images/' + ac0r + '.png" title="' + ac0r + '"> <h4>Salas</h4> <p>' + salas0 +
		'</p> <h4>Laboratórios</h4> <p>'+ labs0 + '</p> <h4>Outros Ambientes</h4> <p>' + amb0 + '</p> </div> </li></ul> </div>';

	}

	Se (andares == 2) {

		Retorna a string:
		'<div class="poppy"> <ul class="tabs"><h2>' + titulo +
		'<li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"><img id="icone-acessibilidade" src="images/wc-' +
		wc0r + '.png" title="Banheiro' + wc0r + '"><img id="icone-acessibilidade" src="images/' + ac0r + '.png" title="' + ac0r + '"> <h4>Salas</h4> <p>' + salas0 + 
		'</p> <h4>Laboratórios</h4> <p>'+ labs0 + '</p> <h4>Outros Ambientes</h4> <p>' + amb0 + '</p> </div> </li>' +
		'<li id="option2"> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>' + '<img id="icone-acessibilidade" src="images/wc-' +
		wc1r + '.png" title="Banheiro' + wc1r + '"><img id="icone-acessibilidade" src="images/' + ac1r + '.png" title="' + ac1r + '"> <h4>Salas</h4> <p>' + salas1 + 
		'</p> <h4>Laboratórios</h4> <p>'+ labs1 + '</p> <h4>Outros Ambientes</h4> <p>' + amb1 + '</p> </div> </li></ul> </div>';

	}

	Se (andares == 3) {

		Retorna a string:
		'<div class="poppy"> <ul class="tabs"><h2>' + titulo +
		'<li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"><img id="icone-acessibilidade" src="images/wc-' +
		wc0r + '.png" title="Banheiro' + wc0r + '"><img id="icone-acessibilidade" src="images/' + ac0r + '.png" title="' + ac0r + '"> <h4>Salas</h4> <p>' + salas0 + 
		'</p> <h4>Laboratórios</h4> <p>'+ labs0 + '</p> <h4>Outros Ambientes</h4> <p>' + amb0 + '</p> </div> </li>' +
		'<li id="option2"> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>' + '<img id="icone-acessibilidade" src="images/wc-' +
		wc1r + '.png" title="Banheiro' + wc1r + '"><img id="icone-acessibilidade" src="images/' + ac1r + '.png" title="' + ac1r + '"> <h4>Salas</h4> <p>' + salas1 + 
		'</p> <h4>Laboratórios</h4> <p>'+ labs1 + '</p> <h4>Outros Ambientes</h4> <p>' + amb1 + '</p> </div> </li>'+
		'<li id="option3"> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>' + '<img id="icone-acessibilidade" src="images/wc-' +
		wc2r + '.png" title="Banheiro' + wc2r + '"><img id="icone-acessibilidade" src="images/' + ac2r + '.png" title="' + ac2r + '"> <h4>Salas</h4> <p>' + salas2 + 
		'</p> <h4>Laboratórios</h4> <p>'+ labs2 + '</p> <h4>Outros Ambientes</h4> <p>' + amb2 + '</p> </div> </li></ul> </div>';

	}

}