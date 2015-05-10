function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adjacencyList = [];
	for(var i =0; i < this.vertices; i++){
		this.adjacencyList[i] = [];
		this.adjacencyList[i].push("");
	}
}

Graph.prototype.addEdge = function(v,w){
	this.adjacencyList[v].push(w);
	this.adjacencyList[w].push(v);
	this.edges++;
}

Graph.prototype.showGraph = function() {
	for (var i = 0; i < this.vertices; ++i) {
		var str = i + " -> ";
		for (var j = 0; j < this.vertices; ++j) {
			if ((this.adjacencyList[i] != undefined) && (this.adjacencyList[i][j] != undefined)) 
				str += this.adjacencyList[i][j] + ' ';
		}
		console.log(str); 
	}
}

module.exports = Graph;