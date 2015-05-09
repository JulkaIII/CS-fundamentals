var print = console.log;

function Dictionary() { 
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key) {
	return this.datastore[key];
}

function remove(key) {
	delete this.datastore[key];
}

function showAll() {
	var keys = Object.keys(this.datastore).sort();
	var thisClass = this;
	keys.forEach(function(key){
		print(key + " -> " + thisClass.datastore[key]); 
	});
}

function count() { 
	var n = 0;
	for(var key in this.datastore) {
		n++; 
	}
	return n; 
}

function clear() { 
	for(var key in this.datastore) {
		delete this.datastore[key]; 
	}
}

module.exports = Dictionary;