var print = console.log;
var Stack = require('./Stack.js');

var expression = "2.3 + 23 / 12 + (3.14159 * .24)(";

console.log(checkParenthesis(expression));

function checkParenthesis(expression){
	var stack = new Stack();
	var letters = expression.split('');
	
	letters.forEach(function(letter, index){
		if(letter=='('){
			stack.push(index);
		} else if(letter==')'){
			stack.pop();
		}
	});
	
	return stack.pop();
}