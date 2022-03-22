//ES-1//    

// let a = parseInt(prompt('inserisci primo numero'));
// let b = parseInt(prompt('inserisci secondo numero'));

// myInterval = setI11111nterval(function() {
//     console.log(a + b);
// }, 10000);

// const btn = document.createElement("button");
// btn.innerHTML = "Time Out";
// document.body.appendChild(btn);

// btn.addEventListener("click", () => {
//     clearTimeout(myInterval)
// });


//ES-2//
  
        const h2El = document.createElement("h2");
        document.body.appendChild(h2El);
        
  const createChars = (name, height, gender, birth_year) => {
        
        const divEl = document.createElement("div");
        const nameEl = document.createElement("h3");
        const heightEl = document.createElement("p");
        const genderDesc = document.createElement("p");
        const birthEl = document.createElement("p");

        divEl.classList.add("cards");
        nameEl.textContent = name;
        heightEl.textContent = "Height: " + height + "cm";
        genderDesc.textContent = "Gender: " + gender;
        birthEl.textContent = "Birth: " + birth_year;
        h2El.textContent = 'Personaggi Immaginari:';

        divEl.append(nameEl, heightEl, genderDesc, birthEl);
        document.body.appendChild(divEl);
  }
  
  fetch("https://swapi.dev/api/people/")
  .then((res) => res.json())
  .then((data) => { 
      let entries = Object.values(data)[3];
      console.log(entries)
        entries.map(
        ({ name, height, gender, birth_year }) => {
            createChars(name, height, gender, birth_year);
                localStorage.setItem("entries", JSON.stringify(data));
        }
      )
  });


 
