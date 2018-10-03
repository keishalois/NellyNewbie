var films = [
		{
	title: "A Simple Favour",
	rating: 5,
	hasWatched: true
	},
		{
	title: "Isle of Dogs",
	rating: 3,
	hasWatched: false
	},
		{
	title: "Departed",
	rating: 4,
	hasWatched: true
	},
		{
	title: "Star Wars",
	rating: 2,
	hasWatched: false
	}
]

// function printFilm(films){
// 	for (var i = 0; i < films.length; i++) {
// 			if (
// 				hasWatched[i] !=== false) {
// 				console.log("You have watched" + " ");
// 			}
// 			else {
// 				console.log("You have not watched" + " ");
// 			}
// 			console.log(i.title);
// 			console.log(" with rating " + i.rating + " stars");
// 	}
// }

function buildString (film) {
	var result = "You have ";
	if (film.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + film.title + "\" - ";
	result += film.rating + " stars";
	return result;
}

films.forEach(function(film) {
	console.log(buildString(film));
	});
