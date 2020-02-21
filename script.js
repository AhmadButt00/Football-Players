import { Player } from "./Classes/PlayerClass.js"; //Player Class **Parent Class**
import { getPlayers } from "./HelperFunctions/GetPlayers.js"; //Get All Players Object
import { Forward } from "./Classes/Position/ForwardClass.js";
import { getForwards } from "./HelperFunctions/GetForwards.js";
import { MidFielder } from "./Classes/Position/MidFielderClass.js";
import { getMidFielders } from "./HelperFunctions/GetMidFielders.js";
import {
  displayFwd,
  displayMid,
  displayDef,
  displayGK
} from "./HelperFunctions/DisplayPositionSelect.js";
import { Defender } from "./Classes/Position/DefenderClass.js";
import { getDefenders } from "./HelperFunctions/GetDefenders.js";
import { getGoalKeepers } from "./HelperFunctions/GetGoalKeepers.js";
import { GoalKeeper } from "./Classes/Position/GoalKeeperClass.js";
import { getClubPlayers } from "./HelperFunctions/GetClubPlayers.js";

//Getting Players Data Object Array
let playersArr = getPlayers();
//Inserting Row using Player Class
playersArr.forEach(playerOb => {
  let player = new Player(playerOb);
  player.insertRow();
});
//Display Players on Basis of Positions
function viewPosition() {
  let optionSelect = document.getElementById("positionSelect").value;
  switch (optionSelect) {
    case "forwards":
      displayFwd();
      viewForwards();
      break;
    case "midfielders":
      displayMid();
      viewMidFielders();
      break;
    case "defenders":
      displayDef();
      viewDefenders();
      break;
    case "goalKeepers":
      displayGK();
      viewGoalKeepers();
      break;
  }
}

//Get All GoalKeepers
let gkArr = getGoalKeepers();
//Display Forward Players
function viewGoalKeepers() {
  let gk = new GoalKeeper();
  gk.removeAllRows();
  gkArr.forEach(gkOb => {
    let gk = new Defender(gkOb);
    gk.insertRow();
  });
}

//Get All Forwards
let forwardArr = getForwards();
//Display Forward Players
function viewForwards() {
  let forward = new Forward();
  forward.removeAllRows();
  forwardArr.forEach(forwardOb => {
    let forward = new Forward(forwardOb);
    forward.insertRow();
    forward.displayPosition();
  });
}

//Get All MidFielders
let midsArr = getMidFielders();
//Display MidField Players
function viewMidFielders() {
  let mid = new MidFielder();
  mid.removeAllRows();
  midsArr.forEach(midOb => {
    let mid = new MidFielder(midOb);
    mid.insertRow();
    mid.displayPosition();
  });
}

//Get All Defenders
let defsArr = getDefenders();
//Display Defending Players
function viewDefenders() {
  let def = new Defender();
  def.removeAllRows();
  defsArr.forEach(defOb => {
    let def = new Defender(defOb);
    def.insertRow();
    def.displayPosition();
  });
}
//Position Select OnChange Attribute
const positionSelect = document.getElementById("positionSelect");
positionSelect.addEventListener("change", viewPosition);

//view center forwards
function viewCenterFwd() {
  let forward = new Forward();
  forward.removeAllRows();
  forwardArr.forEach(forwardOb => {
    let forward = new Forward(forwardOb);
    let centerFwd = forward.getCenter();
    if (centerFwd != undefined) {
      forward.insertRow(centerFwd);
    }
  });
}
//view right forwards
function viewRightFwd() {
  let forward = new Forward();
  forward.removeAllRows();
  forwardArr.forEach(forwardOb => {
    let forward = new Forward(forwardOb);
    let rightFwd = forward.getRight();
    if (rightFwd != undefined) {
      forward.insertRow(rightFwd);
    }
  });
}
//view left forwads
function viewLeftFwd() {
  let forward = new Forward();
  forward.removeAllRows();
  forwardArr.forEach(forwardOb => {
    let forward = new Forward(forwardOb);
    let leftFwd = forward.getLeft();
    if (leftFwd != undefined) {
      forward.insertRow(leftFwd);
    }
  });
}
//display forward positioned players- catergory wise
function viewPositionFwd() {
  let optionSelectFwd = document.getElementById("positionSelectFwd").value;
  switch (optionSelectFwd) {
    case "center":
      viewCenterFwd();
      break;
    case "right":
      viewRightFwd();
      break;
    case "left":
      viewLeftFwd();
      break;
  }
}
//Position Select OnChange Attribute -- Forwards
const positionSelectFwd = document.getElementById("positionSelectFwd");
positionSelectFwd.addEventListener("change", viewPositionFwd);

