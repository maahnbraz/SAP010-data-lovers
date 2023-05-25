import data from "./data/breakingbad/breakingbad.js";

import dataFunctions from "./data.js";

const characters = data.breaking_bad;
const cardContainer = document.querySelector("#card-container");
const selectStatus = document.querySelector("#select-status");
const selectCategory = document.querySelector("#select-category");
const searchForName = document.querySelector("#btn-search"); //cria busca por nome.
const reset = document.querySelector("#reset"); //cria o argumento de reset.
const percentageElement = document.querySelector("#percentage");
const selectOrder = document.querySelector("#select-order");

function displayCards(characters) {
  const arrayResults = characters.map((item) => {
    const template = `                
        <div class="card">

            <img class="poster-img" src="${item.img}" alt="${item.name}">
            <ul class="card-text" style="list-style: none">                       
            <li>Name: ${item.name}</li>
            <li>NickName: ${item.nickname}</li>
            <li>Status: ${item.status}</li>
            <li>Occupation: ${item.occupation}</li>
            <li>Birthday: ${item.birthday}</li>
            <li>Portrayed: ${item.portrayed}</li> 
            <li>Category: ${item.category}</li>
           
            </ul>                

        </div>
        `;
    return template;
  });
  return arrayResults.join("");
}
cardContainer.innerHTML = displayCards(characters);

selectStatus.addEventListener("change", (event) => {
  const value = event.target.value;
  const filteredList = dataFunctions.filter(characters, value, "status");
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;

  const percentage = dataFunctions.calculatePercentage(
    characters.length,
    filteredList.length
  );
  percentageElement.innerHTML =
    "This category represents " + percentage + "% of the characters";
});

selectCategory.addEventListener("change", (event) => {
  const value = event.target.value;
  const filteredList = dataFunctions.filter(characters, value, "category");
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;

  const percentage = dataFunctions.calculatePercentage(
    characters.length,
    filteredList.length
  );
  percentageElement.innerHTML =
    "This category represents " + percentage + "% of the characters";
});

selectOrder.addEventListener("change", (event) => {
  const value = event.target.value;
  const orderedList = dataFunctions.order(characters, value);
  const cards = displayCards(orderedList);
  cardContainer.innerHTML = cards;
});

reset.addEventListener("click", (event) => {
  location.reload(event);
});

searchForName.addEventListener("keyup", function (event) {
  const value = event.target.value;
  const filteredList = dataFunctions.searchName(characters, value);
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;
});
