import { cleanData } from "../HelperFunctions/CleanData.js"; //Get Relative Data from the JSON
let data = cleanData();

//Get Array of Objects of all Players Data Club wise
function getClubPlayers(name) {
  let clubPlayerArr = [];
  data.forEach(element => {
    let clubPlayerOb = {
      name: element["Name"],
      club: element["Club"],
      nationality: element["Nationality"],
      rating: element["Overall"],
      wage: element["Wage"],
      position: element["Position"]
    };
    if (element["Club"] == name) {
      // Get players of selected club
      clubPlayerArr.push(clubPlayerOb);
    }
  });
  return clubPlayerArr;
}
export { getClubPlayers };
