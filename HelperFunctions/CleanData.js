import { data } from "../JSON/data.js"; //Get JSON Data to Clean
//Clean JSON Data and getting Relative Information **Categorized by Major Clubs**
function cleanData() {
  let myData = [];
  data.forEach(element => {
    if (
      element["Club"] == "Real Madrid" ||
      element["Club"] == "FC Barcelona" ||
      element["Club"] == "FC Bayern München" ||
      element["Club"] == "Juventus" ||
      element["Club"] == "Paris Saint-Germain" ||
      element["Club"] == "Liverpool" ||
      element["Club"] == "Manchester City" ||
      element["Club"] == "Manchester United" ||
      element["Club"] == "Chelsea"
    ) {
      myData.push(element);
    }
  });
  return myData;
}
export { cleanData };
