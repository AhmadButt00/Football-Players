import { cleanData } from "../HelperFunctions/CleanData.js"; //Get Relative Data from the JSON
let data = cleanData(); 
//Get Array of Objects of all Players Data
function getPlayers() {
  let playerArr = [];
  data.forEach(element => {
    let playerOb = {
      name: element["Name"],
      club: element["Club"],
      nationality: element["Nationality"],
      rating: element["Overall"],
      wage: element["Wage"]
    };
    playerArr.push(playerOb);
  });
  return playerArr;
}
export { getPlayers };
