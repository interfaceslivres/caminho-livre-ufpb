/* Modelo para criação da PopUp:

var BlocoX_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Nome",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala 01, Sala 02",
	"Labs 01, Labs 02",
	"Amb 01, Amb02",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala 11, Sala 12",
	"Labs 11, Labs 12",
	"Amb 11, Amb12",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"Sala 21, Sala 22",
	"Labs 21, Labs 22",
	"Amb 21, Amb22"
	);

*/

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
var CCSABloco1_pop = '<div class="poppy"> <ul class="tabs"> <h2>CCSA - Bloco 1</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var CCSABloco2_pop = '<div class="poppy"> <ul class="tabs"> <h2>CCSA - Bloco 2</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var DEMID_pop = '<div class="poppy"> <ul class="tabs"> <h2>DEMID - Departamento de Mídias Digitais</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02</p> <h4>Laboratórios</h4> <p>Laboratório de PCS</p> <h4>Outros Ambientes</h4> <p>Auditório</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Laboratórios</h4> <p>Laboratório de PCS, Laboratório de MACS I e II</p> <h4>Outros Ambientes</h4> <p>Estúdio de Vídeo, Estúdio de Áudio, Coordenação, Administração, Copa, Empresa Júnior, Almoxarifado.</p>   </div> </li> </ul> </div>';
var CEBloco1_pop = '<div class="poppy"> <ul class="tabs"> <h2>CE - Bloco 1</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var CEBloco2_pop = '<div class="poppy"> <ul class="tabs"> <h2>CE - Bloco 2</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var CEBloco3_pop = '<div class="poppy"> <ul class="tabs"> <h2>CE - Bloco 3</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoV_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco V</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T502, T503, T504, T505, T506, T507, T508, T509, T510, T511, T512, T513, T514, T515, T516.</p>  </div> </li>  </ul> </div>';
var Praca_pop = '<div class="poppy"> <ul class="tabs"> <h2>Ambiente dos Professores / Praça da Alegria</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Salas 01 a 17</p> <h4>Outros Ambientes</h4> <p>Praça da Alegria</p></div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Incessível"> <h4>Salas</h4> <p>Salas 18 a 56</p>  </div> </li></ul> </div>';
var BlocoIV_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco IV</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T402, T403, T404, T405, T406, T407, T408.</p> <h4>Outros Ambientes</h4> <p>Direção de Centro, CHIP I.</p> </div> </li> </ul> </div>';
var BlocoD_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco D</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoPsico_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco de Psicologia</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>Empresa Júnior de Psicologia, Salas dos Professores.</p> <h4>Laboratórios</h4> <p>Biotério, Laboratório de Percepção, Neurociências e Comportamento, Laboratório de Neurociência Social, Laboratório de Psicologia Experimental Animal, Programa de Pós Graduação em Psicologia Social, Núcleo de Pesquisa e Desenvolvimento Socio Moral - NPDSM, Núcleo de Estudos PsicoSociais da Exclusão/Inclusão e Direitos Humanos (NEIDH).</p> </li> </ul> </div>';
var BlocoA_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco A</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T417, T418, T419.</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Incessível"> <h4>Salas</h4> <p>420,421,422.</p>  <h4>Outros Ambientes</h4> <p>Coordenação da LEA</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível">  <h4>Salas</h4> <p>423, 424, 425.</p> <h4>Outros Ambientes</h4> <p>Coordenação de Tradução.</p></div> </li> </ul> </div>';
var Auditorios_pop = '<div class="poppy"> <ul class="tabs"> <h2>Auditórios 411 e 412</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Auditório 411, Auditório 412.</p> </li> </ul> </div>';
var BlocoC_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco C</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Programa de pós-graduação em Neurociência Cognitiva e Comportamento, Pós-graduação em Antropologia, Núcleo de Estudos e Pesquisa Afro-brasileiros e Indígenas da UFPB, Coordenação de Libras, Curso de Letras Virtual.</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>Sala de Multimídia</p> <h4>Laboratórios</h4> <p>Laboratório de Estudos e Práticas Sociais LE S, Laboratório de Tradução</p> </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível">  <h4>Salas</h4> <p>Coordenação de Letras Clássicas</p> <h4>Laboratórios</h4> <p>Coordenação de Letras Clássicas, Laboratório de Letras Clássicas, Laboratório de Línguas Estrangeiras Aplicadas as Negociações Internacionais, Laboratório de Ciências Sociais I e II, Laboratório de Psicologia Social Experimental BNCS.</p></div> </li> </ul> </div>';
var BlocoI_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco I</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoJ_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco J</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoK_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco K</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BibliotecaSetorial_pop = '<div class="poppy"> <ul class="tabs"> <h2>Biblioteca Setorial</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Sala de Atendimento ao usuário</p> </div> </li> </ul> </div>';
var ClinicaPsicologia_pop = '<div class="poppy"> <ul class="tabs"> <h2>Clínica de Psicologia</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Salas de Atendimento (0-19), Sala de Uso do Centro, Sala de Estagiários, Sala de Psicólogos, Salas de Supervisão (01-03), Escola de Psicologia</p> <h4>Outros Ambientes</h4> <p>Recepção, Secretaria, Coordenação, Copa</p> </div> </li> </ul> </div>';
var CAs_pop = '<div class="poppy"> <ul class="tabs"> <h2>CAs</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Outros Ambientes</h4> <p>CA Letras, CA Serviço Social, CA História, CA Ciências Sociais, CA Psicologia, Xerox</p> </div> </li></ul> </div>';
var BlocoO_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco O</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoP_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco P</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoQ_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco Q</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var BlocoR_pop = '<div class="poppy"> <ul class="tabs"> <h2>Bloco R</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>T01, T02, T03, T04</p> <h4>Laboratórios</h4> <p>Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p> <h4>Outros Ambientes</h4> <p>Coordenação de Engenharia de Produção</p> </div> </li> <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/inacessivel.png" title="Inacessível"> <h4>Salas</h4> <p>101, 102, 103, 104, 105, 106, 107</p> <h4>Laboratórios</h4> <p>Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p> <h4>Outros Ambientes</h4> <p>Ambientes dos Professores 108, 111 e 112</p>   </div> </li> <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>  <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível">  <h4>Salas</h4> <p>201, 202, 203, 205 e 207</p> <h4>Outros Ambientes</h4> <p>Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p></div> </li> </ul> </div>';
var CentroAdministrativo_pop = '<div class="poppy"> <ul class="tabs"> <h2>CT - Centro Administrativo</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Sala do DECA, Sala de Multimídia, Sala de Reunião 1</p> <h4>Outros Ambientes</h4> <p>Portaria/Protocolo, Coordenação de Engenharia Mecânica, Coordenação de Engenharia Civil, Coordenação de Engenharia de Produção Mecânica, Coordenação de Engenharia de Alimentos, Coordenação de Química Industrial, Coordenação de Arquitetura e Urbanismo, Auditório, PPGAU, Departamento de Engenharia Mecânica, Departamento de Arquitetura e Urbanismo, Departamento de Engenharia Civil e Ambiental (DECA), Departamento de Engenharia de Alimentos, Departamento de Engenharia Química, Coordenação PPGECAM, Coordenação CPGCTA, Secretaria PPGCTA, Secretaria e Diretoria - CT, Acessorias (administrativa e planejamento), Setor de Gestão de Pessoas.</p> </div> </li> </ul> </div>';
var CentroMultimidia_pop = '<div class="poppy"> <ul class="tabs"> <h2>CT - Centro de Multimidia</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Outros Ambientes</h4> <p>Auditório</p> </div> </li> <li id="option2"> <a href="#option2" onclick="menuInterno();">1º Andar</a> <div> <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Outros Ambientes</h4> <p>Auditório</p> </div> </li> <li id="option3"> <a href="#option3" onclick="menuInterno();">2º Andar</a> <div> <img id="icone-acessibilidade" src="images/wc-acessivel.png" title="Banheiro acessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Salas</h4> <p>Sala 5 - PPGAU, Sala 8 - PPGEP, Sala 14 - PPGEM, Sala 15 - PPGEM</p> <h4>Outros Ambientes</h4> <p>PROJEQ (Empresa Júnior - Engenharia Química), Departamento de Engenharia de Materiais.</p> </div> </li> </ul> </div>';
var BlocoH_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Bloco H",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTH 101, CTH 102, CTH 103, CTH 104.",
	"Laboratório de Modelos + Prototipagem (LM+P)",
	"Centro Acadêmico do Curso de Arquitetura e Urbanismo (CACAU), Sala de Ferramentas LM+P",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"AT1, AT2, AT3, AT4, AT5, AT6.",
	"Labs 11, Labs 12",
	"Trama - Escritório Modelo de Arquitetura e Urbanismo",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);