//view Holding Midfielders
function viewHoldingMid() {
  let mid = new MidFielder();
  mid.removeAllRows();
  midsArr.forEach(midOb => {
    let mid = new MidFielder(midOb);
    let holdingMid = mid.getHolding();
    if (holdingMid != undefined) {
      mid.insertRow(holdingMid);
    }
  });
}

//view Attacking Midfielders
function viewAttackingMid() {
  let mid = new MidFielder();
  mid.removeAllRows();
  midsArr.forEach(midOb => {
    let mid = new MidFielder(midOb);
    let attackingMid = mid.getAttacking();
    if (attackingMid != undefined) {
      mid.insertRow(attackingMid);
    }
  });
}

//view Defensive Midfielders
function viewDefensiveMid() {
  let mid = new MidFielder();
  mid.removeAllRows();
  midsArr.forEach(midOb => {
    let mid = new MidFielder(midOb);
    let defensiveMid = mid.getDefensive();
    if (defensiveMid != undefined) {
      mid.insertRow(defensiveMid);
    }
  });
}

//display MidFielder positioned players- catergory wise
function viewPositionMid() {
  let optionSelectMid = document.getElementById("positionSelectMid").value;
  switch (optionSelectMid) {
    case "holding":
      viewHoldingMid();
      break;
    case "attacking":
      viewAttackingMid();
      break;
    case "defensive":
      viewDefensiveMid();
      break;
  }
}
//Position Select OnChange Attribute --MidFielders
const positionSelectMid = document.getElementById("positionSelectMid");
positionSelectMid.addEventListener("change", viewPositionMid);

//Display Centeral Defenders
function viewCenterDefender() {
  let def = new Defender();
  def.removeAllRows();
  defsArr.forEach(defOb => {
    let def = new Defender(defOb);
    let centerDef = def.getCenter();
    if (centerDef != undefined) {
      def.insertRow(centerDef);
    }
  });
}
// Display WingBack Central Defenders
function viewWingBack() {
  let def = new Defender();
  def.removeAllRows();
  defsArr.forEach(defOb => {
    let def = new Defender(defOb);
    let wingBack = def.getWingBack();
    if (wingBack != undefined) {
      def.insertRow(wingBack);
    }
  });
}

//display Defender positioned players- catergory wise
function viewPositionDef() {
  let optionSelectDef = document.getElementById("positionSelectDef").value;
  switch (optionSelectDef) {
    case "center":
      viewCenterDefender();
      break;
    case "wing":
      viewWingBack();
      break;
  }
}
//Position Select OnChange Attribute --Defenders
const positionSelectDef = document.getElementById("positionSelectDef");
positionSelectDef.addEventListener("change", viewPositionDef);

//Display Players on Basis of Club
function viewClub() {
  let clubSelect = document.getElementById("clubSelect").value;
  let clubPlayersArr = getClubPlayers(clubSelect);
  let player = new Player();
  player.removeAllRows();
  player.displayPosition();
  //Inserting Row using Player Class
  clubPlayersArr.forEach(playerOb => {
    let player = new Player(playerOb);
    player.insertRow();
  });
}
//Club Select onChange Attribute
const clubSelect = document.getElementById("clubSelect");
clubSelect.addEventListener("change", viewClub);
