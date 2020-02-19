import {Player} from './Classes/PlayerClass.js';
import {getPlayers} from './HelperFunctions/GetPlayers.js';

let playersArr = getPlayers();
playersArr.forEach(playerOb => {
    let player = new Player(playerOb,'playerTable');
    player.insertRow();
})
const dataTable = new DataTable("#playerTable");