var BlocoE_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"Bloco E",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTE 101, CTE 103, CTE 104, CTE 105.",
	"Laboratório de Topografia",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var BlocoD_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"Bloco D",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTD 101, CTD 103, CTD 105, CTD 107",
	"-",
	"Otimize Consultoria (Empresa Júnior de Engenharia de Produção)",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var BlocoFG_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Bloco F/G",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTF 101, CTF 102, CTF 103 (Sala de aula - PPGCTA), Sala Acácia, Sala de estudo, Sala Eucaliptos, Sala Bouganville, Sala 14 (GESP). AMBIENTE DOS PROFESSORES: Sala 01 (Profª Christine Werba), Sala 02 (Profª Ivanize Cláudia dos Santos), Sala 03 (Profª Dra. Lenita Lessa), Sala 04 (Profª Msc. Luzia Goes Camboim), Sala 05 (Profª Juliana Gonçalves; Profª Dra. Márcia Souto), Sala 06 (Profª Dra. Aurélia Idrogo; Prof. Msc. Jonas Paiva; Prof. Dr. Miguel Otávio), Sala 07 (Profª Maria Bernadete; Prof. Antônio Coutinho), Sala 08 (Prof. Dr. Ivson F. dos Anjos; Prof. Msc. Múcio Souto), Sala 09 (Prof. PhD Francisco Másculo; Prof. Dr. Luciano Costa Santos), Sala 10 (Prof. Jailson Ribeiro; Profª Dra. Sandra Marioka), Sala 11 (Profª Maria de Lourdes; Prof. Ricardo Moreira - Grupo de Pesquisa: Produção, Estratégia, Tecnologia e Trabalho), Sala 13 (Profª Maria Silene - Grupo de Pesquisa: Complexidade & Organização).",
	"Laboratório de Informática - INFOLAB, LADEPI/GPROPI",
	"Coordenação PPGEM, Copa dos professores, Secretaria do Departamento de Engenharia de Produção, Secretaria do PPGEP, Auditório Dr. Antônio Souto Coutinho.",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala Xique-xique, Sala Mandacaru.",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var BlocoN_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"Bloco N",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTN 101, CTN 102, CTN 103.",
	"LECCUR (Laboratório de Estudos sobre Cidades, Culturas Contemporâneas e Urbanidades), LACESSE (Laboratório de Acessibilidade), LAMFIC (Laboratório de Modelos Físicos Qualitativos e Computacionais), LAMAB (Laboratório de Materiais e Biossistemas).",
	"Copa dos funcionários da limpeza.",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var LabInformatica_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Laboratório de Informática / Ambiente dos Professores",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala: Profª Dra. Helenice Duarte de Holanda e Profª Dra. Stela de Lourdes Ribeiro de Medonça; Sala: Prof. Jovanka Baracuhy Scocuglia; Sala: Profª Dra. Esmeralda Paranhas dos Santos e Prof. Dr. Ricardo Targino Moreira; Sala: Profª Dra. Edilma Pinto Coutinho e Prof. Dr. Yuri Montenegro Ishihara.",
	"Labgraf 2, Labgraf 3, Labgraf 4, Laboratório de Planejamento de Transportes.",
	"Pracinha do CT, Lanchonete Dona Nena, Xerox, Planej (Empresa Júnior de Arquitetura e Engenharia Civil), Coordenação do Laboratório de Informática, Suporte do Laboratório de Informática.",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala de Estudos PPGCTA; Sala: Prof. Claudino Lins, Prof. Fábio Lopes e Prof. Paulo Cabral; CT Empreendedor (Prof. Antônio Gualberto e Prof. Orlando Vilar)/Sala 19 (Prof. Anand Subramanian, Prof. Fábio Morais Borges, Prof. Marcel de Gois Pinto); Sala 40: Prof. Dr. Heinz Johann Holschuh e Prof. Dr. Marcelo Barbosa Muniz; Sala 41: Prof. Antônio Luiz de Albuquerque Gomes e Prof. Geraldo Dantas Silvestre Filho; Sala 43: Profª Berthilde Moura, Prof. Marco Coutinho, Profª Patrícia Alonso e Profª Wylnna Vidal; Sala: Profª Dra. Cláudia Torres, Prof. Dr. Antônio Francisco e Prof. Msc. Alexandre Azedo; Amb. 48: Prof. Dr. José Soares, Prof. Dr. Raul Rosenhaim e Prof. Dr. Rennio Felix de Senna; Sala: Frederico A. Melo do Vale e Romualdo Campos da Fonseca;  Sala: Prof. Dr. Paulo Henrique M. Montenegro.",
	"LPPM 1, LARHENA",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var LabAnaliseAlimentos_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"Laboratório de Análise de Alimentos",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Microbiologia de Alimentos, Laboratório de Bioquímica de Alimentos, Laboratório de Pescado, Laboratório de Apoio, Laboratório de Flavor, Laboratório de Química de Alimentos, Laboratório de Tecnologia de Panificação e Massas Alimentícias, Laboratório de Processos Microbianos do Alimento.",
	"Almoxarifado, Copa",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CAEngenhariaMecanica_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA de Engenharia Mecânica",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"-",
	"COPIAX (Xerox e encadernação), CA Engenharia Mecânica",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CAEngenhariaCivil_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA de Engenharia Civil",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"-",
	"Xerox, CA Engenharia Civil, Lanchonete.",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var OficinaMecanica_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Oficina Mecânica",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Inovação",
	"Oficina mecânica",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var Galpao_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Galpão",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala de Acústica",
	"-",
	"Projeto Motorius",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala do Prof. Virgílio",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CTBlocoA_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CT - Bloco A",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTA 101, CTA 103, CTA 105, CTA 107",
	"Laboratório de Hidropneumática",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CTBlocoB_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CT - Bloco B",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1) 
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTB 101, CTB 102, CTB 103, CTB 105, CTB 107",
	"Laboratório de Cromatografia e Quimiometria de Alimentos, Laboratório de Produto Fermento Destilado",
	"Centro Acadêmico  - Engenharia de Alimentos, AEOROJAMPA - AERO DESIGN, Empresa Junior Acessoria - Engenharia de Alimentos, Departamento de Tecnologia Química e Alimentos",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1) 
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1) 
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CTBlocoC_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CT - Bloco C",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Tecnologia de Alimentos - Controle de Qualidade, Laboratório de Tecnologia de Alimentos - Processamento, Laboratório de Análise e Pesquisas de Bebidas Alcoólicas, Laboratório de Engenharia de Alimentos, Laboratório de Análise Sensorial",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var BlocoEletrica_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Bloco Elétrica",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Carvão Aditivado: produção; Laboratório de Carvão Aditivado: análises; Laboratório de Automação e Controle; Laboratório de Conformação Mecânica; Laboratório de Tratamento Térmico; Laboratório de Dinâmica; Laboratório de Ensaios Mecânicos",
	"Coordenação do Laboratório de Tratamento Térmico",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala de Multimídia",
	"Laboratório de Representações Gráficas; Laboratório de Motores de Combustão Interna; Laboratório de Termoenergética; Laboratório de Instrumentação e Controle (LINC); Laboratório de Transferência de Calor e Massa/Laboratório de Refrigeração e Ar Condicionado (LABREFRIG); Laboratório de Metrologia Dimensional (METROMEC); LabGraf B - Representações Gráficas; Laboratório de Máquinas e Acionamentos Elétricos (LABMAC)",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var LabPPHL_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"Laboratório PPHL",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório Piloto de Química, Laboratório de Microbiologia, Laboratório de Tecnologia Química",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var LabEEHS_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"Lab de Ef. Energética e Hidráulica em Saneamento",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Eficiência Energética e Hidráulica em Saneamento",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var BibliotecaCentralCT_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Biblioteca Setorial do CT",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"-",
	"Biblioteca Setorial CT - Profº. Orlando Villar",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	1, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala de Professores - Engenharia Química",
	"Laboratório de Pesquisa Projeto e Memória 2, Laboratório de Microengenharia, Laboratório de Métodos Quantitativos Aplicados, Laboratório - Engenharia de Alimentos, Laboratório de Pesquisa em Sistemas Ambientais Urbano",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CTBlocoM_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	3,
	//Nome do prédio
	"CT - Bloco M",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Materiais Cerâmicos, Laboratório de Materiais Metálicos, Laboratório de Ciderurgia, Laboratório de Materiais Polímeros ",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	1, 1,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"Laboratório de Eletrônica Analógica e Digital, Laboratório de Automação e Controle, Laboratório de Eletrotécnica, Laboratório de Materiais e Instrumentação, Laboratório de Máquinas e Acionamentos",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	1, 1,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"CTM 201, CTM 202, CTM 203, CTM 204, CTM 205",
	"-",
	"-"
	);

