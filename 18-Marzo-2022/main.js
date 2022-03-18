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
let newArr = [];
people.sort();


/* -------------------------------------------------------------------------- */
/*                               Filtering Array                              */
/* -------------------------------------------------------------------------- */

const render = (value = "") => {
  const filteredPeople = people.filter((singles) =>
    singles.toLowerCase().includes(value.toLowerCase())
  );

  ul.innerHTML = filteredPeople
    .map((singles) => `<div class="cards">${singles}</div>`)
    .join("");
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

document.querySelector("#addButton").addEventListener("click", () => {
  newArr.push(document.querySelector("#addName").value, document.querySelector("#addUniverse").value);
  people.push(newArr.join(" - "));
  console.log(people);
  document.querySelector("#addName").value = "";
  document.querySelector("#addUniverse").value = "";
  newArr = [];
  render();
});

