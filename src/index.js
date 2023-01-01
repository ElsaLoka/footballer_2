import "./styles.css";
import { players, ef_colors } from "./main.js";

console.log("Index: ", players);
players.forEach((person) => {
  let playerGrid = document.getElementById("player_grid");
  let gridSquare = document.createElement("div");
  gridSquare.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");
  playerGrid.appendChild(gridSquare);
  let cardLayout = document.createElement("div");
  cardLayout.setAttribute("class", "ef-card text-center");
  gridSquare.appendChild(cardLayout);
  let efLink = document.createElement("a");
  efLink.setAttribute(
    "href",
    "player-profile.html?player=" + person.ballondor_rank
  );
  cardLayout.appendChild(efLink);
  let cardSpan = document.createElement("span");
  efLink.appendChild(cardSpan);
  let playerCircle = document.createElement("span");
  playerCircle.setAttribute("class", "circle-face");
  playerCircle.setAttribute(
    "style",
    "background-color:" + calcColor(person.ballondor_rank)
  );
  cardSpan.appendChild(playerCircle);
  let playerImage = document.createElement("img");
  playerImage.setAttribute("src", person.profimgurl);
  playerCircle.appendChild(playerImage);
  let playerTextMP = document.createElement("p");
  playerTextMP.setAttribute("class", "player-name");
  let innerText = person.ballondor_rank + ". " + person.name;
  playerTextMP.innerText = innerText;
  cardSpan.appendChild(playerTextMP);
});

function calcColor(rank) {
  return ef_colors[(rank % 8) - 1];
}
