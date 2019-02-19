let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let resetButton = document.querySelector("#reset");
let total = document.querySelector("p span");

let p1Score = 0;
let p2Score = 0;

let playTo = 5;
let gameOver = false;

function reset () {
		p1Score = 0;
		p1Display.textContent = p1Score;
		p2Score = 0;
		p2Display.textContent = p1Score;
		p1Display.classList.remove("winner");
		p2Display.classList.remove("winner");
		gameOver = false;
};

p1Button.addEventListener("click", function()
		{ if (!gameOver) {
			p1Score++;
			if (p1Score === playTo) {
				p1Display.classList.add("winner");
				gameOver = true;
			}
			p1Display.textContent = p1Score;
			}	
		});

p2Button.addEventListener("click", function()
		{ if (!gameOver) {
			p2Score++;
			if (p2Score === playTo) {
				p2Display.classList.add("winner");
				gameOver = true;
			}			
			p2Display.textContent = p2Score; }
		});

resetButton.addEventListener("click", function () {
	reset();
});

numInput.addEventListener("change", function() {
	total.textContent = this.value;
	playTo = Number(this.value);
	reset();
});

