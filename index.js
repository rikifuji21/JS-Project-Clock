
function startTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  minutes = checkTime(minutes);
  document.getElementById('txt').innerHTML =
  hours + ":" + minutes;
  var t = setTimeout(startTime, 5);
}


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
