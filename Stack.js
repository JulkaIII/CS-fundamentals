function Stack() { 
	this.dataStore = []; 
	this.top = 0; 
	this.push = push; 
	this.pop = pop; 
	this.peek = peek;
	this.length = length;
	this.clear = clear;
	this.toString = toString;
}

function push(element) { 
	this.dataStore[this.top++] = element;
}

function pop() {
	this.top--;
	return this.dataStore.pop();
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() { 
	return this.top;
}

function clear() {
	this.top = 0;
}

function toString(){
	return this.dataStore;
}

module.exports = Stack;
