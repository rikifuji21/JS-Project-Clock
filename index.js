
function startTime() {
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var meridiemhours = today.getHours();
var meridiem = " AM";
minutes = checkTime(minutes);
hours = nonMilitaryTime(hours);
if (meridiemhours >= 12) {meridiem = " PM"}; //if hours is 13+ PM
document.getElementById('clock').innerHTML =
hours + ":" + minutes + meridiem;
var t = setTimeout(startTime, 1);
}

  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



function nonMilitaryTime(i) {
	if (12 < i) {i = i - 12}; //subtract 12 if hours are 13+
	return i;
}

document.getElementById("press").onclick = function() {button(10)};

function button(i) {
if (i < 11) {i = i - 1};
return i;
}
