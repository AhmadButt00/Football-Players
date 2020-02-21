import { cleanData } from "../HelperFunctions/CleanData.js"; //Get Relative Data from the JSON


function getGoalKeepers() {
  //Getting Players Data Object Array
  let data = cleanData(); 
  let goalKeepersArr = [];
  data.forEach(element => {
    if (
      element["Position"] == "GK"
    ) {
      let gkOb = {
        name: element["Name"],
        club: element["Club"],
        nationality: element["Nationality"],
        rating: element["Overall"],
        wage: element["Wage"],
        position: element["Position"]
      };
      goalKeepersArr.push(gkOb);
    }
  });
  return goalKeepersArr;
  };
export {getGoalKeepers};