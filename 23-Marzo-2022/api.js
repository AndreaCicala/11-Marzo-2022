import { createCard, formatText } from "./main.js";

const getAPIdata = async (URL, item = "") => {
  const res = await fetch(`${URL}${item}`);

  return await res.json();
}

getAPIdata("https://fakestoreapi.com/products").then((data) => {
  data.map((product) => {console.log(data)
    createCard(
      product.title,
      formatText(product.description),
      product.image,
      product.price + " $"
    );
    });
});

export {getAPIdata};