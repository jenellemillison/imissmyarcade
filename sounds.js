var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');
var playPauseBTN1 = document.getElementById('playPauseBTN1');
var playPauseBTN2 = document.getElementById('playPauseBTN2');
var playPauseBTN3 = document.getElementById('playPauseBTN3');
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
