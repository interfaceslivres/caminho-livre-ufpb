  $(document).ready(function () {

          // A ordem dos itens aqui deve ser a mesma do array predios.
          var buscas = [
              [
                'Ambiente 2',
                'Ambiente dos Professores II', 'Ambiente 58 - Ambiente 71', 'Ambiente 68'
              ],
              [
                'DEMID',
                'DEMID - Sala 01','DEMID - Sala 02','Laboratório de PCS', 'Laboratório de MACS I e II', 'Estúdio de Vídeo', 'Estúdio de Áudio', 'Coordenação', 'Administração', 'Copa', 'Empresa Júnior', 'Almoxarifado'
              ],
              [
                'Bloco V',
                'Sala 502 - Sala 514', 'Sala 502'
              ],
              [
                'Praça',
                'Ambiente 58 à Ambiente 71','Praça da Alegria','Sala 1 - Sala 56'
              ],
              [
                'Bloco IV',
                'Sala 402 - Sala 408', 'Direção do Centro', 'CHIP I'
              ],
              [
                'Bloco de Psicologia',
                'Salas de Psicologia 1 - 4', 'Salas de Psicologia 102 - 107', 'Sala de Psicologia 201', 'Sala de Psicologia 202', 'Sala de Psicologia 203', 'Sala de Psicologia 205', 'Sala de Psicologia 207'
              ],
              [
                'Bloco C',
                'Programa de pós-graduação em Neurociência Cognitiva e Comportamento', 'Pós-graduação em Antropologia', 'Núcleo de Estudos e Pesquisa Afro-brasileiros e Indígenas da UFPB', 'Coordenação de Libras, Curso de Letras Virtual', 'Laboratório de Estudos e Práticas Sociais LES', 'Laboratório de Tradução', 'Coordenação de Letras Clássicas', 'Laboratório de Letras Clássicas', 'Laboratório de Línguas Estrangeiras Aplicadas as Negociações Internacionais', 'Laboratório de Ciências Sociais I e II', 'Laboratório de Psicologia Social Experimental BNCS'
              ],
              [
                'Auditórios',
                'Auditório 411', 'Auditório 412'
              ],
              [
                'Bloco A',
                'Sala 417 - Sala 425', 'T417', 'T418', 'T419', 'Coordenação da LEA', 'Coordenação de Tradução'
              ],
              [
                'Biblioteca Setorial',
                'Sala de Atendimento ao Usuário'
              ],
              [
                'Clínica de Psicologia',
                'Salas de Atendimento 0 - 19', 'Sala do Centro', 'Sala de Estagiários', 'Sala de Psicólogos', 'Salas de Supervisão 1-3', 'Escola de Psicologia'
              ],
              [
                'CAs',
                'CA de Letras', 'CA de Serviço Social', 'CA de História', 'CA de Ciências Sociais', 'CA de Psicologia', 'CAs - Xerox'
              ],
              [
                'CT - Centro Administrativo', 'Centro Administrativo'
              ],
              [
                'CT - Centro de Multimídia', 'Centro de Multimídia', 'Biscoitão', 'Bolo de Noiva'
              ]

          ];

          // Função para transformar o array de buscas nos nomes possíveis da busca.
          function dump(obj) {
              var out = '';
              for (var i = 0; i < obj.length; i++) {
                for (var j = 0; j < obj[i].length; j++) {
                  out += obj[i][j] + ',';
                }
              }
              var out = (out.slice(0,-1)).split(",");
              return out;
          }

          // Salvando o resultado do dump em uma variável;
          var fonte = dump(buscas);
          // Definir qual elemento (input) será utilizado como uma caixa de pesquisa e definir quais os elementos do autocomplete em um array
          $("#searchBox").autocomplete({
              source: fonte
          });
          //Função para quando o botão for clicado, ir até a área do mapa correta e abrir o popup do objeto selecionado
          $( "#searchBox" ).on( "autocompleteselect", function() {
              setTimeout(function(){  abertura(); }, 10);

          });

          $( "#searchBox" ).keypress(function( event ) {
            if ( event.which == 13 ) {
              abertura();
            }
          })

          $("#searchMap").click( function(){
              abertura();
          });
          
          // Abrir o popup ao mesmo tempo que muda a URL chamando a função mudaUrl();
            function abertura() {
                var local = (document.getElementById("searchBox").value);
                for (var i = 0; i < (buscas.length); i++) {
                  for (var j = 0; j < (buscas[i]).length; j++) {
                    if (local === (buscas[i][j])) {
                      var p = buscas.indexOf(buscas[i]);
                      var teste = predios[p][1];
                      new L.geoJson(eval(predios[p][0]), {
                       style: hidden
                     }).bindLabel(teste).addTo(map).bindPopup(eval(predios[p][0]+"_pop"), (autopad)).on("popupopen", function(e) { var d = e.popup._source.label._content; mudarUrl(d); }).openPopup();
                    }
                  }; // fim do 2º for
                }; // fim do 1º for
            }; // fim da função abertura

  }); // fim do document.ready
