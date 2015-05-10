function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adjacencyList = [];
	for(var i =0; i < this.vertices; i++){
		this.adjacencyList[i] = [];
	}
	this.edgeTo = [];
	this.visited = [];
	for(var i = 0; i<this.vertices; i++){
		this.visited[i] = false;
	}
}

Graph.prototype.addEdge = function(v,w){
	this.adjacencyList[v].push(w);
	this.adjacencyList[w].push(v);
	this.edges++;
};

Graph.prototype.showGraph = function(){
	for (var i = 0; i < this.vertices; ++i) {
		var str = i + " -> ";
		for (var j = 0; j < this.vertices; ++j) {
			if ((this.adjacencyList[i] != undefined) && (this.adjacencyList[i][j] != undefined)) 
				str += this.adjacencyList[i][j] + ' ';
		}
		console.log(str); 
	}
};

Graph.prototype.dfs = function(s, visitFunc){
	this.visited.forEach(function(element){
		element = false;
	});
	var stack = [];
	this.visited[s] = true;
	stack.push(s);
	while(stack.length > 0){
		var v = stack.pop();
		if(v != undefined){
			visitFunc(v);
		}
		for( var w = 0; w < this.adjacencyList.length; w++){
			if(!this.visited[w]){
				this.visited[w] = true;
				stack.push(w);
			}
		}
	}
};

Graph.prototype.bfs = function(s, visitFunc){
	this.visited.forEach(function(element){
		element = false;
	});
	var queue = [];
	this.visited[s] = true;
	queue.push(s);
	while(queue.length > 0){
		var v = queue.shift();
		if(v != undefined){
			visitFunc(v);
		}
		for( var w = 0; w < this.adjacencyList.length; w++){
			if(!this.visited[w]){
				this.visited[w] = true;
				this.edgeTo[w] = v;
				queue.push(w);
			}
		}
	}
};

Graph.prototype.pathTo = function(v){
	var source = 0;
	if(!this.hasPathTo(v)){
		return undefined;
	}
	var path = [];
	for (var i=v; i != source; i = this.edgeTo[i]){
		path.push(i);
	}
	path.push(v);
	return path;
};

Graph.prototype.hasPathTo = function(v) { 
	return this.visited[v];
};

module.exports = Graph;