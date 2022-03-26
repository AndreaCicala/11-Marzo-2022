//FETCH API\\
const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

const getMoviesData = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  }
};

getMoviesData().then((resultAPI) => {
  resultAPI.map((movie) => {
    createCard(
      movie.title,
      formatMinText(movie.description),
      movie.poster,
      movie.year,
      movie.genres,
      movie.id
    );
    console.log(movie.id);
  });
});

const q = (selector) => document.querySelector(selector);
const modalEl = document.querySelector(".modal");

//CARD CREATION\\
const createCard = (title, description, imgUrl, year, genre, index) => {
  const h2Title = document.querySelector(".h2title");
  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const descriptionEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const yearEl = document.createElement("p");
  const genresEl = document.createElement("p");
  const delImg = document.createElement("img");
  const modalDiv = document.createElement("div");

  divEl.classList.add("card");
  h3El.classList.add("movieTitle");
  yearEl.classList.add("movieYear");
  imgEl.classList.add("cardImg");
  descriptionEl.classList.add("description");
  h2Title.classList.add("titleh2");
  delImg.classList.add("delImg");
  modalDiv.classList.add("modalDiv");

  delImg.setAttribute("src", "https://i.ibb.co/kDPvsZ6/download.png");
  imgEl.setAttribute("src", imgUrl);
  h3El.textContent = title;
  descriptionEl.textContent = description;
  yearEl.textContent = "Release Date: " + year;
  genresEl.textContent = genre;

  divEl.append(imgEl, h3El, descriptionEl, yearEl, genresEl, delImg);
  document.querySelector(".wrapperMovies").appendChild(divEl);

  delImg.addEventListener("click", (e) => {
    e.preventDefault;
    if (confirm("Vuoi davvero cancellare questo elemento?") == true) {
      divEl.remove();
      fetch(`https://edgemony-backend.herokuapp.com/movies/${index}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => location.reload());
    } else {
      alert("Ok!");
    }
  });

  ////DELETE IMG\\\\
  divEl.addEventListener("mouseover", () => {
    delImg.style.visibility = "visible";
  });
  divEl.addEventListener("mouseleave", () => {
    delImg.style.visibility = "hidden";
  });

  ////CARD MODALE\\\\
  divEl.addEventListener("click", () => {
    q(".modal").style.visibility = "visible";
    modalDiv.innerHTML = divEl.innerHTML;
    document.querySelector(".modal").appendChild(modalDiv);
    imgEl.classList.add("modalImg");
    q(".wrapperMovies").style.filter = "blur(4px)";
    q(".header").style.filter = "blur(4px)";
    q(".logoImg").style.filter = "blur(4px)";
    q("h4").style.filter = "blur(4px)";
    delImg.style.visibility = "hidden";
  });

  modalDiv.addEventListener("click", () => {
    modalDiv.remove();
    q(".wrapperMovies").style.pointerEevents = "none";
    q(".wrapperMovies").style.filter = "none";
    q(".header").style.filter = "none";
    q(".logoImg").style.filter = "none";
    q("h4").style.filter = "none";
    location.reload();
  });
};

//

//ADDING FILMS
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const genreInputEl = document.getElementById("genres");
const submitInputEl = document.getElementById("submit");

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genres: genreInputEl.value,
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    }),
  }).then(() => {
    location.reload();
  });
});
