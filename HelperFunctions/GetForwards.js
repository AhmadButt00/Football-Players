import { cleanData } from "../HelperFunctions/CleanData.js"; //Get Relative Data from the JSON


function getForwards() {
  //Getting Players Data Object Array
  let data = cleanData(); 
  let forwardsArr = [];
  data.forEach(element => {
    if (
      element["Position"] == "RF" ||
      element["Position"] == "ST" ||
      element["Position"] == "LW" ||
      element["Position"] == "LF" ||
      element["Position"] == "RS" ||
      element["Position"] == "LS" ||
      element["Position"] == "RW" ||
      element["Position"] == "CF"
    ) {
      let forwardOb = {
        name: element["Name"],
        club: element["Club"],
        nationality: element["Nationality"],
        rating: element["Overall"],
        wage: element["Wage"],
        position: element["Position"]
      };
      forwardsArr.push(forwardOb);
    }
  });
  return forwardsArr;
  };
export {getForwards};