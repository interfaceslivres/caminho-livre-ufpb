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
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 8; Sala de Reunião Prof. Vanildo; Sala de Estudo e Pesquisa Prof. Onelice de Medeiros Barros",
"LAD - Laboratório de Aprendizagens Digitais",
"Biblioteca Setorial; Ambiente 36; Programa de Pós Graduação em Ciências das Religiões",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala do Servidor/Assessoria de Informática; Sala de Manutenção",
"-",
"Ambiente 1; Ambiente 2 (Grupo de Estudos Transdisciplinares em Educação e Saúde - GERES); Ambiente (Grupo de Estudos e Pesquisas em Políticas Curriculares - GEPPC); Ambientes 3-11; Ambiente 12 (Coordenação do Curso de Graduação em Ciências Naturais - Licenciatura à Distância); Ambiente 13 (Coordenação Secretaria); Ambientes 14-15; Ambiente 16 (Ambiente de Professores do DME); Ambientes 17-33; Ambiente 35; Ambientes 37-42",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var CEBlocoAdministrativo_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"CE - Bloco Administrativo",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas 301-310",
"LABEC - Laboratório de Ensino de Ciências; LATED 2 - Laboratório de Tecnologia Educacional (Brinquedoteca)",
"Coordenação da Graduação em Ciências das Religiões; Departamento em Ciências das Religiões; Recursos Humanos; Secretaria MPGOA; DME - Departamento de Metodologia; DFE - Departamento de Fundamentação da Educação; Ante-Sala (Direção/Vice-Direção/Secretaria); DHP - Departamento de Habilitações Pedagógicas; Núcleo de EJA; Coordenação de Pedagogia; CPD - Centro de Processamento de Dados; Almoxarifado Setorial e Patrimônio; Ilha Virtual - Internautas do CE. Cubículo 1 - Banheiros Masculino e Feminino com Acessibilidade. Cubículo 2 - DA Pedagogia ",
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

var CEBlocoA_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CE - Bloco A",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas CE 315-316; Salas PPGE 2, 4, 5; Salas Sem Nome 1-2",
"-",
"Cátedra Unesco de Educação de Jovens e Adultos; Grupo de Pesquisa - HISTED - BR - PB; Revistas Temas em Educação",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas CE 317-320",
"-",
"Coordenação do PPGE; Secretaria do PPGE; Laboratório do PPGE; Auditório do PPGE; Sala de Arquivos",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var CEBlocoB_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CE - Bloco B",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas CE 321-322",
"-",
"Departamento de Educação do Campo/Coordenação de Pedagogia; Coordenação e Departamento/Secretaria de Psicopedagogia; Núcleo de Educação Especial (NEDESP)/Sala de Estudos; Setor Braille (Atendimento ao Aluno com Deficiência Visual); Polo Digital (Biblioteca Digital Paulo Freire); Coordenação do MPGOA (Mestrado Profissional em Gestão nas Organizações Aprendentes) ",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas 323-324",
"LLP/MPGOA - Laboratório das Linhas de Pesquisa/Mestrado Profissional em Gestão nas Organizações Aprendentes; Laboratório de Avaliação em Psicologia e Educação; Laboratório Virtual de Ciências Naturais; ",
"Núcleo de Estudos em Saúde Mental, Educação e Psicometria; Gestão de Projetos - PPGOA; Núcleo de Estudos em Desenvolvimento Humano, Educacional e Social; Escola Zé Peão; NIPAM - Núcleo Interdisciplinar de Pesquisa e Ação Sobre Mulher e Relação de Sexo e Gênero",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var BlocoDeFonoaudiologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"Bloco de Fonoaudiologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Clínica Escola de Fonoaudiologia, Salas de Atendimento Fonoaudiologia",
"Laboratório de Linguagem",
"-",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Clínica Escola de Audiologia, Sala de Exames Fonoaudiologia",
"Laboratório de Voz, Laboratório de Áudio Fonoaudiologia",
"Ambiente dos Professores Fonoaudiologia",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
1, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Salas de Aula 01 a 05",
"Laboratório de Saúde Coletiva de Fonoaudiologia",
"Biblioteca dos Discentes de Fonoaudiologia, Departamento de Fonoaudiologia, Secretaria de Fonoaudiologia, Coordenação de Fonoaudiologia"
);

var AnexoAResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"Anexo A - Residência Universitária",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Quartos 131 ao 139",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"Quartos 231 ao 239",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"Quartos 301 ao 309"
);

var BlocoDeTerapiaOcupacional_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"Bloco de Terapia Ocupacional",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Clinica escola de Terapia Ocupacional, salas de 1 a 10, sala de Biossegurança",
"Laboratório de Tecnologia Assistiva ",
"Recepção",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala dos professores de Terapia Ocupacional, sala de reunião e pesquisa de Terapia Ocupacional  ",
"Laboratório 43 e 44",
"Coordenação de Terapia Ocupacional, Departamento de Terapia Ocupacional",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
1, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Salas 1-6",
"LASTE (Laboratório de Saúde, Trabalho e Ergonomia)",
"-"
);

var BlocoAResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco A - Residência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Recepção Residência Universitária, Lavanderia, Sala de TV Residência Universitária, Quartos 101 ao 130",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala de Estudo",
"-",
"Quartos 202 a 230",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var AuditorioDeTerapiaOcupacional_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Auditório de Terapia Ocupacional",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Auditório",
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

var BlocoBResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco B - Residência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Recepção, Quartos 101 a 130",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"Quartos 201 a 230",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var CRAS_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"CRAs",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Consultórios de 1 a 5, e sala do Dentista ",
"-",
"Recepção, Enfermaria",
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

var BlocoBAnexoResidencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco B - Anexo Residência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Quartos 133 a 144, Cozinha da Residência Universitária ",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"Quartos 209 a 232",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var BlocoABResidenciaUniversitaria_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco AB - Residência Universitária",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala de Computação, Sala de Estudo ",
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

var GinasioDePraticasIntegrativas_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Ginásio de Práticas Integrativas",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"01 e 02",
"-",
"Ginásio ",
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

var GinasioDesportivo_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Ginásio Desportivo",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"01 e 02",
"-",
"Ginásio ",
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

var CrecheEscolaUFPB_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Creche Escola UFPB",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de 01 a 09 para alunos, sala de nutrição, sala dos professores, sala do serviço social, sala da coordenação, sala pedagógica.",
"-",
"Recepção, copa, refeitório e parque.",
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

var EscolaTecnicaDeSaudeUFPB_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Escola Técnica de Saúde UFPB",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"LACEC, LABINIC, Laboratório Técnico de enfermagem, Laboratório de Prótese Dentária Escola Técnica de Saúde",
"Biblioteca da Escola Técnica de Saúde, Secretaria Escola Técnica de Saúde, Direção Escola Técnica de saúde",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"Laboratório de Prótese Dentária Escola Técnica de Saúde",
"Auditório Escola Técnica de Saúde, Coordenação Técnico de Enfermagem, Coordenação Prótese Dentária, Coordenação Cuidador de Idoso",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var DepartamentoDeEducacaoFisicaII_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Departamento de Educação Física II",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas 06 a 09",
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

var PistaDeAtletismo_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Pista de Atletismo",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Banheiro",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 1,
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

var GinasioDeEsportes_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Ginásio de Esportes",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var AcademiaUFPB_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Academia UFPB",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var EscolaTecnicaDeSaudeUFPBAnexo_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Escola Técnica de Saúde UFPB - Anexo",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de Aula 1 a 3",
"Laboratório de Processamento de Amostras Biológicas e Histotecnologia (LAPABH) 1 e 2, Laboratório de Matologia, Laboratório de  Clioprocessamento ",
"-",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas de aula 4 a 6",
"Laboratório de Biologia Molecular Microbiologia e Citologia Escola Técnica de Saúde , Laboratório de Cultivo e Análise Celular Hormônios e Imunologia Escola Técnica de Saúde, Laboratório de Prótese Dentária Escola Técnica de saúde",
"-",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"-"
);

var DepartamentoDeEducacaoFisicaI_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Departamento de Educação FísicaI ",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de 01 a 05, e salas de 01 a 12",
"LETFAS- Laboratório de estudos do treinamento físico aplicado a saúde de Educação Física ",
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

var ClinicaEscolaDeFisioterapia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Clínica Escola de Fisioterapia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala de estudo, sala de atendimento, sala de atendimento em grupo, sala de diatermia I e II, sala de eletroterapia/ultrassonografia, sala de cinesioterapia I e II",
"-",
"Consultório I, II e III; Hidroterapia, almoxarifado, recepção, ambiente dos professores/alunos ",
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

