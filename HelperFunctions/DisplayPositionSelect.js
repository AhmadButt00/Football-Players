// Display Forward Position Select Option only
function displayFwd(){
    let fwdSelect = document.getElementById('positionSelectFwd');
    fwdSelect.style.display = "inline-block";
    let midSelect = document.getElementById('positionSelectMid');
    midSelect.style.display = "none";
    let defSelect = document.getElementById('positionSelectDef');
    defSelect.style.display = "none";
}
// Display MidFielder Position Select Option only
function displayMid(){
    let fwdSelect = document.getElementById('positionSelectFwd');
    fwdSelect.style.display = "none";
    let midSelect = document.getElementById('positionSelectMid');
    midSelect.style.display = "inline-block";
    let defSelect = document.getElementById('positionSelectDef');
    defSelect.style.display = "none";
}

// Display Defender Position Select Option only
function displayDef(){
    let fwdSelect = document.getElementById('positionSelectFwd');
    fwdSelect.style.display = "none";
    let midSelect = document.getElementById('positionSelectMid');
    midSelect.style.display = "none";
    let defSelect = document.getElementById('positionSelectDef');
    defSelect.style.display = "inline-block";
}
//Hide All Sub Select Options --Position
function displayGK(){
    let fwdSelect = document.getElementById('positionSelectFwd');
    fwdSelect.style.display = "none";
    let midSelect = document.getElementById('positionSelectMid');
    midSelect.style.display = "none";
    let defSelect = document.getElementById('positionSelectDef');
    defSelect.style.display = "none";
}
export {displayFwd, displayMid, displayDef, displayGK}