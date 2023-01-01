import "./styles.css";
import { ef_colors, players } from "./main.js";
const queryString = window.location.search;
console.log("querystring", queryString);
const urlParams = new URLSearchParams(queryString);
const player = urlParams.get("player");
console.log("player", player);

const person = players[player];
console.log("person", person);

let personImage = document.getElementById("player-page-image");
let actualImage = document.createElement("img");
actualImage.setAttribute("src", person.actionimgurl);
personImage.appendChild(actualImage);
let personInfo = document.getElementById("player-page-info");
let actualInfo = document.createElement("h1");
actualInfo.setAttribute(
  "class",
  "display-1 text-center ef-individual-player-name"
);
