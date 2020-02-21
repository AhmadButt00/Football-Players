import { cleanData } from "../HelperFunctions/CleanData.js"; //Get Relative Data from the JSON


function getMidFielders() {
  //Getting Players Data Object Array
  let data = cleanData(); 
  let midsArr = [];
  data.forEach(element => {
    if (
      element["Position"] == "RCM" ||
      element["Position"] == "LCM" ||
      element["Position"] == "LDM" ||
      element["Position"] == "CAM" ||
      element["Position"] == "CDM" ||
      element["Position"] == "RM" ||
      element["Position"] == "LAM" ||
      element["Position"] == "LM" ||
      element["Position"] == "RDM" ||
      element["Position"] == "CM" ||
      element["Position"] == "RAM"
    ) {
      let forwardOb = {
        name: element["Name"],
        club: element["Club"],
        nationality: element["Nationality"],
        rating: element["Overall"],
        wage: element["Wage"],
        position: element["Position"]
      };
      midsArr.push(forwardOb);
    }
  });
  return midsArr;
  };
export {getMidFielders};