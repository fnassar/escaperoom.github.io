let nameoftheuser;
document.addEventListener('DOMContentLoaded', () => {
	let title = document.querySelector('.title');
	title.style.cursor = "default";
	let useranswer = document.querySelector('.user');
	// <-- getting audio files from index --> 
	// we could directly add them here as well idk
	
	title.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			nameoftheuser = useranswer.value;
			title.style.cursor = "none";
			title.classList.add('fadeout');
			let headphones = document.querySelector('.headphones');
			headphones.style.opacity = "0";
			
			useranswer.disabled = true;
			enableScroll();
			setTimeout(() => {
				title.remove();
				
			}, 4000);
			
			setTimeout(() => {
				headphones.remove();
				document.querySelector('.start').classList.add('fadein');
			}, 4000);
		}
	})
})

function enableScroll() {
	window.onscroll = function() {};
}


let gamescreen = document.querySelector(".start");
let beforegame = window.getComputedStyle(gamescreen, "::before");

// $("body").mousemove(function(e) {
// 	console.log(e.pageX);
// 	console.log(e.pageY);
// })

function update(e){

	var x = e.clientX || e.touches[0].clientX;
	var y = e.clientY || e.touches[0].clientY;

	var style = document.querySelector('.start').style;

	if (numofclicks > 0) {
		style.setProperty('--cursorX', x + 'px');
		style.setProperty('--cursorY', y + 'px');
	}

}
let flash = document.getElementById('flash');
let check = 0;
let numofclicks = 0;
function blink() {
	let style = document.querySelector('.shelf').style;
	numofclicks = 1;
	if (check == 0) {
		style.opacity = "1";
		check = 1;
		flash.load();
		flash.play();
	}
	else { 
		style.opacity = "5%";
		check = 0;
		flash.load();
		flash.play();
	}
}



// function to_start() {
// 	numofclicks++;

// }


document.querySelector('.start').addEventListener('mousemove',update)
document.querySelector('.start').addEventListener('touchmove',update)

 //<-- AUDIO EDITS HERE -->
 // 3 main and 6 depending on questions.

 audioArr[0] = document.getElementById("audio0");
 audioArr[1] = document.getElementById("audio1");
 audioArr[2] = document.getElementById("audio2");
 audioArr[3] = document.getElementById("audio3");
 audioArr[4] = document.getElementById("audio4");
 audioArr[5] = document.getElementById("audio5");
 audioArr[6] = document.getElementById("audio6");
 audioArr[7] = document.getElementById("audio7");
 audioArr[8] = document.getElementById("audio8");
 

//  audioArr[0] = new Audio("audio/audio0.m4a");
//  audioArr[1] = new Audio("audio/audio1(yes).m4a");
//  audioArr[2] = new Audio("audio/audio2(no).m4a");
//  audioArr[3] = new Audio("audio/audio3.m4a");
//  audioArr[4] = new Audio("audio/audio4(yes).m4a");
//  audioArr[5] = new Audio("audio/audio5(no).m4a");
//  audioArr[6] = new Audio("audio/audio6.m4a");
//  audioArr[7] = new Audio("audio/audio7(yes).m4a");
//  audioArr[8] = new Audio("audio/audio8(no).m4a");
 
 
 
 var current = 0;
 
 function singleclick(){
	 if (current = 1 && audioArr[0].ended){
		 document.querySelector('.start').audioArr[1].play();
		 console.log(audioArr[1]);//if user says yes
	 }
	 if (current = 2 && audioArr[3].ended){
		 document.querySelector('.start').audioArr[4].play();
		 console.log(audioArr[4]);//if user says yes
	 }
	 if (current = 3 && audioArr[6].ended){
		 document.querySelector('.start').audioArr[7].play();
		 console.log(audioArr[4]);//if user says yes
	 }
 }
 function doubleclick(){
	 if (current = 1 && audioArr[0].ended){
		 document.querySelector('.start').audioArr[2].play();
		 console.log(audioArr[2]);//if user says no
	 }
	 if (current = 2 && audioArr[3].ended){
		 document.querySelector('.start').audioArr[5].play();
		 console.log(audioArr[5]);//if user says no
	 }
	 if (current = 3 && audioArr[6].ended){
		 document.querySelector('.start').audioArr[8].play();
		 console.log(audioArr[5]);//if user says no
	 }
	 // (current = 3 && audioArr[7].ended && audioArr[8].ended);
	 
 }
 
 document.querySelector('.start').addEventListener('click',singleclick);//if user says yes
 document.querySelector('.start').addEventListener('dblclick',doubleclick);//if user says no
 
 
 function audioplay(){
	 if (current==0){
		 document.querySelector('.start').audioArr[0].play(); 
		 console.log(audioArr[0]);//if user says yes
		 current++;
		 document.querySelector('.start').addEventListener('click',singleclick);//if user says yes
		 document.querySelector('.start').addEventListener('dblclick',doubleclick);//if user says no
	 }
	 if (current = 1 && (audioArr[1].ended || audioArr[2].ended)){
		 document.querySelector('.start').audioArr[3].play();
		 console.log(audioArr[3]);
		 current++;
		 document.querySelector('.start').addEventListener('click',singleclick);//if user says yes
		 document.querySelector('.start').addEventListener('dblclick',doubleclick);//if user says no
	 }
	 if (current = 2 && (audioArr[4].ended || audioArr[5].ended)){
		 document.querySelector('.start').audioArr[6].play();
		 console.log(audioArr[0]);
		 current++;
		 document.querySelector('.start').addEventListener('click',singleclick);//if user says yes
		 document.querySelector('.start').addEventListener('dblclick',doubleclick);//if user says no
	 }
 }
 audioplay();