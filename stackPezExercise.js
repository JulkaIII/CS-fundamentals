var print = console.log;
var Stack = require('./Stack.js');

var pezDispenser = new Stack();
pezDispenser.push('red');
pezDispenser.push('white');
pezDispenser.push('red');
pezDispenser.push('yellow');
pezDispenser.push('red');
pezDispenser.push('white');
pezDispenser.push('yellow');
pezDispenser.push('red');

console.log(pezDispenser.toString());

removeYellow(pezDispenser);

console.log(pezDispenser.toString());

function removeYellow(dispenser){
	var temp = new Stack();
	while (dispenser.length() > 0){
		var pez = dispenser.pop();
		if(pez != 'yellow'){
			temp.push(pez);
		}
	}
	
	while (temp.length() > 0){
		dispenser.push(temp.pop());
	}
}