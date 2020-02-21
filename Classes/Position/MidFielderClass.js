import { Player } from "../PlayerClass.js";
//Class of forward Players
class MidFielder extends Player {
  constructor(...args) {
    super(...args);
    this.playerObject = args[0];
  }
  getMid(){
    return this.playerObject;
  }
  setMid(...args){
    this.playerObject = args[0]
  }
  //Get Holding Midfielders
  getHolding() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "RCM" ||
        this.playerObject.position == "LCM" ||
        this.playerObject.position == "RM" ||
        this.playerObject.position == "LM" ||
        this.playerObject.position == "CM"
      ) {
        return this.playerObject;
      }
    }
  }
  //Get Attacking Midfielders
  getAttacking() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "CAM" ||
        this.playerObject.position == "RAM" ||
        this.playerObject.position == "LAM"
      ) {
        return this.playerObject;
      }
    }
  }
  //Get Defensive MidFielders
  getDefensive() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "CDM" ||
        this.playerObject.position == "LDM" ||
        this.playerObject.position == "RDM"
      ) {
        return this.playerObject;
      }
    }
  }
}
export { MidFielder };
