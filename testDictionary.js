var print = console.log;
var Dictionary = require('./Dictionary.js');

var pbook = new Dictionary(); 
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("Number of entries: " + pbook.count()); 
print("David's extension: " + pbook.find("David")); 
pbook.showAll();
pbook.clear();
print("Number of entries: " + pbook.count());