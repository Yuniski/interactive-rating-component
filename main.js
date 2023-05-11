import "./style.css";
import Attribution from "./components/Attribution";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

const app = document.getElementById("app");

app.innerHTML += Rating;
app.innerHTML += Thanks;
app.innerHTML += Attribution;

const submit = document.getElementById("submit");
const numItems = document.getElementsByClassName("num-item");
const numItemsArray = Array.from(numItems);

const getResult = () => {
  numItemsArray.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(element.innerText);
      return element.innerText;
    });
  });
};

getResult();

submit.addEventListener("click", () => console.log("btn submit"));
