
function startTime() {
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
minutes = checkTime(minutes);
hours = nonMilitaryTime(hours);
var blink = 0
document.getElementById('clock').innerHTML =
blink(blink);
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

function blink(i){
if (i < 1) {nonMilitaryTime(hours) + ":" + checkTime(minutes); let i = 2}
else if (i = 2) {nonMilitaryTime(hours) + " " + checkTime(minutes); let i = 0};
return i;
}

document.getElementById("press").onclick = function() {button()};

function button() {

}