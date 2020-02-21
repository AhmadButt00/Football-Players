import { Player } from "./Classes/PlayerClass.js"; //Player Class **Parent Class**
import { getPlayers } from "./HelperFunctions/GetPlayers.js"; //Get All Players Object
import { Forward } from "./Classes/Position/ForwardClass.js";
import { getForwards } from "./HelperFunctions/GetForwards.js";
import { MidFielder } from "./Classes/Position/MidFielderClass.js";
import { getMidFielders } from "./HelperFunctions/GetMidFielders.js";
import {
  displayFwd,
  displayMid
} from "./HelperFunctions/DisplayPositionSelect.js";

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
  }
}
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

let midsArr = getMidFielders();
//Display Forward Players
function viewMidFielders() {
  let mid = new MidFielder();
  mid.removeAllRows();
  midsArr.forEach(midOb => {
    let mid = new MidFielder(midOb);
    mid.insertRow();
    mid.displayPosition();
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
