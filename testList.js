var print = console.log;
var List = require('./List.js');

//var names = new List(); 
//names.append("Cynthia"); names.append("Raymond");
//names.append("Barbara");
//print(names.toString());
//names.remove("Raymond");
//print(names.toString());

var names = new List(); 
names.append("Clayton"); 
names.append("Raymond"); 
names.append("Cynthia"); 
names.append("Jennifer"); 
names.append("Bryan"); 
names.append("Danny");

//print(names.toString());
//
//names.front();
//print(names.getElement());
//
//names.next();
//print(names.getElement());
//
//names.next();
//names.next();
//names.prev();
//print(names.getElement());

for(names.front(); names.currPos() < names.length(); names.next()) { 
	print(names.getElement());
}
