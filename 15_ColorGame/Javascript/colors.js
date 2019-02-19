alert("Connected");

// non selecting variables
let numSquares = 6;
let colors = [];
let pickedColor;

//selectors
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let resultDisplay = document.querySelector("#result");
colorDisplay.textContent = pickedColor;
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {

setupModeButtons();

setupColorSquares();

reset ();
}

function setupModeButtons() {
	//mode button listeners
for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
}
}

function setupColorSquares() {
	// what happens when click squares
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
	//get color of clicked square
			let clickedColor = this.style.backgroundColor;
	//compare color to pickedColor
			if(clickedColor === pickedColor) {
				resultDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				} 
				else {
					this.style.backgroundColor = "#232323";
					resultDisplay.textContent = "Try Again";
				}
	});
}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = pickColor();
	//change color display to picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	resultDisplay.textContent = " ";
	//change colors of squares
	for(var i = 0; i < squares.length; i++)
	{	if (colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i]; 
	}
		else {
			squares[i].style.display = "none";
		}
	}
	//reset background h1
	h1.style.backgroundColor = "steelblue";
}

	
function changeColors(color){
	//loop through squares
	for(var i = 0; i < squares.length; i ++) {
	//change each color to match
	squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	let arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		// get random color and push to arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	let r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	let g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function () {
	reset();
});