var CentroAcademicoDeEducacaoFisicaEFisioterapia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Centro Acadêmico de Educação Física e Fisioterapia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Centro acadêmico de Educação Física e o de Fisioterapia",
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

var UFPBVirtual_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"UFPB Virtual",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"Laboratório 1",
"Secretaria, Capacitação, auditório, assessoria, Reprografia, Almoxarifado I e II, Web Conferência, Suporte de Apoio ao Usuário, Coordenação Geral da UFPB  Virtual",
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

var BlocoDePosGraduacaoDeEducacaoFisicaEFisioterapia_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"Bloco de Pós-Graduação de Educação Física e Fisioterapia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de 1a 9",
"Laboratório de Análise da Marcha, Laboratório e Dinamometria e Eletromiografia, Laboratório de Neurologia: NeuroLAB, Laboratório de Estudo do envelhecimento Humano ",
"Coordenação de Pós-Graduação em Educação Física, Copa",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas 11 a 21, Sala de análise",
"Laboratório de Estudo do Lazer Cultura/ Esporte/ Turismo e Sociedade (LACESTUS), Laboratório de Estudo do Treinamento Físico Aplicado ao Desempenho e a Saúde (LETFADS), Laboratório de Estudo do Treinamento Físico Aplicado a Saúde (LETFAS), Laboratório de Estudo sobre o Corpo/Estética e Sociedade",
"-",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
1, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala de Estudo de Alunos, Salas 24 a 28",
"Laboratório de Informática Bloco de Pós-Graduação de Educação Física e Fisioterapia, Laboratório Maternoinfantil, Laboratório de saúde Coletiva, Laboratório DCNT",
"ALiga de Estudos em Fisioterapia Dermato-funcional, ambiente dos Professores, Ambiente dos Professores de Saúde Coletiva, Ambiente dos Professores DCNT, Ambiente dos Professores Pneumofuncional, Ambiente dos Professores Cardio, Secretaria  Bloco de Pós-Graduação de Educação Física e Fisioterapia, Copa  Bloco de Pós-Graduação de Educação Física e Fisioterapia / 3º Andar: Academia  Bloco de Pós-Graduação de Educação Física e Fisioterapia"
);

var DepartamentoDeFisiologiaEPatologiaLaboratoriosDaUFPB_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Departamento de Fisiologia e Patologia - Laboratórios da UFPB",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"101 a 118 e salas de 1 a 10 ",
"Laboratório de imunologia, Laboratório de Microbiologia, Laboratório de Farmacologia, Laboratório de Patologia Geral, Laboratório de Fisiologia Aplicada, Laboratório de Fisiologia Humana, Laboratório de Parasitologia",
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

var NucleoDeMedicinaTropical_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Núcleo de Medicina Tropical",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"Laboratório de Odontologia oral, Laboratório de Microbiologia, Laboratório de Endemias",
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

var CentroAcademicoDeFarmacia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Centro Acadêmico de Farmácia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var DepartamentoDeFisiologiaEPatologiaSalasDeAulaDaUFPB_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Departamento de Fisiologia e Patologia Salas de Aula da UFPB",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"202 a 217 e salas de 1 a 3",
"Laboratório de Nutrição Experimental",
"Núcleo de Estudos e Pesquisas Homeopáticas e Fitoterápicas, Almoxarifado, Secretaria do DFP",
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

var LanchoneteGiga_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Lanchonete Giga",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var BlocoDoralice_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco Doralice",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de aula de 502 a 509 e  601 a 610 ",
"Laboratório de saúde da criança, Laboratório de saúde da mulher ",
"Programa de Pós-graduação em Odontologia, Programa de Pós-graduação em ciência da Nutrição, Núcleo Interdisciplinar de estudos em Saúde e Nutrição (NIESN)",
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

