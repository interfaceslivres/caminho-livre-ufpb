# Caminho Livre UFPB

O Caminho Livre UFPB é uma solução web de código aberto que possibilita a criação de mapas georeferenciados, contendo a identificação sobre a presença ou ausência de acessibilidade, promovendo a inclusão das pessoas com necessidades especiais por meio da socialização das informações de acesso aos locais públicos que eventualmente são o seu destino. O projeto surgiu em meados de 2014 da percepção de que não existe muita informação acerca da acessibilidade nas soluções de geolocalização disponibilizadas na web. A maioria dos estabelecimentos e ruas não são acessíveis e é difícil saber quando são. O escopo é a UFPB (Universidade Federal da Paraíba), mas pode ser reaplicado em qualquer área que possa vir a interessar.

## Acesso

O projeto encontra-se online e pode ser acessado através do link: http://www.cchla.ufpb.br/mapa . Esta versão é a mais estável, entretanto, não é a mais atualizada. Se o objetivo for desenvolver ou realizar testes, visualize a versão mais atual, fazendo uma cópia do projeto para sua máquina local seguindo as instruções abaixo.

### Instalando

1. Faça o download do arquivo compactado disponível neste repositório;
2. Extraia todos os arquivos (Importante. Sem esse passo a página ficará quebrada);
3. Execute o arquivo index.html

## Instruções para o desenvolvimento

Todo o código pode ser modificado e readaptado para a situação desejada. Encontram-se, entretanto, algumas predefinições que podem ser apenas ajustadas para obtenção de um resultado similar ao atual. Procure no índice abaixo o que deseja alterar:

### Índice

