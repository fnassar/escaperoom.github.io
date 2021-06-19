let nameoftheuser;

document.addEventListener('DOMContentLoaded', () => {
	let title = document.querySelector('.title');
	let useranswer = document.querySelector('.user');
	title.addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
			nameoftheuser = useranswer.value;
			title.classList.add('fade');
			useranswer.disabled = true;
			enableScroll();
			setTimeout(() => {
				title.remove();
			}, 3000);
		}
	})
})


function enableScroll() {
	window.onscroll = function() {};
}


// $("body").mousemove(function(e) {
// 	console.log(e.pageX);
// 	console.log(e.pageY);
// })

function update(e){
	var x = e.clientX || e.touches[0].clientX
	var y = e.clientY || e.touches[0].clientY

	document.documentElement.style.setProperty('--cursorX', x + 'px')
	document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

function playaudio(obj, aud){
	obj.onmouseover = e => {
		obj.style.backgroundColor = "red";
		aud.play();
	}
	obj.onmouseleave = e => {
		obj.style.removeProperty("background-color");
		aud.pause();
	}
}

var objArr = Array(7);
var objnames = ["obj1","obj2","obj3","obj4","obj5","obj6","obj7"];

var audioArr = Array(7);
var audionames = ["audio1","audio2","audio3","audio4","audio5","audio6","audio7"];

for(let i=0; i<7; i++){
	objArr[i] = document.getElementById(objnames[i]);
	audioArr[i] = document.getElementById(audionames[i]);
}

for(let j=0; j<7; j++){
	playaudio(objArr[j],audioArr[j]);
}