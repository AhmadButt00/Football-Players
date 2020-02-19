import {cleanData} from '../HelperFunctions/CleanData.js';
let data = cleanData();
function getPlayers(){
    let playerArr = [];
    data.forEach(element => {
        let playerOb = {
            "name": element["Name"],
            "club": element["Club"],
            "nationality": element["Nationality"],
            "rating": element["Overall"],
            "wage": element["Wage"],
        }
        playerArr.push(playerOb)
    });
    return playerArr;
}
export {getPlayers};