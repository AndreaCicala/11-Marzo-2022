import { getAPIdata } from "./api.js";

const createCard = (title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
  
    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
  
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
  
    divEl.append(h3El, parDescEl, imgEl, parPriceEl);
    document.querySelector(".cardsWrapper").appendChild(divEl);



    divEl.addEventListener("click", () =>{
        confirm("Sei sicuro di voler rimuovere questa card?")
        if (confirm){          
            divEl.remove();
        }
        
    });

};

const formatText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";
export {createCard, formatText}

