let nameoftheuser;

document.addEventListener('DOMContentLoaded', () => {
	let title = document.querySelector('.title');
	title.style.cursor = "default";
	let useranswer = document.querySelector('.user');
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

let check = 0;
let numofclicks = 0;
function blink() {
	let style = document.querySelector('.shelf').style;
	numofclicks = 1;
	if (check == 0) {
		style.opacity = "1";
		check = 1;
	}
	else { 
		style.opacity = "5%";
		check = 0;
	}
}



// function to_start() {
// 	numofclicks++;

// }


document.querySelector('.start').addEventListener('mousemove',update)
document.querySelector('.start').addEventListener('touchmove',update)
