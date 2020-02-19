import { Player } from "./Classes/PlayerClass.js"; //Player Class **Parent Class**
import { getPlayers } from "./HelperFunctions/GetPlayers.js"; //Get All Players Object

//Getting Players Data Object Array
let playersArr = getPlayers();

//Inserting Row using Player Class
playersArr.forEach(playerOb => {
  let player = new Player(playerOb, "playerTable");
  player.insertRow();
});
//Initializing the Vanilla DataTable
const dataTable = new DataTable("#playerTable");
