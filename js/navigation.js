  $(document).ready(function () {

          var buscaCTBlocoM_1 = CTBlocoM_pop[9];

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
              ],
              [
                'CT - Bloco H', 'CTH 101', 'CTH 102', 'CTH 103', 'CTH 104', 'Laboratório de Modelos + Prototipagem (LM+P)', 'Centro Acadêmico do Curso de Arquitetura e Urbanismo (CACAU)', 'Sala de Ferramentas LM+P', 'AT1', 'AT2', 'AT3', 'AT4', 'AT5', 'AT6', 'Labs 11 - Bloco H', 'Labs 12 - Bloco H', 'Trama - Escritório Modelo de Arquitetura e Urbanismo'
              ],
              [
                'CT - Bloco E', 'CTE 101', 'CTE 103', 'CTE 104', 'CTE 105', 'Laboratório de Topografia', 
              ],
              [
                'CT - Bloco D', 'CTD 101', 'CTD 103', 'CTD 105', 'CTD 107', 'Otimize Consultoria (Empresa Júnior de Engenharia de Produção)'
              ],
              [
                'CT - Bloco F/G', 'Bloco F', 'Bloco G', 'CTF 101', 'CTF 102', 'CTF 103 (Sala de aula - PPGCTA)', 'Sala Acácia', 'Sala de estudo', 'Sala Eucaliptos', 'Sala Bouganville', 'Sala 14 (GESP)', 'Sala 01 (Profª Christine Werba)', 'Sala 02 (Profª Ivanize Cláudia dos Santos)', 'Sala 03 (Profª Dra. Lenita Lessa)', 'Sala 04 (Profª Msc. Luzia Goes Camboim)', 'Sala 05 (Profª Juliana Gonçalves; Profª Dra. Márcia Souto)', 'Sala 06 (Profª Dra. Aurélia Idrogo; Prof. Msc. Jonas Paiva; Prof. Dr. Miguel Otávio)', 'Sala 07 (Profª Maria Bernadete; Prof. Antônio Coutinho)', 'Sala 08 (Prof. Dr. Ivson F. dos Anjos; Prof. Msc. Múcio Souto)', 'Sala 09 (Prof. PhD Francisco Másculo; Prof. Dr. Luciano Costa Santos)', 'Sala 10 (Prof. Jailson Ribeiro; Profª Dra. Sandra Marioka)', 'Sala 11 (Profª Maria de Lourdes; Prof. Ricardo Moreira - Grupo de Pesquisa: Produção, Estratégia, Tecnologia e Trabalho)', 'Sala 13 (Profª Maria Silene - Grupo de Pesquisa: Complexidade & Organização)', 'Laboratório de Informática - INFOLAB, LADEPI/GPROPI', 'Coordenação PPGEM, Copa dos professores', 'Secretaria do Departamento de Engenharia de Produção', 'Secretaria do PPGEP', 'Auditório Dr. Antônio Souto Coutinho', 'Sala Xique-xique', 'Sala Mandacaru'
              ],
              [
                'CT - Bloco N', 'CTN 101', 'CTN 102', 'CTN 103', 'LECCUR (Laboratório de Estudos sobre Cidades', 'Culturas Contemporâneas e Urbanidades)', 'LACESSE (Laboratório de Acessibilidade)', 'LAMFIC (Laboratório de Modelos Físicos Qualitativos e Computacionais)', 'LAMAB (Laboratório de Materiais e Biossistemas)', 'Copa dos funcionários da limpeza - Bloco N'
              ],
              [
                'Laboratório de Informática', 'Ambiente dos Professores do CT', 'Sala: Profª Dra. Helenice Duarte de Holanda e Profª Dra. Stela de Lourdes Ribeiro de Medonça', 'Sala: Prof. Jovanka Baracuhy Scocuglia', 'Sala: Profª Dra. Esmeralda Paranhas dos Santos e Prof. Dr. Ricardo Targino Moreira', 'Sala: Profª Dra. Edilma Pinto Coutinho e Prof. Dr. Yuri Montenegro Ishihara', 'Labgraf 2', 'Labgraf 3', 'Labgraf 4', 'Laboratório de Planejamento de Transportes', 'Pracinha do CT', 'Lanchonete Dona Nena', 'Xerox do LI', 'Planej (Empresa Júnior de Arquitetura e Engenharia Civil)', 'Coordenação do Laboratório de Informática', 'Suporte do Laboratório de Informática', 'Sala de Estudos PPGCTA;', 'Sala: Prof. Claudino Lins, Prof. Fábio Lopes e Prof. Paulo Cabral', 'CT Empreendedor (Prof. Antônio Gualberto e Prof. Orlando Vilar)/Sala 19 (Prof. Anand Subramanian, Prof. Fábio Morais Borges, Prof. Marcel de Gois Pinto)',  'Sala 40: Prof. Dr. Heinz Johann Holschuh e Prof. Dr. Marcelo Barbosa Muniz', 'Sala 41: Prof. Antônio Luiz de Albuquerque Gomes e Prof. Geraldo Dantas Silvestre Filho', 'Sala 43: Profª Berthilde Moura, Prof. Marco Coutinho, Profª Patrícia Alonso e Profª Wylnna Vidal', 'Sala: Profª Dra. Cláudia Torres, Prof. Dr. Antônio Francisco e Prof. Msc. Alexandre Azedo', 'Amb. 48: Prof. Dr. José Soares, Prof. Dr. Raul Rosenhaim e Prof. Dr. Rennio Felix de Senna', 'Sala: Frederico A. Melo do Vale e Romualdo Campos da Fonseca', 'Sala: Prof. Dr. Paulo Henrique M. Montenegro', 'LPPM 1', 'LARHENA'
              ],
              [
                'Laboratório de Análise de Alimentos', 'Laboratório de Microbiologia de Alimentos', 'Laboratório de Bioquímica de Alimentos', 'Laboratório de Pescado', 'Laboratório de Apoio', 'Laboratório de Flavor', 'Laboratório de Química de Alimentos', 'Laboratório de Tecnologia de Panificação e Massas Alimentícias', 'Laboratório de Processos Microbianos do Alimento', 'Almoxarifado do LAA', 'Copa do LAA'
              ],
              [
                'CA Engenharia Mecânica', 'COPIAX (Xerox e encadernação)', 'CA Engenharia Mecânica'
              ],
              [
                'CA Engenharia Civil', 'Xerox do EC', 'CA Engenharia Civil', 'Lanchonete do EC'
              ],
              [
                'Oficina Mecânica', 'Laboratório de Inovação'
              ],
              [
                'Galpão', 'Sala de Acústica', 'Projeto Motorius', 'Sala do Prof. Virgílio'
              ],
              [
                'CT - Bloco A', 'CTA 101', 'CTA 103', 'CTA 105', 'CTA 107', 'Laboratório de Hidropneumática'
              ],
              [
                'CT - Bloco B', 'CTB 101', 'CTB 102', 'CTB 103', 'CTB 105', 'CTB 107', 'Laboratório de Cromatografia e Quimiometria de Alimentos', 'Laboratório de Produto Fermento Destilado', 'Centro Acadêmico  - Engenharia de Alimentos', 'AEOROJAMPA - AERO DESIGN', 'Empresa Junior Acessoria - Engenharia de Alimentos', 'Departamento de Tecnologia Química e Alimentos'
              ],
              [
              'CT - Bloco C', 'Laboratório de Tecnologia de Alimentos - Controle de Qualidade', 'Laboratório de Tecnologia de Alimentos - Processamento', 'Laboratório de Análise e Pesquisas de Bebidas Alcoólicas', 'Laboratório de Engenharia de Alimentos', 'Laboratório de Análise Sensorial'
              ],
              [
              'Bloco Elétrica', 'Laboratório de Carvão Aditivado: produção', 'Laboratório de Carvão Aditivado: análises', 'Laboratório de Automação e Controle', 'Laboratório de Conformação Mecânica', 'Laboratório de Tratamento Térmico', 'Laboratório de Dinâmica', 'Laboratório de Ensaios Mecânicos', 'Coordenação do Laboratório de Tratamento Térmico', 'Sala de Multimídia - Bloco Elétrica', 'Laboratório de Representações Gráficas', 'Laboratório de Motores de Combustão Interna', 'Laboratório de Termoenergética', 'Laboratório de Instrumentação e Controle (LINC)', 'Laboratório de Transferência de Calor e Massa/Laboratório de Refrigeração e Ar Condicionado (LABREFRIG)', 'Laboratório de Metrologia Dimensional (METROMEC)', 'LabGraf B - Representações Gráficas', 'Laboratório de Máquinas e Acionamentos Elétricos (LABMAC)'
              ],
              [
              'Laboratório PPHL', 'Laboratório Piloto de Química, Laboratório de Microbiologia', 'Laboratório de Tecnologia Química'
              ],
              [
              'Laboratório de Eficiência Energética e Hidráulica em Saneamento'
              ],
              [
              'Biblioteca Setorial do CT', 'Sala de Professores - Engenharia Química', 'Laboratório de Pesquisa Projeto e Memória 2', 'Laboratório de Microengenharia', 'Laboratório de Métodos Quantitativos Aplicados', 'Laboratório - Engenharia de Alimentos', 'Laboratório de Pesquisa em Sistemas Ambientais Urbano'
              ],
              [
              'CT - Bloco M', 'Laboratório de Materiais Cerâmicos', 'Laboratório de Materiais Metálicos', 'Laboratório de Ciderurgia', 'Laboratório de Materiais Polímeros', 'Laboratório de Eletrônica Analógica e Digital', 'Laboratório de Automação e Controle', 'Laboratório de Eletrotécnica', 'Laboratório de Materiais e Instrumentação', 'Laboratório de Máquinas e Acionamentos', 'CTM 201', 'CTM 202', 'CTM 203', 'CTM 204', 'CTM 205'
              ],
              [
              'CT - Bloco K', 'Laboratório de Engenharia de Precisão', 'Laboratório de  Processamento de Sinais', 'Laboratório de Otimização de Sistema de Energia', 'Grupo de Pesquisa em Inteligência Computacional Aplicada', 'Ambiente de Professores - Profº. Antônio Augusto, Profº. Antônio Sérgio, Profº. Clinaldo Araújo', 'CTK 201', 'CTK 202', 'Laboratório de Simulação de Processos Discretos', 'Laboratório de Análise de Trabalho', 'Ambiente de Professores - Profº. Helon David de Macedo Braz, Profº. Rafael de Sousa Marinho, Profº. Romero Leandro Andersen'
              ],
              [
              'Laboratório de Ensaio de Materiais e Estruturas', 'Núcleo de Estudos e Pesquisa em Materiais', 'Sala do Programa de Pós-graduação em Engenharia Civil e Ambiental', 'Sala de Aula do Laboratório de Materiais e Produtos Cerâmicos', 'Laboratório de Saneamento', 'Laboratório de Geotecnia e Pavimentação', 'Laboratório de Materiais e Produtos Cerâmicos', 'Laboratório de Análise Estrutural e Avaliação de Desempenho', 'Laboratório de Ensaio de Materiais e Estruturas', 'Coordenação do Laboratório de Saneamento, Laboratório de Geotecnia e Pavimentação', 'Copa do LEME', 'Almoxarifado do LEME', 'Sala Multimídia do LEME', 'Sala de Estudos do LEME', 'Sala dos Técnicos', 'Sala do Profº. Tadeu Antônio de Azevedo Melo', 'Salas de Professores do LEME', 'Laboratório de Solidificação Rápida', 'Laboratório de Ensaios Mecânicos', 'Laboratório de Processamento de Materiais', 'Laboratório de Caracterização Microestrutural', 'Laboratório de Metalografia', 'Laboratório de Química', 'Laboratório de Análise Térmica', 'Coordenação do Laboratório de Solidificação Rápida'
              ],
              [
              'CT - Bloco L'
              ],
              [
              'CT - Bloco J', 'CTJ T01', 'CTJ T102', 'CTJ T03', 'CTJ T07', 'Coordenação de Engenharia de Produção', 'Laboratório de Termodinâmica', 'Laboratório de Reatores Químicas', 'Laboratório de Operações Unitárias', 'Laboratório de Bioengenharia', 'Laboratório de Modelagem em Materiais', 'Laboratório de Tecnologia de Carnes e Derivados', 'Laboratório de Leite e Derivados', 'CTJ 101', 'CTJ 102', 'CTJ 103', 'CTJ 104', 'CTJ 105', 'CTJ 106', 'CTJ 107', 'CTJ 111', 'Ambiente de Professores: Profº. Genari Clericuzi, Profª.Karla Silvana Sousa, Profª. Veruscka Silva', 'Laboratório de Modelagem Computacional e Controle de Processos', 'Laboratório de Fenômenos de Transportes', 'Laboratório de Petróleo', 'Ambiente de Professores - Engenharia Química: Profº. Alfredo Ismael Curbelo Garnica, Profª. Fabíola Dias da Silva Curbelo', 'Ambiente de Professores - Engenharia Química: Profº. Flávio Luiz Honorato, Profª. Josilene Assis Cavalcante, Profº. Nagel Alves Costa, Profª. Sharline Florentino de Melo Santos, Profª. Vivian Stumpf Madeira', 'CTJ 201', 'CTJ 202', 'CTJ 203', 'CTJ 204 - Departamento/ Coordenação de Engenharia Elétrica', 'CTJ 205 - Sala dos Professores - Centro de Energias Alternativas e Renováveis: Profº. Alexandre Castro, Profº. Darlan Alexandria, Profº. Rogério Gaspar', 'CTJ 206 - Departamento de Engenharia de Materiais', 'CTJ 207 - Sala dos Professores: Profª. Lucineide Balbino da Silva, Profª. Renata Maria Ramos Wellen, Profº. Tibério Andrade Passos', 'CTJ 208 - Coordenação do Curso de Engenharia Ambiental', 'CTJ 209 - Coordenação de Engenharia Química', 'CTJ 210 - Ambiente de Professores - Engenharia de Materiais', 'CTJ 211 - Sala dos Professores - Centro de Energias Alternativas e Renováveis: Profº. Carlos Alberto, Profº. Juan Maurício, Profª. Nady Costa', 'CTJ 212 - Sala dos Professores - Engenharia Ambiental e Engenharia Civil', 'CTJ 214 - Sala dos Professores: Profº. Fabiano Salvatori, Profº. Lucas Hartmann', 'CTJ 215 - Sala dos Professores - Centro de Energias Alternativas e Renováveis: Profº.  Euder Macedo, Profº. Fabrício Braga', 'CTJ 216 - Sala dos Professores: Profº. Gilson Barbosa Athayde Júnior, Profº. Joácio de Araújo Morais Júnio, Profº. Leonardo Vieira Soares', 'CTJ 217 - Sala dos Professores: Profº. Danniel Ferreira de Oliveira, Profº. Heber Sivini Ferreira, Profº. Ramon Alves Torquato', 'CTJ 218 - Coordenação de Engenharia de Materiais', 'CTJ 220 - Sala dos Professores: Profª. Alessandra Berenguer de Morais, Profº. Claúdio Ruy Portela de Vasconcelos, Profº. Jonas Alves Paiva', 'CTJ 221 - Sala dos Professores: Amélia Severino Ferreira Santos, Profª. Daniele Gueres de Lima Cavalcante, Profª. Itamara Farias Leite'
              ],
              [
              'CA - Bloco A', 'CAA 101', 'CAA 102', 'CAA 103', 'CAA 104', 'CAA 105', 'CAA 106'
              ],
              [
              'CA - Bloco B', 'CAB 101', 'CAB 102', 'CAB 103', 'CAB 104', 'CAB 105', 'CAB 106', 'CAB 107'
              ],
              [
              'CA - Bloco C', 'Sala de administração do CA', 'CAC 107', 'CAC 108', 'Laboratório de Inclusão Digital (LID)', 'Auditório I - Bloco C', 'Auditório II - Bloco C', 'PNAIC'
              ],
              [
              'CA - Bloco D', 'CAD 101', 'CAD 102', 'CAD 103', 'CAD 104', 'CAD 105', 'CAD 106', 'CAD 107', 'CAD 108', 'CAD 109', 'CAD 110', 'CAD 111'
              ],
              [
              'CA - Bloco E', 'CAE 101', 'CAE 102', 'CAE 103', 'CAE 104', 'CAE 105', 'CAE 106', 'CAE 107', 'CAE 108', 'CAE 109', 'CAE 110', 'CAE 111'
              ],
              [
              'CA - Bloco F', 'CAF 101', 'CAF 102', 'CAF 103', 'CAF 104', 'CAF 105', 'CAF 106', 'CAF 107', 'CAF 108', 'CAF 109', 'CAF 110', 'CAF 111'
              ],
              [
              'CA - Bloco G', 'CAG 101', 'CAG 102', 'CAG 103', 'CAG 104', 'CAG 105', 'CAG 106', 'Núcleo de documentação e informação histórica regional - NDIHR'
              ],
              [
              'CA - Bloco H', 'CAH 101', 'CAH 102', 'CAH 103', 'CAH 104', 'CAH 105', 'CAH 106', 'CAH 107', 'CAH 108'
              ],
              [
              'CA - Bloco I', 'CE 313', 'CE 314', 'CCSA 212', 'CCHLA 412', 'CCHLA 413', 'CCHLA 414', 'CCHLA 415', 'CCHLA 416'
              ],
              [
              'CCJ', 'Sala de aula 10', 'Sala de reuniões e professores do CCJ', 'Pesquisa científica 1', 'Pesquisa científica 2', 'Extensão universitária', 'Assessorias acadêmicas', 'Assessoria de informática e manutenção', 'Coordenação de graduação', 'Departamento de direito público - DDPu, Departamento de direito provado - DDPr', 'Departamento de direito processual e prática jurídica', 'Coordenação de monografia', 'Secretaria de direção de centro', 'Linjur - Lab. de informática jurídica', 'Lab. de pesquisas online e periódicos', 'Portaria do CCJ', 'Auditório do CCJ', 'Recepção do auditório do CCJ', 'Biblioteca do CCJ', 'Ambiente dos professores DDPPJ', 'Ambiente dos professores DDPr', 'Ambiente dos professores DDPu', 'Ambiente do pessoal de apoio', 'Copa do CCJ', 'Almoxarifado do CCJ', 'Salas de aula 1-9', 'Sala de multimídia do CCJ', 'Arquivo do CCJ', 'Programa de pós-graduação em ciências jurídicas (mestrado e doutorado)', 'Reprografia (xerox) do CCJ'
              ],
              [
              'Elefante Branco - Bloco I', 'Sala de Triagem', 'Sala Maria Adeilda do Nascimento Carneiro', 'Salas de aula: 101 a 107', 'Laboratório de Técnicas de Enfermagem - Profª Anaísa Lins Batista, Laboratório Didático de Dentística Laboratorial', 'Laboratório Didático de Prótese Fixa', 'Laboratório Didático de Prótese Total', 'Laboratório Didático de Oclusão', 'Laboratório de Informática do CCS', 'Laboratório de Estudo do Equilíbrio, dinamometria e eletromiografia (LEEDE)', 'Laboratório de Ergoespirometria', 'Laboratório de Análise do Desenvolvimento Humano (LAHM)', 'Laboratório de Pesquisa Básica em Fisioterapia', 'Clínica de Estomatologia', 'Setor de Radiologia Odontológica', 'Xerox do EB1', 'Setor RH do CCS', 'Núcleo de Pesquisa em Ciências do Movimento Humano', 'Salas 133, 134, 135, 136, 139, 144, 145, 146, 147, 173', 'Sala de Expedição de Resultados', 'Sala Material Liac', 'Salas de aula do D.C.F 01 e 02', 'Laboratório de Análises Clínicas', 'Laboratório de Parasitologia', 'Laboratório de Farmacognosia', 'Laboratório de Micologia', 'Laboratório de Imunologia Clínica', 'Laboratório de Farmacotécnica', 'Laboratório de Clínica Farmacêutica', 'Laboratório de Hematologia', 'Laboratório 132', 'Laboratório de Bioquímica', 'Laboratório de Pesquisa: Atividade Antibacteriana e Antifungica de Produtos Naturais e/ou Sintéticos Bioativos', 'Almoxarifado do EB1'
              ],
              [
              'Elefante Branco - Bloco II', 'Departamento de Odontologia Restauradora CCS', 'Coordenação de Pós-graduação Odontologia', 'Núcleo de Pesquisa em Bioética - NEPB', 'Salas próximas ao Departamento de Fisioterapia: 1-9', 'Salas próximas ao departamento de Ciências Farmacêuticas: Sala de aula 1 e 2', 'Sala Profª Silvana Teresa L. Jales e Profº José Damião C. Borba', 'Sala Dr. Lauro Santos Filho e Dra. Isabele Beserra S. Gomes', 'Sala Profº Dr. João Vianney M. S. S. Maior e Profª Dra. Luciana Aranha', 'Laboratório de Biologia Bucal', 'Laboratório de Biomateriais I', 'Laboratório de Biomateriais II', 'Departamento de Fisioterapia', 'Núcleo de Estudos e Pesquisas Interdisciplinares em Biomateriais – NEPIBIO', 'Banco de Dentes Humanos BDH/CCS', 'Comitê de Ética em Pesquisa do CCS', 'Ambiente Docente – Professor Fábio Correia Sampaio', 'Ambiente Docente (sem identificação)', 'Copa di EB2', 'Auditórios do EB2', 'Grupo de Pesquisa em Biomateriais – GEPIBIO', 'Coordenação do Estágio Supervisionado em Análises Clínicas', 'Departamento de Ciências Farmacêuticas', 'Chefia do Departamento de Ciências Farmacêuticas', 'Sala Mestrado em Ciências da Nutrição', 'Sala dos professores de nutrição', 'Ambiente docente, sala 1 e 2 - Enfermagem Saúde Pública', 'Sala 1 e 2 - Enfermagem Clínica Pediátrica', 'Sala Enfermagem Obstétrica', 'Sala Enfermagem Psiquiátrica', 'Sala de reunião do EB2', 'Sala Epidemiologia', 'Sala de Planejamento e gestão', 'Sala Saúde Mental', 'Sala Pós-graduação', 'Especialização e residência', 'Sala Educação em Saúde', 'Sala Saúde e Trabalho', 'Departamento de Nutrição', 'Sala de audio-visual', 'Cantina do EB2', 'Chefia do Departamento de Nutrição', 'Departamento de Enfermagem em Saúde Coletiva', 'Copa do EB2', 'Auditório do EB2', 'Núcleo de Estudos em Saúde Coletiva - NESC', 'Coordenação do NESC', 'Secretaria do Estágio Rural Integrado - ERI', 'Coordenação do ERI', 'Auditório do ERI'
              ],
              [
              'CEBlocoC'
              ],
              [
              'CEBlocoAdministrativo'
              ],
              [
              'CEBlocoA'
              ],
              [
              'CEBlocoB'
              ],
              [
              'BlocoDeFonoaudiologia'
              ],
              [
              'AnexoAResidencia'
              ],
              [
              'BlocoDeTerapiaOcupacional'
              ],
              [
              'BlocoAResidencia'
              ],
              [
              'AuditorioDeTerapiaOcupacional'
              ],
              [
              'BlocoBResidencia'
              ],
              [
              'CRAS'
              ],
              [
              'BlocoBAnexoResidencia'
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
