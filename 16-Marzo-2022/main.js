//ESERCIZIO 1 ----------------------------------------------------
const p = document.querySelector("#quote");

const quotes = [
  "Io sono tuo padre!",
  "guerra nessuno fatto grande",
  "fare o non fare... non c'è provare",
  "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
  "Sto più in alto di te!",
  ".... (cit. Darth Maul)",
  "Eri come un fratello per me! (pianto)",
];

const render = () => {
  const quotesItem = quotes[Math.floor(Math.random() * quotes.length)];
  p.innerHTML = quotesItem;
};
document.querySelector("#submit1").addEventListener("click", render);
render();

//ESERCIZIO 2---------------------\\
const q = (selector) => document.querySelector(selector);
const username = q("#userInput");
const img = q("#img");
const email = q("#userMail");
const submit = q("#submit2");
const commentsList = q("#comments");

const comments = [];

const renderComments = () => {
  commentsList.innerHTML = comments
    .map((comment) => {
      {
        comment.img = "https://randomuser.me/api/portraits/lego/6.jpg";
      }
      return `
      <div class="comment">
          <img src="${comment.img}" alt="Profile Pic">
          <div class="userData">
            <h3>Utente: ${comment.username}</h3>
            <p>Email: ${comment.email}</p>
       </div>
        <p class="message">Commento: ${comment.message}</p>
     </div>`;
    })
    .join("");
};

submit.addEventListener("click", () => {
  comments.push({
    message: message.value,
    username: username.value,
    email: email.value,
    img: img.value,
  });
  renderComments();
});
// const items = document.querySelectorAll("ul li");

// // for (let i = 0; i < items.length; i++) {
// //     console.log("ciclo array (nodelist)", i);
// // }

// const cb = (element, index) => {
//   //   console.log("ciclo array (nodelist)", element, index);
//   const text = element.innerHTML;
//   //console.log(text);
//   element.innerHTML = text.toUpperCase();
//   element.style.color = "red";
// };

// items.forEach(cb);

// console.log(items);

// //---------

// const things = [
//   "pulire i pavimenti",
//   "lavare i piatti",
//   "buttare la spazzatura",
//   "stirare",
// ];

// const ul = document.querySelector("#dinamica");

// //USARE IL FOR EACH PER CREARE UN ARRAY CON TAG LI NON E' CONSIGLIATO IN QUANTO
// //DISTRUGGE L-ARRAY ORIGINALE
// //MAP INVECE NO
// // const htmlThings = [];

// // things.forEach((e, i) => {
// //   htmlThings[i] = "<li>" + e + "</li>";
// // });

// const render = () => {
//   const htmlThings = things.map((element) => `<li>${element}</li>`);

//   ul.innerHTML = htmlThings.join("");
// };

// render();

// document.querySelector("button").addEventListener("click", () => {
//   const random = Math.floor(Math.random() * 99);
//   things.push(`diamo i numeri! ${random}`);
//   render();
// });

// ///------------------------------------------------------

// const input = document.querySelector("#input");
// const submit = document.querySelector("#submit");
// const commentslist = document.querySelector("#comments");

// const comments = [];

// const renderComments = () => {
//   commentslist.innerHTML = comments
//     .map(
//       (comment) => `
//     <li>
//         <h4>Utente anonimo (vigliacco)</h4>
//         <p>${comment}</p>
//     </li>`
//     )
//     .join("");
// };

// // const renderComments = () => {
// //     const commentItem = comments.map(
// //       (comment) => `
// //       <li>
// //           <h4>Utente anonimo (vigliacco)</h4>
// //           <p>${comment}</p>
// //       </li>`
// //     );

// //     commentslist.innerHTML = commentItem.join("");
// //   };

// submit.addEventListener("click", () => {
//   console.log(input.value);
//   comments.push(input.value);
//   input.value = "";
//   renderComments();
// });

// renderComments();
