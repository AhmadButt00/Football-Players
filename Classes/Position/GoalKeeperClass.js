import { Player } from "../PlayerClass.js";
//Class of Defender Players
class GoalKeeper extends Player {
  constructor(...args) {
    super(...args);
    this.playerObject = args[0];
  }
  getGoalKeeper(){
    return this.playerObject;
  }
  setGoalKeeper(...args){
    this.playerObject = args[0]
  }
}
export { GoalKeeper };