var AmbulatorioDeTerapiaFloral_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Ambulatório de Terapia Floral",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var CentroAcademicoDeEnfermagemEDeOdontologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Centro Acadêmico de Enfermagem e de Odontologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var ProgramaDePosGraduacaoEmEnfermagem_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Programa de Pós-Graduacao em Enfermagem",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala de reunião",
"Laboratório em cuidar Enfermagem, Laboratório de saúde, envelhecimento e sociedade, Laboratório de saúde mental e comunitário - LASMEC, Laboratório de saúde da criança e adolescente - LSCA, Laboratório de tecnologia e cuidado em saúde - TEC Saúde, Laboratório cuidado e interdisciplinaridade em saúde  - LIS ",
"Recepção, Coordenação da Pós-Graduação de Enfermagem, Secretaria, Arquivo, estágio de  Pós-Graduação, apoio ao docente, Copa, Almoxarifado, Secretaria do Programa de  Pós-Graduação em Gerontologia ",
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

var SalasDeAulaDeOdontologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Salas de Aula de Odontologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Odontologia Legal, Clinica integrada, Semiologia Odontológica, Traumatologia, Patologia Bucal 1 e 2, Escultura Dentária, Matérias Dentários ",
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

var EspacoDeConvivencia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Espaco de Convivência",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var BlocoDeOdontologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco de Odontologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala dos professores, salas de 301 a 303 ",
"Laboratório didático de escultura dentária, Laboratório didático de  materiais dentários, Laboratório de biomateriais III, Laboratório didático de farmacologia aplicada, Laboratório de patologia bucal, Laboratório didático de patologia bucal",
"PET Farmácia, Clínica de Periodontia, Nomenclatura e instrumental em Odontologia, Coordenação de Odontologia, Banco de dentes humanos, Núcleo de pesquisa e estudos interdisciplinares em biomateriais, ambulatório de cirurgia I e anestesiologia",
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

var BlocoDeMorfologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco de Morfologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas 413, 418 e 419",
"Laboratório de Histologia 1 e 2, Laboratório de embriologia e histologia, Laboratório de técnicas anatômicas e formolização, Laboratório Didático, Laboratório 413-A e B, 416",
"Departamento de Morfologia, Secretaria, Ambiente dos professores, Coordenação dos laboratórios de anatomia, Formolização, Ossário, Dissecação ",
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

var PrefeituraUniversitaria_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"Prefeitura Universitária",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Seção de construção civil, copa, recepção, divisão de serviços gerais, seção de permissão de uso, compras e patrimônios, auditório",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala de reunião I e II ",
"-",
"Secretaria administrativa, assessor da reitoria, seção de eletricidade, gabinete do prefeito, copa, contabilidade ",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
1, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"-",
"Assessoria do gabinete, divisão de projetos, divisão de obras  "
);

var CentroAcademicoDeTerapiaOcupacionalEFonoaudiologia_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Centro Acadêmico de Terapia Ocupacional e Fonoaudiologia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
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

var BlocoArnaldoTavaresCCS_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Bloco Arnaldo Tavares CCS",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de aula 802, 805, 806",
"Laboratório de farmacologia experimental e cultivo celular; Laboratório integrado de biomateriais; Laboratório de microscopia e imagem biológica",
"Arquivo da Direção do Centro de Ciências da Saúde; Unidade de Diagnóstico e Procedimentos ",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas de aula 808, 810, 811, 812",
"-",
"Coordenação do curso de farmácia; Coordenação do curso de nutrição; Coordenação de enfermagem; Núcleo de estudos em linguagem e fala (NELF)",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala 21, Sala 22",
"Labs 21, Labs 22",
"Amb 21, Amb22"
);

var BlocoAdministrativoDoCCS_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco Administrativo Do CCS",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"Laboratório técnico de mídias digitais do bloco administrativo do CCS",
"Auditório do bloco administrativo do CCS; Conselho do centro no bloco administrativo do CCS; Programa de pós-graduação em desenvolvimento e inovação tecnológica em medicamentos; Secretaria do bloco administrativo do CCS; Sala de reunião do bloco administrativo do CCS; Diretoria do CCS; Assessoria administrativa do bloco administrativo do CCS; Assessoria para assuntos comunitários e extensão do bloco administrativo do CCS; Assessoria de comunicação e cultura do bloco administrativo do CCS; Assessoria de graduação do bloco administrativo do CCS; Assessoria Técnica do CCS; Assessoria de pesquisa e pós-graduação do bloco administrativo do CCS; Coordenação de patrimônio; Almoxarifado 1 do do bloco administrativo do CCS; Almoxarifado 2 do bloco administrativo do CCS; Assessoria de gestão de pessoas; Gabinete da direção do bloco administrativo do CCS; Assessoria especial do bloco administrativo do CCS.",
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

