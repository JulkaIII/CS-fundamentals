var List = require('./List.js');

var numbers = new List(); 
numbers.append(1); 
numbers.append(5); 
numbers.append(3); 
numbers.append(4); 
numbers.append(6); 

insertIfLarger(9, numbers);
console.log(numbers.toString());

insertIfLarger(4, numbers);
console.log(numbers.toString());

insertIfLarger(10, numbers);
console.log(numbers.toString());

function insertIfLarger(element, list){
	var larger = true;
	for(list.front(); list.currPos() < list.length(); list.next()) { 
		if(element <= list.getElement()){
			larger = false;
		}
	}
	if(larger){
		list.append(element);
	}
}