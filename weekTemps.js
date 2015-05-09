function weekTemps() { 
	var numRows = 4;
	var numCols = 7;
	this.numDays = numRows*numCols;
	this.dataStore = initialise2DArray(numRows, numCols); 
	this.monthAverage = monthAverage;
	this.weekAverage = weekAverage;
	this.allWeeksAverage = allWeeksAverage;
	this.showArray = showArray;
}

function initialise2DArray(numrows, numcols){
	var arr = [];
	for(var i=0; i<numrows; i++){
		var col = [];
		for(var j=0; j<numcols; j++){
			col[j] = Math.floor(Math.random() * 101);
		}
		arr.push(col);
	}
	return arr;
}

function monthAverage() {
	var total = 0;
	var numPoints = 0;
	
	this.dataStore.forEach(function(row){
		row.forEach(function(point){
			total += point;
			numPoints++;
		});
	});

	return total / numPoints; 
}

function allWeeksAverage(week) {
	var averages = [];
	
	this.dataStore.forEach(function(row){
		var rowTotal = 0;
		var rowPoints = 0;
		row.forEach(function(point){
			rowTotal += point;
			rowPoints++;
		});
		averages.push(rowTotal/rowPoints);
	});

	return averages; 
}

function weekAverage(week) {
	var total = 0;
	var numPoints = 0;
	
	this.dataStore[week].forEach(function(point){
		total += point;
		numPoints++;
	});

	return total / numPoints; 
}

function showArray(){
	this.dataStore.forEach(function(row){
		console.log(row);
	});
}


module.exports = weekTemps;