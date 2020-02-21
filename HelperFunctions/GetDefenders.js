import { cleanData } from "../HelperFunctions/CleanData.js"; //Get Relative Data from the JSON


function getDefenders() {
  //Getting Players Data Object Array
  let data = cleanData(); 
  let defendersArr = [];
  data.forEach(element => {
    if (
      element["Position"] == "RCB" ||
      element["Position"] == "CB" ||
      element["Position"] == "LCB" ||
      element["Position"] == "LB" ||
      element["Position"] == "RB" ||
      element["Position"] == "RWB" ||
      element["Position"] == "LWB"
    ) {
      let defenderOb = {
        name: element["Name"],
        club: element["Club"],
        nationality: element["Nationality"],
        rating: element["Overall"],
        wage: element["Wage"],
        position: element["Position"]
      };
      defendersArr.push(defenderOb);
    }
  });
  return defendersArr;
  };
export {getDefenders};