var CTBlocoK_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	3,
	//Nome do prédio
	"CT - Bloco K",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"Laboratório de Engenharia de Precisão",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	1, 1,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"Laboratório de  Processamento de Sinais, Laboratório de Otimização de Sistema de Energia",
	"Grupo de Pesquisa em Inteligência Computacional Aplicada, Ambiente de Professores - Profº. Antônio Augusto, Profº. Antônio Sérgio, Profº. Clinaldo Araújo",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	1, 1,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"CTK 201, CTK 202",
	"Laboratório de Simulação de Processos Discretos, Laboratório de Análise de Trabalho",
	"Ambiente de Professores - Profº. Helon David de Macedo Braz, Profº. Rafael de Sousa Marinho, Profº. Romero Leandro Andersen"
	);

var LabEME_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Laboratório de Ensaio de Materiais e Estruturas / Núcleo de Estudos e Pesquisas em Materiais",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala do Programa de Pós-graduação em Engenharia Civil e Ambiental, Sala de Aula do Laboratório de Materiais e Produtos Cerâmicos",
	"Laboratório de Saneamento, Laboratório de Geotecnia e Pavimentação, Laboratório de Materiais e Produtos Cerâmicos, Laboratório de Análise Estrutural e Avaliação de Desempenho, Laboratório de Ensaio de Materiais e Estruturas",
	"Coordenação do Laboratório de Saneamento, Laboratório de Geotecnia e Pavimentação, Copa, Almoxarifado",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Sala Multimídia, Sala de Estudos, Sala dos Técnicos, Sala do Profº. Tadeu Antônio de Azevedo Melo, Salas de Professores",
	"Laboratório de Solidificação Rápida, Laboratório de Ensaios Mecânicos, Laboratório de Processamento de Materiais, Laboratório de Caracterização Microestrutural, Laboratório de Metalografia, Laboratório de Química, Laboratório de Análise Térmica",
	"Coordenação do Laboratório de Solidificação Rápida ",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CTBlocoL_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CT - Bloco L",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"-",
	"WC Masculino, WC Feminino",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CTBlocoJ_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	3,
	//Nome do prédio
	"CT - Bloco J",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CTJ T01, CTJ T102, CTJ T03, CTJ T07, Coordenação de Engenharia de Produção",
	"Laboratório de Termodinâmica, Laboratório de Reatores Químicas, Laboratório de Operações Unitárias, Laboratório de Bioengenharia, Laboratório de Modelagem em Materiais, Laboratório de Tecnologia de Carnes e Derivados, Laboratório de Leite e Derivados",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	1, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"CTJ 101, CTJ 102, CTJ 103, CTJ 104, CTJ 105, CTJ 106, CTJ 107, CTJ 111 - Ambiente de Professores: Profº. Genari Clericuzi, Profª.Karla Silvana Sousa, Profª. Veruscka Silva",
	"Laboratório de Modelagem Computacional e Controle de Processos, Laboratório de Fenômenos de Transportes, Laboratório de Petróleo ",
	"Ambiente de Professores - Engenharia Química: Profº. Alfredo Ismael Curbelo Garnica, Profª. Fabíola Dias da Silva Curbelo; Ambiente de Professores - Engenharia Química: Profº. Flávio Luiz Honorato, Profª. Josilene Assis Cavalcante, Profº. Nagel Alves Costa, Profª. Sharline Florentino de Melo Santos, Profª. Vivian Stumpf Madeira",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	1, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"CTJ 201, CTJ 202, CTJ 203; CTJ 204 - Departamento/ Coordenação de Engenharia Elétrica; CTJ 205 - Sala dos Professores - Centro de Energias Alternativas e Renováveis: Profº. Alexandre Castro, Profº. Darlan Alexandria, Profº. Rogério Gaspar; CTJ 206 - Departamento de Engenharia de Materiais; CTJ 207 - Sala dos Professores: Profª. Lucineide Balbino da Silva, Profª. Renata Maria Ramos Wellen, Profº. Tibério Andrade Passos; CTJ 208 - Coordenação do Curso de Engenharia Ambiental; CTJ 209 - Coordenação de Engenharia Química; CTJ 210 - Ambiente de Professores - Engenharia de Materiais; CTJ 211 - Sala dos Professores - Centro de Energias Alternativas e Renováveis: Profº. Carlos Alberto, Profº. Juan Maurício, Profª. Nady Costa; CTJ 212 - Sala dos Professores - Engenharia Ambiental e Engenharia Civil; CTJ 214 - Sala dos Professores: Profº. Fabiano Salvatori, Profº. Lucas Hartmann; CTJ 215 - Sala dos Professores - Centro de Energias Alternativas e Renováveis: Profº.  Euder Macedo, Profº. Fabrício Braga; CTJ 216 - Sala dos Professores: Profº. Gilson Barbosa Athayde Júnior, Profº. Joácio de Araújo Morais Júnio, Profº. Leonardo Vieira Soares; CTJ 217 - Sala dos Professores: Profº. Danniel Ferreira de Oliveira, Profº. Heber Sivini Ferreira, Profº. Ramon Alves Torquato; CTJ 218 - Coordenação de Engenharia de Materiais; CTJ 220 - Sala dos Professores: Profª. Alessandra Berenguer de Morais, Profº. Claúdio Ruy Portela de Vasconcelos, Profº. Jonas Alves Paiva; CTJ 221 - Sala dos Professores: Amélia Severino Ferreira Santos, Profª. Daniele Gueres de Lima Cavalcante, Profª. Itamara Farias Leite",
	"Laboratório de Engenharia de Sustentabilidade e Consumo",
	"-"
	);

