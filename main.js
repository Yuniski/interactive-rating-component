import "./style.css";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

const app = document.getElementById("app");

app.innerHTML += Rating;
app.innerHTML += Thanks;
app.innerHTML += Attribution;

const ratingDiv = document.getElementById('rating');
const thanksDiv = document.getElementById('thanks');
const resultDiv = document.getElementById('result');
const submit = document.getElementById("submit");
const numItems = document.getElementsByClassName("num-item");
const numItemsArray = Array.from(numItems);
let result = "";

numItemsArray.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!element.classList.contains('active')) {
      numItemsArray.forEach((item) => {
        item.classList.remove('active');
      });

      element.classList.add('active');
      result = element.innerText;
    }
  });
});

submit.addEventListener('click', () => {
  resultDiv.innerHTML= `<h4>You selected <span>${result}</span> out of 5</h4>`;
  ratingDiv.classList.add('hide');
  thanksDiv.classList.remove('hide');
});
