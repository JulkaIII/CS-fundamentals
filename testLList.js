var print = console.log;
var LList = require('./LList.js');

var cities = new LList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();