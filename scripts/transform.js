db.movies.find().snapshot().forEach( function (element) {
	element.genres = element.genres.split('|');
	var titleYear = element.title;
	if (titleYear.charAt(titleYear.length - 1) === ')') {
		element.title = titleYear.substring(0, titleYear.length - 7);
		element.year = titleYear.substring(titleYear.length - 5, titleYear.length - 1);
	}
	db.tMovies.save(element);
});