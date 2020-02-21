import { Player } from "../PlayerClass.js";
//Class of forward Players
class Forward extends Player {
  constructor(...args) {
    super(...args);
    this.playerObject = args[0];
  }
  getForward(){
    return this.playerObject;
  }
  setForward(...args){
    this.playerObject = args[0]
  }
  //Get Center Forwards
  getCenter() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "CF" ||
        this.playerObject.position == "ST"
      ) {
        return this.playerObject;
      }
    }
  }
  //Get Center Forwards
  getRight() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "RF" ||
        this.playerObject.position == "RW" ||
        this.playerObject.position == "RS"
      ) {
        return this.playerObject;
      }
    }
  }
  //Get Center Forwards
  getLeft() {
    if (this.playerObject != undefined) {
      if (
        this.playerObject.position == "LF" ||
        this.playerObject.position == "LW" ||
        this.playerObject.position == "LS"
      ) {
        return this.playerObject;
      }
    }
  }
}
export { Forward };
