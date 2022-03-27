var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var audio4 = document.getElementById('audio4');
var audio5 = document.getElementById('audio5');
var audio6 = document.getElementById('audio6');
var audio7 = document.getElementById('audio7');
var playPauseBTN1 = document.getElementById('playPauseBTN1');
var playPauseBTN2 = document.getElementById('playPauseBTN2');
var playPauseBTN3 = document.getElementById('playPauseBTN3');
var playPauseBTN4 = document.getElementById('playPauseBTN4');
var playPauseBTN5 = document.getElementById('playPauseBTN5');
var playPauseBTN6 = document.getElementById('playPauseBTN6');
var playPauseBTN7 = document.getElementById('playPauseBTN7');
var count = 0;

function playPause1(){
	if(count == 0){
		count = 1;
		audio1.play();
		playPauseBTN1.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio1.pause();
		playPauseBTN1.innerHTML = "Play &#9658;";
	}
}

function stop1(){
	playPause1();
	audio1.pause1();
	audio1.currentTime = 0;
	playPauseBTN1.innerHTML = "Play &#9658;";
}

function playPause2(){
	if(count == 0){
		count = 1;
		audio2.play();
		playPauseBTN2.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio2.pause();
		playPauseBTN2.innerHTML = "Play &#9658;";
	}
}

function stop2(){
	playPause2();
	audio2.pause();
	audio2.currentTime = 0;
	playPauseBTN2.innerHTML = "Play &#9658;";
}

function playPause3(){
	if(count == 0){
		count = 1;
		audio3.play();
		playPauseBTN3.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio3.pause();
		playPauseBTN3.innerHTML = "Play &#9658;";
	}
}

function stop3(){
	playPause3();
	audio3.pause();
	audio3.currentTime = 0;
	playPauseBTN3.innerHTML = "Play &#9658;";
}

function playPause4(){
	if(count == 0){
		count = 1;
		audio4.play();
		playPauseBTN4.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio4.pause();
		playPauseBTN4.innerHTML = "Play &#9658;";
	}
}

function stop4(){
	playPause4();
	audio4.pause();
	audio4.currentTime = 0;
	playPauseBTN4.innerHTML = "Play &#9658;";
}

function playPause5(){
	if(count == 0){
		count = 1;
		audio5.play();
		playPauseBTN5.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio5.pause();
		playPauseBTN5.innerHTML = "Play &#9658;";
	}
}

function stop5(){
	playPause5();
	audio5.pause();
	audio5.currentTime = 0;
	playPauseBTN5.innerHTML = "Play &#9658;";
}

function playPause6(){
	if(count == 0){
		count = 1;
		audio6.play();
		playPauseBTN6.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio6.pause();
		playPauseBTN6.innerHTML = "Play &#9658;";
	}
}

function stop6(){
	playPause6();
	audio6.pause();
	audio6.currentTime = 0;
	playPauseBTN6.innerHTML = "Play &#9658;";
}

function playPause7(){
	if(count == 0){
		count = 1;
		audio7.play();
		playPauseBTN7.innerHTML = "Pause &#9208;";
	} else{
		count = 0;
		audio7.pause();
		playPauseBTN7.innerHTML = "Play &#9658;";
	}
}

function stop7(){
	playPause7();
	audio7.pause();
	audio7.currentTime = 0;
	playPauseBTN7.innerHTML = "Play &#9658;";
}
