// Display Forward Position Select Option only
function displayFwd(){
    let fwdSelect = document.getElementById('positionSelectFwd');
    fwdSelect.style.display = "inline-block";
    let midSelect = document.getElementById('positionSelectMid');
    midSelect.style.display = "none";
    // let fwdSelect = document.getElementById('positionSelectFwd');
    // fwdSelect.style.display = "inline-block";
}
// Display MidFielder Position Select Option only
function displayMid(){
    let fwdSelect = document.getElementById('positionSelectFwd');
    fwdSelect.style.display = "none";
    let midSelect = document.getElementById('positionSelectMid');
    midSelect.style.display = "inline-block";
    // let fwdSelect = document.getElementById('positionSelectFwd');
    // fwdSelect.style.display = "inline-block";
}
export {displayFwd, displayMid}