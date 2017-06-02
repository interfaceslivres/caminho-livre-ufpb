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

var LabAnaliseAlimentos_pop = InserirPopUp(
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

var CAEngenhariaMecanica_pop = InserirPopUp(
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

var CAEngenhariaCivil_pop = InserirPopUp(
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

var OficinaMecanica_pop = InserirPopUp(
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

var Galpao_pop = InserirPopUp(
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

var CTBlocoA_pop = InserirPopUp(
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

var CTBlocoB_pop = InserirPopUp(
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
