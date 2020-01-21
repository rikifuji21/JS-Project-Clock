
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
var t = setTimeout(startTime, 500);
}

  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function nonMilitaryTime(i) {
	if (12 < i) {i = i - 12}; //subtract 12 if hours are 13+
	return i;
}

var p = document.getElementById("SD");
	var audio = new Audio('sound/nuke_warning.mp3');
    var audio2 = new Audio('sound/nuke_explosion.mp3');
function SD(){
	alert('What Have You Done....')
    audio.play();
    setTimeout(Warning,500);
    setTimeout(Warning2,1000);
    setTimeout(Warning,1500);
    setTimeout(Warning2,2000);
    setTimeout(Warning,2500);
    setTimeout(Warning2,3000);
    setTimeout(Warning,3500);
    setTimeout(Warning2,4000);
    setTimeout(Warning,4500);
    setTimeout(Warning2,5000);
    setTimeout(Warning,5500);
    setTimeout(Warning2,6000);
    setTimeout(Warning,6500);
    setTimeout(Warning2,7000);
    setTimeout(Warning,7500);
    setTimeout(Warning2,8000);
    setTimeout(Warning,8500);
    setTimeout(Warning2,9000);
    setTimeout(Warning,9500);
    setTimeout(Warning2,10000);
    setTimeout(Warning,10500);
    setTimeout(Explosion, 11000);

function Warning() {
	document.body.style.backgroundColor = "#ffff00"
	document.body.style.backgroundImage = "url('images/warning.png')";
}

function Warning2() {
	document.body.style.backgroundColor = "#ffff00"
	document.body.style.backgroundImage = "url('images/warning2.png')";

}

function Explosion() {
	audio2.play();
	  document.body.style.backgroundColor = "#f3f3f3";
	  document.body.style.backgroundImage = "url('images/explosion.png')";
	  document.body.style.backgroundRepeat = "no-repeat";
	  document.body.style.backgroundAttachment = "fixed";
	  document.body.style.backgroundPosition="center center"; 
}
}



/*document.getElementById("timer").onclick = function() {};

var timeleft = 11;

var stime = 0;
var ctime = 0;

	function convertmsec(m) {
		var sec = floor(msec / 1000);
		var msec = m % 1000;
		return nf(sec,2) + ':' + nf(msec,2);
	}

var nuke;
var explosion;

function preload(){
	nuke = loadSound('sound/nuke_warning.mp3');
	explosion = loadSound('sound/nuke_explosion.mp3');
}

function setup() {
	noCanvas();
	stime = millis();

	var params = getURLParams();
  	console.log(params);
  	if (params.second) {
    var sec = params.second;
    timeleft = sec * 1000;
  }

	var timer = select('#timer');
	timer.html(convertmsec(timeleft - ctime));

	var interval = setInterval(timeIt, 1);

	function timeIt() {
		ctime = floor((millis() - stime) / 1000);
		timer.html(convertmsec(timeleft - ctime);
		if (ctime == timeleft) {
			explosion.play();
			clearInterval(interval);
		}
	}
}
*/