var CABlocoA_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco A",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAA 101, CAA 102, CAA 103, CAA 104, CAA 105, CAA 106",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoB_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco B",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAB 101, CAB 102, CAB 103, CAB 104, CAB 105, CAB 106, CAB 107.",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoC_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco C",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala de administração, CAC 107, CAC 108",
	"Laboratório de Inclusão Digital (LID)",
	"Auditório I, auditório II, PNAIC",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoD_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco D",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAD 101, CAD 102, CAD 103, CAD 104, CAD 105, CAD 106, CAD 107, CAD 108, CAD 109, CAD 110, CAD 111.",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoE_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco E",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAE 101, CAE 102, CAE 103, CAE 104, CAE 105, CAE 106, CAE 107, CAE 108, CAE 109, CAE 110, CAE 111.",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoF_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco F",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAF 101, CAF 102, CAF 103, CAF 104, CAF 105, CAF 106, CAF 107, CAF 108, CAF 109, CAF 110, CAF 111.",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoG_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco G",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAG 101, CAG 102, CAG 103, CAG 104, CAG 105, CAG 106",
	"-",
	"Núcleo de documentação e informação histórica regional - NDIHR",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoH_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco H",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CAH 101, CAH 102, CAH 103, CAH 104, CAH 105, CAH 106, CAH 107, CAH 108.",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CABlocoI_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	1,
	//Nome do prédio
	"CA - Bloco I",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 0,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"CE 313, CE 314, CCSA 212, CCHLA 412, CCHLA 413, CCHLA 414, CCHLA 415, CCHLA 416.",
	"-",
	"-",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"-",
	"-",
	"-",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var CCJ_pop = InserirPopUp(
	//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"CCJ",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	1, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala de aula 10, sala de reuniões e professores, pesquisa científica 1, pesquisa científica 2, extensão universitária, assessorias acadêmicas, assessoria de informática e manutenção, coordenação de graduação, departamento de direito público - DDPu, departamento de direito provado - DDPr, departamento de direito processual e prática jurídica, coordenação de monografia, secretaria de direção de centro.",
	"Linjur - Lab. de informática jurídica, Lab. de pesquisas online e periódicos",
	"Portaria, auditório, recepção do auditório, biblioteca, ambiente dos professores DDPPJ, ambiente dos professores DDPr, ambiente dos professores DDPu, ambiente do pessoal de apoio, copa, almoxarifado.",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	1, 1,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Salas de aula 1-9, sala de multimídia, arquivo, Programa de pós-graduação em ciências jurídicas (mestrado e doutorado)",
	"-",
	"Reprografia (xerox)",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var ElefanteBrancoBlocoI_pop = InserirPopUp(
		//Número de Andares (1,2,3)
	2,
	//Nome do prédio
	"Elefante Branco - Bloco I",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"Sala de Triagem, Sala Maria Adeilda do Nascimento Carneiro, Salas de aula: 101 a 107 ",
	"Laboratório de Técnicas de Enfermagem - Profª Anaísa Lins Batista, Laboratório Didático de Dentística Laboratorial, Laboratório Didático de Prótese Fixa, Laboratório Didático de Prótese Total, Laboratório Didático de Oclusão, Laboratório de Informática do CCS, Laboratório de Estudo do Equilíbrio, dinamometria e eletromiografia (LEEDE), Laboratório de Ergoespirometria, Laboratório de Análise do Desenvolvimento Humano (LAHM), Laboratório de Pesquisa Básica em Fisioterapia  ",
	"Clínica de Estomatologia, Setor de Radiologia Odontológica, Xerox, Setor RH do CCS, Núcleo de Pesquisa em Ciências do Movimento Humano",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 1,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Salas 133, 134, 135, 136, 139, 144, 145, 146, 147, 173, Sala de Expedição de Resultados, Sala Material Liac, Salas de aula do D.C.F 01 e 02",
	"Laboratório de Análises Clínicas, Laboratório de Parasitologia, Laboratório de Farmacognosia, Laboratório de Micologia, Laboratório de Imunologia Clínica, Laboratório de Farmacotécnica, Laboratório de Clínica Farmacêutica, Laboratório de Hematologia, Laboratório 132, Laboratório de Bioquímica, Laboratório de Pesquisa: Atividade Antibacteriana e Antifungica de Produtos Naturais e/ou Sintéticos Bioativos",
	"Almoxarifado",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"-",
	"-",
	"-"
	);

var ElefanteBrancoBlocoII_pop = InserirPopUp(
//Número de Andares (1,2,3)
	3,
	//Nome do prédio
	"Elefante Branco - Bloco II",
	//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
	0, 1,
	//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
	"-",
	"-",
	"Departamento de Odontologia Restauradora CCS; Coordenação de Pós-graduação Odontologia; Núcleo de Pesquisa em Bioética - NEPB",
	//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
	0, 0,
	//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
	"Salas próximas ao Departamento de Fisioterapia: Sala 1, sala 2, sala 3 – Disciplina de Saúde Coletiva, sala 4, sala 5, sala 6, sala 7, sala 8, sala 9 – Sala de Reunião, Salas próximas ao departamento de Ciências Farmacêuticas: Sala de aula 1 e 2, Sala Profª Silvana Teresa L. Jales e Profº José Damião C. Borba, Sala Dr. Lauro Santos Filho e Dra. Isabele Beserra S. Gomes, Sala Profº Dr. João Vianney M. S. S. Maior e Profª Dra. Luciana Aranha. ",
	"Laboratório de Biologia Bucal, Laboratório de Biomateriais I, Laboratório de Biomateriais II",
	"Departamento de Fisioterapia, Núcleo de Estudos e Pesquisas Interdisciplinares em Biomateriais – NEPIBIO, Banco de Dentes Humanos BDH/CCS, Comitê de Ética em Pesquisa do CCS, Ambiente Docente – Professor Fábio Correia Sampaio, Ambiente Docente (sem identificação), Copa, 2 Auditórios (sem identificação), Grupo de Pesquisa em Biomateriais – GEPIBIO, Coordenação do Estágio Supervisionado em Análises Clínicas, Departamento de Ciências Farmacêuticas, Chefia do Departamento de Ciências Farmacêuticas",
	//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
	0, 0,
	//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
	"Sala Mestrado em Ciências da Nutrição.Próximo ao departamento de nutrição: Sala dos professores. Próximo ao departamento de enfermagem em saúde coletiva: Ambiente docente, sala 1 e 2 - Enfermagem Saúde Pública, sala 1 e 2 - Enfermagem Clínica Pediátrica, sala Enfermagem Obstétrica, sala Enfermagem Psiquiátrica, Sala de reunião. Próximo ao Núcleo de Estudos em Saúde Coletiva: Sala Epidemiologia, sala de Planejamento e gestão, sala Saúde Mental, sala Pós-graduação, especialização e residência, sala Educação em Saúde, sala Saúde e Trabalho ",
	"-",
	"Departamento de Nutrição, Sala de audio-visual, Cantina, Chefia do Departamento de Nutrição, Departamento de Enfermagem em Saúde Coletiva, Copa, Auditório, Núcleo de Estudos em Saúde Coletiva - NESC, Coordenação do NESC, Secretaria do Estágio Rural Integrado - ERI , Coordenação do ERI, Auditório do ERI"
	);

var CEBlocoC_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CE - Bloco C",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var CEBlocoAdministrativo_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CE - Bloco Administrativo",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var CEBlocoA_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CE - Bloco A",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var CEBlocoB_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CE - Bloco B",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var BlocoDeFonoaudiologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco de Fonoaudiologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var AnexoAResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Anexo A - Residência Universitária",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var BlocoDeTerapiaOcupacional_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco de Terapia Ocupacional",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var BlocoAResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco A - Residência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var AuditorioDeTerapiaOcupacional_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Auditório de Terapia Ocupacional",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var BlocoBResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco B - Residência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var CRAS_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CRAs",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var BlocoBAnexoResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco B - Anexo Residência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Labs 01, Labs 02",
"Amb 01, Amb02",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala 11, Sala 12",
"Labs 11, Labs 12",
"Amb 11, Amb12",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);




