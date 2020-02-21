import { Player } from "../PlayerClass.js";
//Class of Defender Players
class Defender extends Player {
  constructor(...args) {
    super(...args);
    this.playerObject = args[0];
  }
  getDefender() {
    return this.playerObject;
  }
  setDefender(...args) {
    this.playerObject = args[0];
  }
  //Get Centeral Defenders
  getCenter() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "RCB" ||
        this.playerObject.position == "LCB" ||
        this.playerObject.position == "CB"
      ) {
        return this.playerObject;
      }
    }
  }
  //Get WingBacks
  getWingBack() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "LB" ||
        this.playerObject.position == "RB" ||
        this.playerObject.position == "RWB" ||
        this.playerObject.position == "LWB"
      ) {
        return this.playerObject;
      }
    }
  }
}
export { Defender };
