var LList = require('./LList.js');

function Set() {
	this.dataStore = new LList(); 
	this.add = add;
	this.remove = remove;
	this.contains = contains; 
	this.size = size;
	this.union = union; 
	this.intersect = intersect; 
	this.subset = subset; 
	this.difference = difference; 
	this.show = show;
}

function add(data) {
	if(!this.dataStore.find(data)){
		this.dataStore.insert(data, 'head');
	} else {
		return false;
	}
}

function remove(data) {
	this.dataStore.remove(data);
}

function show() {
	return this.dataStore.display();
}

function union(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; ++i) { 
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]); 
		} 
	}
	return tempSet; 
}

function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true; 
		}
	else {
		return false;
	} 
}

function intersect(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i) {
		if (set.contains(this.dataStore[i])) { 
			tempSet.add(this.dataStore[i]);
		} 
	}
	return tempSet; 
}

function subset(set) {
	if (this.size() > set.size()) {
		return false; 
	} else {
		for (var key in this.dataStore) {
			if (!set.contains(this.dataStore[key])) { 
				return false;
			} 
		}
	}
	return true; 
}

function difference(set){
	var tempSet = new Set();
	for( var i=0; i<this.dataStore.length; i++){
		if(!set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
}

function size() {
	return this.dataStore.length;
}


module.exports = Set;