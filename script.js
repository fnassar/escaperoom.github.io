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