var notFound_pop = '<div class="poppy"> <ul class="tabs"> <h2>Local não encontrado</h2> <li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">.</a> <div class="selected"> <img id="icone-acessibilidade" src="images/wc-inacessivel.png" title="Banheiro inacessível"><img id="icone-acessibilidade" src="images/acessivel.png" title="Acessível"> <h4>Bloco não encontrado</h4> <p>Tente utilizar outra palavra-chave na busca.</p> </div> </li> </ul> </div>';

// mudar a classe dos itens do menu interno do popup
function menuInterno() {
		  event.preventDefault();
		  var link = $(event.target).attr("href") + " div";
		  var focus = $(event.target).attr("href") + " a";
            $(".tabs li div").removeClass('selected');
            $(link).addClass('selected');
            $(".tabs li a").removeClass('onFocus');
            $(focus).addClass('onFocus');
		}

function InserirPopUp(andares, titulo, wc0, ac0, salas0, labs0, amb0, wc1, ac1, salas1, labs1, amb1, wc2, ac2, salas2, labs2, amb2) {


	function DefinirAcessibilidade(x){
		if (x==0) {
		return 'in';
		}
		else { 
		return '';
		};
	};

	var wc0r = DefinirAcessibilidade(wc0);
	var wc1r = DefinirAcessibilidade(wc1);
	var wc2r = DefinirAcessibilidade(wc2);
	var ac0r = DefinirAcessibilidade(ac0);
	var ac1r = DefinirAcessibilidade(ac1);
	var ac2r = DefinirAcessibilidade(ac2);


		if (andares == 1) {

			return '<div class="poppy"> <ul class="tabs"><h2>' + titulo +
			'</h2><li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"><img id="icone-acessibilidade" src="images/wc-' +
			wc0r + 'acessivel.png" title="Banheiro ' + wc0r + 'acessível"><img id="icone-acessibilidade" src="images/' + ac0r + 'acessivel.png" title="' + ac0r + 'acessível"> <h4>Salas</h4> <p>' + salas0 +
			'</p> <h4>Laboratórios</h4> <p>'+ labs0 + '</p> <h4>Outros Ambientes</h4> <p>' + amb0 + '</p> </div> </li></ul> </div>';

		}

		if (andares == 2) {

			return '<div class="poppy"> <ul class="tabs"><h2>' + titulo +
			'</h2><li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"><img id="icone-acessibilidade" src="images/wc-' +
			wc0r + 'acessivel.png" title="Banheiro ' + wc0r + 'acessível"><img id="icone-acessibilidade" src="images/' + ac0r + 'acessivel.png" title="' + ac0r + 'acessível"> <h4>Salas</h4> <p>' + salas0 + 
			'</p> <h4>Laboratórios</h4> <p>'+ labs0 + '</p> <h4>Outros Ambientes</h4> <p>' + amb0 + '</p> </div> </li>' +
			'<li id="option2"> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>' + '<img id="icone-acessibilidade" src="images/wc-' +
			wc1r + 'acessivel.png" title="Banheiro ' + wc1r + 'acessível"><img id="icone-acessibilidade" src="images/' + ac1r + 'acessivel.png" title="' + ac1r + 'acessível"> <h4>Salas</h4> <p>' + salas1 + 
			'</p> <h4>Laboratórios</h4> <p>'+ labs1 + '</p> <h4>Outros Ambientes</h4> <p>' + amb1 + '</p> </div> </li></ul> </div>';

		}

		if (andares == 3) {
			
			return '<div class="poppy"> <ul class="tabs"><h2>' + titulo +
			'</h2><li id="option1"> <a href="#option1" id="button1" class="onFocus" onclick="menuInterno();">Térreo</a> <div class="selected"><img id="icone-acessibilidade" src="images/wc-' +
			wc0r + 'acessivel.png" title="Banheiro ' + wc0r + 'acessível"><img id="icone-acessibilidade" src="images/' + ac0r + 'acessivel.png" title="' + ac0r + 'acessível"> <h4>Salas</h4> <p>' + salas0 + 
			'</p> <h4>Laboratórios</h4> <p>'+ labs0 + '</p> <h4>Outros Ambientes</h4> <p>' + amb0 + '</p> </div> </li>' +
			'<li id="option2"> <a href=#option2 onclick="menuInterno();">1º Andar</a> <div>' + '<img id="icone-acessibilidade" src="images/wc-' +
			wc1r + 'acessivel.png" title="Banheiro ' + wc1r + 'acessível"><img id="icone-acessibilidade" src="images/' + ac1r + 'acessivel.png" title="' + ac1r + 'acessível"> <h4>Salas</h4> <p>' + salas1 + 
			'</p> <h4>Laboratórios</h4> <p>'+ labs1 + '</p> <h4>Outros Ambientes</h4> <p>' + amb1 + '</p> </div> </li>'+
			'<li id="option3"> <a href=#option3 onclick="menuInterno();">2º Andar</a> <div>' + '<img id="icone-acessibilidade" src="images/wc-' +
			wc2r + 'acessivel.png" title="Banheiro ' + wc2r + 'acessível"><img id="icone-acessibilidade" src="images/' + ac2r + 'acesivel.png" title="' + ac2r + 'acessível"> <h4>Salas</h4> <p>' + salas2 + 
			'</p> <h4>Laboratórios</h4> <p>'+ labs2 + '</p> <h4>Outros Ambientes</h4> <p>' + amb2 + '</p> </div> </li></ul> </div>';

		}

};