var CentroDeCienciasMedicas_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"Centro De Ciências Medicas",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"Recepção do CCM; Cantinho do cochilo; Auditório CCM; Assessoria de extensão do CCM; almoxarifado do CCM; Sala de reunião do CCM; Setor de tecnologias da informação do CCM; Biblioteca CCM",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 1,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"Laboratório de habilidades clínicas do CCM; Laboratório de informática do CCM; Laboratório de bases da técnica cirúrgica CCM.",
"Coordenação de Medicina; Copa dos funcionários; Comissão de residência médica- COREME; Assessorias de comunicação, administrativa, graduação e planejamento, recursos humanos PALTEX; Departamento de obstetrícia e ginecologia; Departamento de cirurgia; Mestrado profissional em saúde da família do CCM; Departamento de pediatria e genética do CCM; Departamento de promoção da saúde do CCM; Diretoria CCM; Departamento de medicina interna.",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
1, 1,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Sala de aula CCM P1, P2, P3, P4 A, P4 B, P5 A, P5 B, P6 A, P6 B, P7 A, P7 B, P8 A, P8 B; Sala de aula geral 1, 2, 3; Sala de aula 35, 37, 50 / 3º Andar: Sala 2 Almoxarifado; Sala 4 a 8 DPS; Sala 12 DC, Sala 13 DC, Sala 16 DC, Sala 17 DC; Sala 11 DPG, Sala 18 GESME - Grupo de estudos em semiologia médica; Sala 20 DMI; Sala 21",
"-",
"NECORE- (Núcleo de estudos do coração pediatria e evidências); NEPI (Núcleo de estudos e pesquisa em imaginologia- UFPB); Ambiente 22; Apoio 1, 2, 4; Comitê de ética e pesquisa com seres humanos-CEP; Arquivo setorial; Refeitório CCM; Telessaúde; Observatório de políticas e cuidado em saúde"
);

var BlocoDeFisioterapia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco De Fisioterapia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas CCS 705, 706",
"LEPAFS- Laboratório de estudos e pesquisas em atividades físicas e saúde",
"Auditório Professora Tereza Olivia Formiga; Sala de leitura- Antônio Carlos Rodrigues dos Santos",
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

var BlocoDasCoordenacoesdeEducacaoFisicaeFisioterapia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco Das Coordenações de Educação Física e Fisioterapia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala 01, Sala 02",
"Laboratório ETF, Laboratório de Cinesio; Laboratório RTM; Laboratório LEPASC- Laboratório de estudos e práticas em saúde coletiva",
"Departamento de Ed. Física (Secretaria); Coordenação de extensão de ed. física; Sala de multimeios; Coordenação de ed. física (licenciatura); Coordenação de bacharelado em ed. física; Grupo de exercício terapêutico",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"-",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"-"
);

var BlocoSalasDeAuladeFisioterapia_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Bloco Salas De Aula de Fisioterapia",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de Aula CCS 707 a 710; Sala de atividades em grupo",
"-",
"Serviço de fisioterapia infantil; Coordenação de fisioterapia",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"-",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"-",
"-"
);

