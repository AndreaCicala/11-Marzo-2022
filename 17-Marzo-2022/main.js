// "stampare" questi in pagina in una lista HTML
// aggiungere una input di testo e un button sopra la lista, quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input
// [opzionalmente] stilare il tutto

const movies = [
  "Deadpool",
  "Dune",
  "Grosso guaio a Chinatown",
  "V per vendetta",
  "Pulp Fiction",
  "Signore degli anelli",
  "Scarface",
  "Sharknado (1,2,3,4,5 e 6)",
  "Blade Runner",
  "Il signore degli Anelli",
];

const ul = document.querySelector(".filmList");
movies.sort();

const filmList = (element, index) => {
  ul.textContent = "";
  for (index in movies) {
    const moviesEl = document.createElement("li");
    moviesEl.textContent = movies[index];
    ul.appendChild(moviesEl);
  }
};
filmList();

submit.addEventListener("click", () => {
  const input = document.querySelector("input");
  const matching = movies.filter((movie) =>
    movie.toLowerCase().includes(input.value.toLowerCase())
  );
  if (input.value == "") {
    ul.innerHTML = "Non hai inserito alcun filtro!";
  } else if (matching.length === 0) {
    ul.innerHTML = "Questo titolo non è disponibile";
  } else {
    ul.innerHTML = matching
      .map((movie) => `<li class="list">${movie}</li>`)
      .join("");
  }
});

reset.addEventListener("click", () => {
  document.querySelector("input").value = "";
  filmList();
});
