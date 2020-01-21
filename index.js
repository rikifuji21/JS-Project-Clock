
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
	alert('What Have You Done...')
    audio.play();
    /*setTimeout(disappear,0);*/
    setTimeout(Warning,0);
    setTimeout(Warning2,500);
    setTimeout(Warning,1000);
    setTimeout(Warning2,1500);
    setTimeout(Warning,2000);
    setTimeout(Warning2,2500);
    setTimeout(Warning,3000);
    setTimeout(Warning2,3500);
    setTimeout(Warning,4000);
    setTimeout(Warning2,4500);
    setTimeout(Warning,5000);
    setTimeout(Warning2,5500);
    setTimeout(Warning,6000);
    setTimeout(Warning2,6500);
    setTimeout(Warning,7000);
    setTimeout(Warning2,7500);
    setTimeout(Warning,8000);
    setTimeout(Warning2,8500);
    setTimeout(Warning,9000);
    setTimeout(Warning2,9500);
    setTimeout(Warning,10000);
    setTimeout(Warning2,10500);
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

	  /*function disappear() {
	  	var element = document.getElementById("SD");
   		element.classList.toggle("display");
	 	var element2 = document.getElementById("clock");
   		element2.classList.toggle("disappear");
   		var element3 = document.getElementById("SD");
   		element3.classList.remove("button");
   		var element4 = document.getElementById("SD");
   		element4.classList.toggle("countdown");
	  }*/
}
}
  
  /*function disappear() {
  	var d = document.getElementsByClassName("button");
  	d[0].style.backgroundColor = "transparent";
  }

  function countdown() {
  	var cd = document.getElementsByClassName("display");
  	cd[0].style.backgroundColor = "transparent";
  	

var _milisecond = 1;
var _second = _milisecond * 1000;
var timer;

function countdown()
{
	var end = 11000
    var now = 1;
    var distance = end - now;
    if (distance < 0 ) {
       clearInterval( timer );
    }
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;

    var countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = seconds + '.' + milliseconds;
}

timer = setInterval(showRemaining, 1);

function countup(i){
	if (i < 11000) {i++}
		return i;
}





  	var stime = 11000;
document.getElementById('clock').innerHTML =
seconds + "." + miliseconds;
		setTimeout(stime,1)

	function convertmsec(m) {
		var sec = floor(msec / 1000);
		var msec = m % 1000;
		return sec + ':' + msec;
		}

  function countdown(stime) {if (stime = 11) {stime--;miliseconds = 1000;miliseconds--;} }
  
  function checkmili(i) {
  if (i < 1000) {i = "0" + i};
  return i;

  function checkmili2(i) {
  if (i < 100) {i = "00" + i};
  return i;

  function checkmili3(i) {
  	if (i < 10) {i = "00" + i}
  }*/