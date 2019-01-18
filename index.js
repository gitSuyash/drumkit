document.addEventListener('keydown',(e)=>{
	var audio = document.getElementById(e.keyCode);
	// var audio = document.querySelector(`audio[id="${e.keyCode}"]`);
	console.log(audio.parentElement);
	audio.currentTime = 0;
	audio.play();
	audio.parentElement.classList.toggle('beat');
	console.log(audio.parentElement.classList);
})
document.addEventListener('keyup',(e)=>{
	var audio = document.getElementById(e.keyCode);
	// var audio = document.querySelector(`audio[id="${e.keyCode}"]`);
	// console.log(audio);
	
	audio.parentElement.classList.toggle('beat')
	console.log(audio.parentElement.classList);
	})
