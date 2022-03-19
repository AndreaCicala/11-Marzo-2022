const people = [
  "Luke Skywalker - Star Wars",
  "Jack Burton - Grosso guaio a Chinatown",
  "Jhonny Silverhad - Cyberpunk 2077",
  "Bilbo Baggins - Il signore degli anelli",
  "Rick Sanchez - Rick & Morty",
  "Master Chief - Halo",
  "Eleven - Stranger Things",
];

const ul = document.querySelector("#personsList");
const secondInput = document.querySelector("#searchInput");
people.sort();

/* -------------------------------------------------------------------------- */
/*                               Filtering Array                              */
/* -------------------------------------------------------------------------- */
document.querySelector("#addButton").addEventListener("click", () => {
  people.push([document.querySelector("#addName").value, document.querySelector("#addUniverse").value].join(" - "));
  console.log(people);
  document.querySelector("#addName").value = "";
  document.querySelector("#addUniverse").value = "";
  render();
});


const render = (value = "") => {
  let finalArr = [];
  const filteredPeople = people.filter((singles) =>
    singles.toLowerCase().includes(value.toLowerCase())
  );
  
  filteredPeople.forEach((elem) => {
    let elemArray = elem.split(" - ");
    finalArr.push(elemArray);
  });

  ul.innerHTML = finalArr
    .map((singles) => `<div class="cards"><h3 class="chars">${singles[0]}</h3><p>${singles[1]}</p></div>`)
    .join("");

    if (filteredPeople.length === 0){
      ul.innerHTML = "Nessun risultato trovato"
    }
};

/* -------------------------------------------------------------------------- */
/*                                 Search Input                               */
/* -------------------------------------------------------------------------- */

secondInput.addEventListener("keyup", () => {
  const value = secondInput.value;
  render(value);
});
render();

/* -------------------------------------------------------------------------- */
/*                                 Add Input                                  */
/* -------------------------------------------------------------------------- */