* [Inserir Prédio](https://github.com/interfaceslivres/caminho-livre-ufpb#inserir-prédio)
* [Busca por setor](https://github.com/interfaceslivres/caminho-livre-ufpb#busca-por-setor)
* [Definições de mapa](https://github.com/interfaceslivres/caminho-livre-ufpb#definições-de-mapa)
* [Inserir Foto Panorâmica](https://github.com/interfaceslivres/caminho-livre-ufpb#inserir-foto-panorâmica)

### Inserir Prédio

Para inserir um prédio, é necessário seguir os seguintes passos:

#### OpenStreetMap

Certifique-se de que o prédio a ser inserido existe e está com os dados corretos no [OpenStreetMap](http://www.openstreetmap.org). Este passo não é obrigatório, mas é uma boa prática que facilita o desenvolvimento.

#### GeoJson

Acesse o site [GeoJson](http://www.geojson.io), desenhe o prédio desejado e copie as coordenadas que serão disponibilizadas ao lado.

#### data.js

No arquivo data.js, insira as coordenadas retiradas do geojson numa nova variável. Sugestão de nome para manter a organização: xyNomeDoLocal.

```
var xyNomeDoLocal = 

[
          [
          [
            -34.85094219446182,
            -7.14376164585454
          ],
          [
            -34.85056668519974,
            -7.143652528946665
          ],
          [
            -34.85044866800308,
            -7.144038430089414
          ],
          [
            -34.85082149505615,
            -7.144144885519743
          ],
          [
            -34.85094219446182,
            -7.14376164585454
          ]
          ]
        ];
```

Insira o objeto NomeDoLocal na variável data e acrescente a variável xyNomeDoLocal em coordinates:

```
{
      type: "Feature",
      name: "Nome do Local",
      properties: {
    wallColor: "rgba(0,123,190,1.5)",
    roofColor: "rgba(0,157,255,1.5)",
    height: 9
    },
      geometry: {
        type: "Polygon",
        coordinates: xyNomeDoLocal
      }
    }
```

As propriedades [b]wallColor[/b] e [b]roofColor[/b] se referem à cor dos prédios. A propriedade [b]height[/b] se refere à altura do prédio.


#### data2.js

No arquivo data2.js, insira a variável NomeDoLocal

```
var NomeDoLocal = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: xyNomeDoLocal
    }
  }]
};
```

#### popups.js

No arquivo popups.js, insira a variável NomeDoLocal_pop, para acrescentar informações à popup do prédio:

```
var NomeDoLocal_pop = InserirPopUp(
//Número de Andares (1,2,3)
2,
//Nome do prédio
"Nome do Local",
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
```

Esta variável recebe a instância da função InserirPopUp, portanto deve ser personalizada seguindo o modelo, mantendo as vírgulas entre as entradas.

#### navigation.js

No arquivo navigation.js, na variável buscas, acrescente a matriz das palavras-chave necessárias para encontrar o prédio na busca:

```
[ 'Nome do Local', 'Cozinha do Local', 'Sigla do Local', 'etc' ]
```

Obs: mantenha a mesma ordem de matrizes da variável [b]predios[/b], encontrada no index.html.

#### index.html

Em index.html, acrescente a matriz do local à variável predios, substituindo o primeiro campo pela variável criada em data2 e o segundo com o nome do local:

```
[
              'NomeDoLocal',
              'Nome Do Local'
]
```


### Busca por setor

Para criar uma busca por blocos específicos de prédio, siga os seguintes passos:

#### data.js

Acrescente aqui uma variável com o nome do bloco desejado. Insira as variáveis de local dentro dela:

```
var dataBlocoLocais1 = {
  type: "FeatureCollection",
  features: [


    {
      type: "Feature",
      name: "Nome do Local A",
      properties: {
    wallColor: "rgba(0,123,190,1.5)",
    roofColor: "rgba(0,157,255,1.5)",
    height: 9
    },
      geometry: {
        type: "Polygon",
        coordinates: xyNomeDoLocalA
      }
    },

    {
      type: "Feature",
      name: "Nome do Local B",
      properties: {
    wallColor: "rgba(0,123,190,1.5)",
    roofColor: "rgba(0,157,255,1.5)",
    height: 5
    },
      geometry: {
        type: "Polygon",
        coordinates: xyNomeDoLocalB
      }
    }
}
```

#### index.html

No menu do index, acrescente o botão para visualizar apenas esta área:

```
<p><button class="menu-area" onclick="sobeBlocoLocais1();">Bloco Locais 1</button></p>
```

Acrescente a função sobeBlocoLocal1 para fazer o menu funcionar:

```
function sobeBlocoLocais1(){
              
              new OSMBuildings(map).set(dataBlocoLocais1);
              map.setView([-7.1395, -34.8507], 18);

        }; 
```

Altere as coordenadas do map.setView para setar a visualização do mapa quando a opção for clicada.

### Definições de mapa

Descricao

#### Estilo

Passo 1

```
Código
```

#### Escopo

Passo 1

```
Código
```

#### Inicialização

Passo 1

```
Código
```


### Inserir foto panorâmica

Passo 1

```
Exemplo
```


## Feito com

* [OSMBuildings](https://osmbuildings.org/) - Interactive 3D Maps.
* [OpenStreetMap](https://www.openstreetmap.org/) - A map of the world, created by people like you and free to use under an open license.
* [GeoJson](http://geojson.org) - GeoJSON is a format for encoding a variety of geographic data structures.
* [LeafLet](http://leafletjs.com/) - An open-source JavaScript library for mobile-friendly interactive maps.
* [Pannellum](https://pannellum.org/) - Pannellum is a lightweight, free, and open source panorama viewer for the web.


## Colaborando

Para colaborar, reportar algum bug ou sugerir melhorias, entre em contato conosco através do formulário de contato contido no seguinte endereço: http://www.cchla.ufpb.br/mapa/collab.html. Ficaremos muito felizes em ouvir o que tem a dizer.


## Autores

Este é um produto desenvolvido pelo projeto Interfaces Livres (http://github.com/interfaceslivres). Segue a lista de colaboradores:
* **Paulo Henrique** - *Coordenador* - [PauloHSMS](https://paulohsms.com)
* **Layse Julyanne** - *Idealização*
* **Haroldo Carvalho** - *Front-End* - [eiHarold](https://eiharold.com)
* **Júlio Ximenes** - *Front-End*
* **Matheus Beltrão** - *Conteúdo*
* **Marina Lauritzen** - *Pesquisa*
* **Edson** - *Conteúdo*
