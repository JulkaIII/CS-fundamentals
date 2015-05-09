var print = console.log;
var weekTemps = require('./weekTemps.js');

var thisWeek = new weekTemps(); 

thisWeek.showArray();
console.log(thisWeek.monthAverage());
console.log(thisWeek.weekAverage(2));
console.log(thisWeek.allWeeksAverage());