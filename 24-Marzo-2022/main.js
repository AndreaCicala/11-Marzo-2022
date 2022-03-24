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
      ) 
      console.log(movie.id)
      });
});

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
    
    
    divEl.classList.add("card");
    h3El.classList.add("movieTitle");
    yearEl.classList.add("movieYear");
    imgEl.classList.add("cardImg");
    descriptionEl.classList.add("description");
    h2Title.classList.add("titleh2");
    delImg.classList.add("delImg");
  
    delImg.setAttribute("src", "https://i.ibb.co/kDPvsZ6/download.png");
    imgEl.setAttribute("src", imgUrl);
    h3El.textContent = title;
    descriptionEl.textContent = description;
    yearEl.textContent = year;
    genresEl.textContent = genre;
   
    
    divEl.append(imgEl, h3El, descriptionEl, yearEl, genresEl, delImg );
    document.querySelector(".wrapperMovies").appendChild(divEl);


    delImg.addEventListener("click", (e) => {
        e.preventDefault
        if (confirm("Vuoi davvero cancellare questo elemento?") == true) {
            divEl.remove();
                fetch(`https://edgemony-backend.herokuapp.com/movies/${index}`, {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                }}).then (() => location.reload());
        } else {
        alert("Ok!")
        }
    });

    divEl.addEventListener("mouseover", () => {
        delImg.style.visibility = "visible";
        })
    divEl.addEventListener("mouseleave", () => {
        delImg.style.visibility = "hidden";
        });
}
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