var HospitalUniversitarioLauroWanderley_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Hospital Universitário Lauro Wanderley",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala de reunião da superintendência ",
"Laboratório de anemias, Laboratório de analises clinicas ",
"Sala de holter e mapa, Divisão administrativa financeira, orçamento e finanças, superintendência, Gerencia administrativa, Setor de contabilidade, Unidade de licitação, Unidade de monitoramento e avaliação, setor de apoio terapêutico, Unidade de contratos, Divisão medica, enfermagem e de gestão do cuidado, Secod-Serviço de capacitação e avaliação de desempenho, Divisão de gestão de pessoas, Recepção e protocolo, Setor de hotelaria hospitalar, Setor de infraestrutura física, Repouso dos recepcionistas, Setor jurídico, Assessoria de planejamento, Núcleo de comissões hospitalar unidade de apoio operacional, SGPTI, Ouvidoria, Revisão de logística e infraestrutura, Comissão de padronização de produtos para saúde, Gerencia de atenção a saúde, assessoria de comunicação, Auditório Professor Lindengh farias, Nutrição e Dietetíca, Farmácia, Central de abastecimento farmacêutico, Almoxarifado, Serviço de informação de medicamentos, Centro de informação toxicológico, CIPA, Sub-sede-Sintespb, Anatomia patológica, Citologia, Auditoria interna, Faturamento, SGPTI-Suporte informatica, Unidade de vigilância em saúde, Vigilância epidemiológica, Divisão de Educação física, Serviço de pediatria, regulação, Serviço de fisioterapia, Unidade de diagnostico por imagem, serviço de dermatologia, urologia, nefrologia, Colposcopia, ginecologia, mastologia, Serviço de odontologia, Central de marcações, Pré-natal, Alternativas alimentares, puericultura, sala de vacinas, teste do pezinho, Pneumologia, otorrinolaringologista, Ortopedia traumatológica, saúde ocupacional, DIP- doenças infecto-parasitária, Geriatria, comissão de pele, Coordenação de enfermagem laboratorial, Eletroencefalograma, serviço de cardiologia, serviço ecocardiograma, Gastroenterologia, hepatologia, Neurologia, Psiquiatria memoria neuromuscular, Hematologia e oncologia, Divisão de psicologia, PROAMA, CISA, Farmácia, Endocrinologia, Diabetes, Fissuras Lábio-palatinas, Administração, Imunologia, Alergia.",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 1,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Sala de estudos de enfermagem, ",
"-",
"Chefia/Secretária, Chefia de enfermagem, CTI-Centro de Tratamento Intensivo, recepção de pacientes, Copa, Centro de terapia Intensiva.  ",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 1,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"-",
"LAP-Unidade de laboratório de Anatomia e Patologia",
"Comitê de ética em pesquisa, telemedicina, Central de materiais e esterilização, Gerência de ensino e pesquisa, CIMICRON, departamento de ginecologia e obstetrícia, Divisão de obras, Grupo de trabalho e humanização, Unidade de vigilância Epidemiológica, reumatologia, Clínica Cirúrgica A e B."
);

var p001_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p001",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br>Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br><br><a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank'>Informe-nos aqui</a>.",
"",
"",
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

var p002_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p002",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p003_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p003",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p004_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p004",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p005_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p005",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p006_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p006",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p007_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p007",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p008_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p008",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p009_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p009",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p010_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p010",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p011_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p011",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p012_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p012",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p013_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p013",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p014_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p014",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p015_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p015",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p016_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p016",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p017_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p017",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p018_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p018",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p019_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p019",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p020_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p020",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p021_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p021",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p022_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p022",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p023_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p023",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p024_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p024",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p025_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p025",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p026_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p026",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p027_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p027",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p028_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p028",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p029_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p029",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p030_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p030",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p031_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p031",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p032_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p032",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p033_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p033",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p034_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p034",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p035_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p035",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p036_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p036",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p037_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p037",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p038_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p038",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p039_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p039",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p040_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p040",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p041_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p041",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p042_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p042",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p043_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p043",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p044_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p044",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p045_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p045",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p046_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p046",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p047_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p047",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p048_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p048",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p049_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p049",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p050_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p050",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p056_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p056",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p057_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p057",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p059_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p059",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p060_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p060",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p061_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p061",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p062_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p062",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p063_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p063",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p064_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p064",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p065_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p065",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p066_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p066",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p067_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p067",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p068_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p068",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p069_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p069",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p070_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p070",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p071_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p071",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p072_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p072",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p073_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p073",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p074_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p074",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p075_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p075",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p076_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p076",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p077_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p077",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p078_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p078",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p079_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p079",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p080_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p080",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p081_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p081",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p082_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p082",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p083_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p083",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

var p084_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"p084",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Este prédio ainda não foi registrado. <br> Sabe quais salas existem aqui, ou se este prédio possui acessibilidade? <br> <br> <a class='linkInternoPopUp' href='https://docs.google.com/forms/d/1fz59YKHcQ-PEQKNf6ukA6BJDvlo_CjSM80KDGBdPViQ/edit' target='_blank' >Informe-nos aqui</a>",
"",
"",
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

// --- INÍCIO DO CCTA ---
var pSaladeConcertosRadegundisFeitosa_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Sala de Concertos Radegundis Feitosa",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"-",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"",
"",
"A",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);

var pDEMUSDepartamentodeMusica_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"DEMÚS - Departamento de Música",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de 1 a 4; Salas de 6 a 19; Salas de A a I",
"-",
"Sala de Iniciação Musical; Auditório 1; Secretaria; Biblioteca Setorial",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"",
"",
"",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);