//MODELO

/* <div class=poppy>
    <ul class=tabs>
        <h2>Bloco J - Centro de Tecnologia</h2>
        <li id="option1"> <a href="#option1" id="button1" onclick="menuInterno();">Térreo</a>
            <div>
                <p>Salas: T01, T02, T03, T04</p>
                <p>Laboratórios: Laboratório de Bioengenharia, Laboratório de Engenharia de Alimentos, Laboratório de Operações Unitárias, Laboratório de Modelagem</p>
                <p>Outros Ambientes: Coordenação de Engenharia de Produção</p>
            </div>
        </li>
        <li id=option2> <a href=#option2 onclick="menuInterno();">1º Andar</a>
            <div>
                <p>Salas: 101, 102, 103, 104, 105, 106, 107</p>
                <p>Laboratórios: Laboratório de Fenômenos dos Transportes, Laboratório de Modelagem e Laboratório de Petróleo</p>
                <p>Outros Ambientes: Ambientes dos Professores 108, 111 e 112</p>
            </div>
        </li>
        <li id=option3> <a href=#option3 onclick="menuInterno();">2º Andar</a>
            <div>
                <p>Salas: 201, 202, 203, 205 e 207</p>
                <p>Outros Ambientes: Departamento de Engenharia Elétrica, Departamento de Materiais, Coordenação de Engenharia de Materiais, Coordenação de Engenharia Ambiental, Coordenação de Engenharia Química e Ambiente dos Professores 210, 211, 212, 213, 214, 215, 216, 217, 219, 220 e 221.</p>
            </div>
        </li>
    </ul>
</div> */
