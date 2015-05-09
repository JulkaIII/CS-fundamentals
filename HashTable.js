var print = console.log;

function HashTable() { 
	this.table = new Array(137); 
	this.simpleHash = simpleHash; 
	this.betterHash = betterHash;
	this.showDistro = showDistro; 
	this.put = put;
	this.get = get;
	this.buildChains = buildChains;
}

function buildChains(){
	for(var i=0; i<this.table.length; i++){
		this.table[i] = new Array();
	}
}

function put(key) {
	var pos = this.betterHash(key);
	var index = 0;
	if (this.table[pos][index] == undefined) {
		this.table[pos][index+1] = key; 
	} else {
		index++;
		while (this.table[pos][index] != undefined) { 
			index++;
		}
		this.table[pos][index] = key; 
	}
}

function get(key) {
	var index = 0;
	var hash = this.betterHash(key); 
	if (this.table[pos][index] = key) {
		return this.table[pos][index+1]; 
	}
	else {
		index += 2; 
		while (this.table[pos][index] != key) { 
			index += 2;
		}
		return this.table[pos][index+1]; 
	}
	return undefined;
}

function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length; 
}

function betterHash(str, arr) {
	var H = 37;
	var total = 0;
	for (var i = 0; i < str.length; ++i) {
		total += H * total + str.charCodeAt(i);
	}
	total = total % this.table.length;
	return parseInt(total); 
}

function showDistro() { 
//	console.log(this.table);
	for (var i = 0; i < this.table.length; ++i) { 
		if (this.table[i][0] != undefined) {
			print(i + ": " + this.table[i]); 
		}
	}
}

module.exports = HashTable;