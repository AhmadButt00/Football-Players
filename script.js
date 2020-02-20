import { Player } from "./Classes/PlayerClass.js"; //Player Class **Parent Class**
import { getPlayers } from "./HelperFunctions/GetPlayers.js"; //Get All Players Object
import { Forward } from "./Classes/Position/ForwardClass.js";
import { getForwards } from "./HelperFunctions/GetForwards.js";

//Getting Players Data Object Array
let playersArr = getPlayers();
//Inserting Row using Player Class
playersArr.forEach(playerOb => {
  let player = new Player(playerOb);
  player.insertRow();
});
//Display Players on Basis of Positions
function viewPosition() {
  let optionSelect = document.getElementById("positionSelect").value;
  switch (optionSelect) {
    case "forwards":
      viewForwards();
  }
}
//Display Forward Players
function viewForwards() {
  let forwardArr = getForwards();
  let forward = new Forward();
  forward.removeAllRows();
  forwardArr.forEach(forwardOb => {
    let forward = new Forward(forwardOb);
    forward.insertRow();
    forward.displayPosition();
    let centerFwd = forward.getCenter();
    console.log(centerFwd);
  });
}
//Position Select OnChange Attribute
const positionSelect = document.getElementById("positionSelect");
positionSelect.addEventListener("change", viewPosition);
