//print reverse array

//for method
// var animals = [ "cat", "dog", "pig", "chicken"];
// for (var i = animals.length - 1; i >= 0; i--) {
// 	console.log(animals[i]);
// }

//for each method
// var animals = [ "cat", "dog", "pig", "chicken"];
// animals.slice().reverse().forEach(function(printReverse) {
// 	console.log(printReverse);
// }
// )

function printReverse(arr) {
	for (var i = arr.length-1; i >=0; i--) {
	console.log(arr[i]);
	}
}

printReverse(["cat", "dog", "pig", "chicken"])

//****isUniform******

//isUniform use loop and var to keep track of first item in index - not equal return false
function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) { 
			return false;
			}
		}
return true;
}


// ******* subArray ******

//sumArray use loop and var result to store answer and add into it through loop
function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
return total;
}

// ****** max() ******

//max return max number in array use loop and var to store max number and update var if current number > old max

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max
}