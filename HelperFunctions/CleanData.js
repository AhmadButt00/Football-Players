import { data } from "../JSON/data.js";
function cleanData() {
  let myData = [];
  data.forEach(element => {
    if (
      element["Club"] == "Real Madrid" ||
      element["Club"] == "FC Barcelona" ||
      element["Club"] == "Bayern Munich" ||
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
export {cleanData};
