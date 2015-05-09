var print = console.log;
var HashTable = require('./HashTable.js');

var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
		"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 
for (var i = 0; i < someNames.length; ++i) {
   hTable.put(someNames[i]);
}
hTable.showDistro();


//var someNames = ["David", "Jennifer", "Donnie", "Raymond",
//"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 
//var hTable = new HashTable();
//for (var i = 0; i < someNames.length; ++i) { hTable.put(someNames[i]);
//}
//hTable.showDistro();

//
//var numStudents = 10; 
//var arrSize = 97; 
//var idLen = 9;
//var students = new Array(numStudents); 
//genStuData(students);
//print ("Student data: \n");
//for (var i = 0; i < students.length; ++i) {
//   print(students[i].substring(0,8) + " " +
//         students[i].substring(9));
//}
//print("\n\nData distribution: \n");
//var hTable = new HashTable();
//for (var i = 0; i < students.length; ++i) {
//   hTable.put(students[i]);
//}
//hTable.showDistro();
//
//function getRandomInt (min, max) {
//	return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//function genStuData(arr) {
//	for (var i = 0; i < arr.length; ++i) {
//		var num = ""; 
//		for(var j=1;j<=9;++j){
//			num += Math.floor(Math.random() * 10);
//		}
//		num += getRandomInt(50,100);
//		arr[i] = num;
//	}
//}

