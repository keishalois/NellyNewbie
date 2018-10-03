
//named function
function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}
}
let colours = ["red", "green", "yellow"];
myForEach(colours, alert)

//anon function
myForEach(colours, function() {alert("HI");})
myForEach(colours, function(colour) {
	console.log(colour);
})


Array.prototype.myForEach = function (func){
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

let friends = ["sarah", "jane", "holly"];
friends.myForEach(function(name) {
	console.log("I love " + name);
}
	)