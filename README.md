<div align="center">

# Data Lovers - Breaking Bad
</div>

<div align="center">

  Acesse o projeto: [aqui](https://maahnbraz.github.io/SAP010-data-lovers/)  
  <br>
  Status do projeto: Concluído ✔<br>
  Tecnologias utilizadas: <br>

  <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
  <img src="https://skillicons.dev/icons?i=html"/>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
  <img src="https://skillicons.dev/icons?i=css"/>
  <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">
  <img src="https://skillicons.dev/icons?i=js"/>
  <a href="https://git-scm.com/">
  <img src="https://skillicons.dev/icons?i=git"/>
  <a href="https://github.com/">
  <img src="https://skillicons.dev/icons?i=github"/>
  <a href="https://jestjs.io/pt-BR/">
  <img src="https://skillicons.dev/icons?i=jest"/>
  <a href="https://figma.com/">
  <img src="https://skillicons.dev/icons?i=figma"/>
   <a href="https://nodejs.org/en">
  <img src="https://skillicons.dev/icons?i=nodejs"/>
  </div>
  

## Índice

- [1. Resumo do projeto](#1-resumo-do-projeto)
- [2. Histórias de usuários](#2-histórias-de-usuário)
- [3. Desenho de interface do usuário](#3-desenho-de-interface-do-usuário)
- [4. Testes de usabilidade](#4-testes-de-usabilidade)
- [5. Testes unitários](#5-testes-unitários)
- [6. Objetivos alcançados](#6-objetivos-alcançados)
- [7. Desenvolvedoras](#7-desenvolvedoras)

---

## 1. Resumo do projeto

Desenvolvido no bootcamp da [Laboratória](https://www.laboratoria.la/br), o projeto Data Lovers teve como objetivo principal a construção de uma página web que permitisse ao usuário visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado, conforme a sua necessidade.

O tema escolhido foi Breaking Bad, e o site é destinado aos fãs da série. Nele, os fãs podem fazer pesquisas sobre os seus principais personagens, utilizando os filtros existentes.

## 2. Histórias de usuário

**História do usuário 1:**
_"Sou um fã da série, e gostaria de saber que personagens aparecem em Breaking Bad e quais aparecem em Better Call Saul."_

A partir desta necessidade do usuário, foi criado o filtro por séries, no qual ele pode selecionar os personagens buscando pelas séries em que atuam.

**História do usuário 2:**
_"Como fã da série, gostaria de relembrar quais personagens ainda estão vivos e quais não estão mais."_

A partir desta história, foi criado o filtro por status, que retorna quais personagens estão vivos e quais estão falecidos ou presumidamente falecidos.

## 3. Desenho de interface do usuário

O protótipo do site foi feito primeiramente à mão, para que, posteriormente, pudesse ser feito na plataforma Figma. Houveram algumas adequações ao longo do projeto para que houvesse uma melhor experiência do usuário. Por exemplo, os filtros foram adequados para que o usuário pudesse navegar mais facilmente entre eles:

#### Protótipo de baixa fidelidade

![Alt text](src/img/prot%C3%B3tipo%20-%20baixa%20fidelidade.jpeg)

Os filtros de "apelido", "ocupação" e "status" foram substituídos por "status" e "série". Os dois últimos correspondem a um número maior de personagens, permitindo ao usuário fazer uma busca que fosse mais abrangente. Além disso, o filtro por séries permite ao usuário ver em quais séries o personagem atua. Veja os protótipos abaixo, feitos no Figma:

#### Protótipo de alta fidelidade versão desktop

![Alt text](src/img/Prot%C3%B3tipo%20de%20alta%20fidelidade%20-%20desktop.png)

#### Protótipo de alta fidelidade versão mobile

![Alt text](src/img/Prot%C3%B3tipo%20de%20alta%20fidelidade%20-%20mobile.png)

## 4. Testes de usabilidade

Teste de Usabilidade

O usuário que realizou o Teste de interface e a Reavaliação do design do produto, identificou que a navegabilidade é de fácil entendimento. Na primeira página, após ler a apresentação, entendeu que era para clicar na van, e por ela se tornar opaca deu maior destaque à função dela.

Ao navegar na página que contém os card, o usuário identificou que a navegabilidade também era de fácil entendimento, gostou da posição do logo e estética dos cards, e pontuou possíveis melhorias:

![Alt text](src/img/header%20e%20botoes.png)

Problema 1:
Segundo o usuário, o botão “clear” poderia mudar de forma ou de lugar, pois está exatamente igual aos outros, o que poderia causar confusão e fazer com que ele também parecesse um botão de filtro.
Solução:
Foi mantido o formato do botão e ele foi movido para a linha debaixo após todos os botões de filtro.

Problema 2:
Ainda nos botões, percebeu que o botão “back” poderia ter outro nome e ganhar uma marcação de seta.
Solução: Foi colocado uma seta e alterado seu nome para “Previous”.

Problema 3:
No espaço de pesquisa por personagem, acrescentar o “name”, pois a busca é somente pelo nome do personagem, caso tente procurar por “nickname” não conseguirá.
Solução: Alterou o texto para “Search for name”

Problema 4:
Pontuou que o “corte” entre o header e os cards estava estranho, sugerindo que pudesse colocar outra tonalidade de preto, ou que o fundo dos cards a acompanhasse até em cima.
Solução: Foi removido o background do header, e colocada a imagem de fundo no body inteiro.

As soluções podem ser verificadas no site atual.

## 5. Testes unitários

Conforme estabelecido no Projeto os testes unitários devem ter cobertura mínima de 70% de statements (sentenças), functions (funções), lines (linhas), e branches (ramos) do arquivo src/data.js, que irá conter as funções, o nosso projeto cobriu 100%.

Lembrando que todos os teste foram escritos por nós.

![Alt text](src/img/testesUnitarios.png)

## 6. Objetivos alcançados

- [x] Usar VanillaJS.
- [x] Passa pelo linGIter (`npm run pretest`)
- [x] Passa pelos testes (`npm test`)
- [x] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
      branches.
- [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [x] Inclui histórias de usuário no `README.md`.
- [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [x] Inclui uma lista de problemas detectados nos testes de usabilidade no
      `README.md`.
- [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
- [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
- [x] UI: Permite filtrar dados com base em uma condição.
- [x] UI: É _responsivo_.

## 7. Desenvolvedoras

Geane Ramos

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/geanemr)](https://github.com/geanemr) [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/geane-moraes-ramos/)](https://www.linkedin.com/in/geane-moraes-ramos/)

Marina Braz

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/maahnbraz)](https://github.com/maahnbraz) [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://https://www.linkedin.com/in/marinanbraz/)](https://www.linkedin.com/in/marinanbraz/)