var pCCTABlocoD_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"CCTA - Bloco D",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"LAJE - Laboratório de Jornalismo e Editoração",
"Ambiente 13; Copa; Ambiente de Professores do DAV; Chefia; Coordenação do Programa de Mestrado Profissional em Artes em Rede Nacional Prof-Artes; DAC - Departamento de Artes Cênicas; DEJOR - Departamento de Jornalismo; DECOM - Departamento de Comunicação; DTH - Departamento de Turismo e Hotelaria; DEM - Departamento de Educação Musical; Coordenação do Curso de Licenciatura em Música; Sala dos Funcionários Terceirizados",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"-",
"LEME - Laboratório de Estudos dos Media",
"Ambientes 04, 06, 09, 14, 19, 20, 22, 23 e 24; Ambientes de Pesquisa do DAC 1 e 3; Coordenação do Curso de Relações Públicas; GCET; DAC - NEP Cênico; Ambientes de Professores do DEMÚS - 09, 10, 15 e 16; Estúdio da Rádio UFPB; Galeria Lavandeira; Ambiente de Professores do DAV",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);

var pDACDepartamentodeArtesCênicas_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"DAC - Departamento de Artes Cênicas",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas 4",
"Laboratório de Experimentos com Objetos de Cena; Laboratório de Corpo Sonoro e Outras Tecnologias; Laboratório de Artes Cênicas e Educação; Laboratório de Figurinos e Caracterização",
"Depósito; Estúdio de TV; Camarim",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas 11, 12 e 14; Salas de Trabalho Corporal - DAC 13 e 15",
"Laboratório de Anatomia",
"-",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);

var pCCTABlocoB_pop = InserirPopUp(
//Número de Andares (1,2,3)
3,
//Nome do prédio
"CCTA - Bloco B",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Sala de Arquivos da SIAG; Sala de Reuniões; Sala 205",
"Laboratório de Web Design; Laboratório de Cerâmica; Laboratório de Pintura; Laboratório de Artes Gráficas",
"Galeria de Arte; SIAG - Secretaria Integrada de Atendimento à Graduação (Coordenações de Cursos); Direção CCTA (Secretaria/Acessorias)",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
1, 1,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"Salas de 216 a 220; Salas 222, 223, 225 e 226",
"Laboratório de Jornalismo Impresso; LENA - Laboratório de Estudos em Narrativas Audiovisuais); Laboratório de Estudos do Turismo",
"Ilha de Edição",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
1, 1,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"Salas de 236 a 241",
"Laboratório de Desenho Clássico; Laboratório de Rádio 1, 2 e 3; Laboratório de Desenho de Som; Laboratório de Jornalismo Impresso; Laboratório de Informática; Laboratório de Criação Visual e Multimídia; Laboratório de Fotografia",
"Redação de Rádio e TV; Redação Integrada",
);

var pCineAruanda_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"Cine Aruanda",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"-",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"",
"",
"",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);

var pCCTABlocoA_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"CCTA - Bloco A",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
1, 1,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"Salas de 101 a 112; Sala 114",
"LEMI - Laboratório de Educação Musical Infantil; Laboratório de Educação Musical",
"PPJ (Programa de Pós Graduação em Jornalismo) - Secretaria; PPGAV (Programa de Pós Graduação em Artes Visuais) - Secretaria",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"",
"",
"",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);

var pCCTACentrosAcadêmicos_pop = InserirPopUp(
//Número de Andares (1,2,3)
1,
//Nome do prédio
"CCTA - Centros Acadêmicos",
//Banheiro Térreo, Acessibilidade Térreo (0 ou 1)
0, 0,
//Salas do Térreo, Laboratórios do Térreo, Ambientes do Térreo
"-",
"-",
"CA de Artes Visuais; CA de Jornalismo; CA de Hotelaria; CA de Turismo",
//Banheiro 1º Andar, Acessibilidade 1º Andar (0 ou 1)
0, 0,
//Salas do 1º, Laboratórios do 1º, Ambientes do 1º
"",
"",
"",
//Banheiro 2º Andar, Acessibilidade 2º Andar (0 ou 1)
0, 0,
//Salas do 2º, Laboratórios do 2º, Ambientes do 2º
"",
"",
""
);
// --- FIM DO CCTA ---



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
