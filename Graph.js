function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adjacencyList = [];
	for(var i =0; i < this.vertices; i++){
		this.adjacencyList[i] = [];
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
	var marked = [];
	for(var i = 0; i<this.vertices; i++){
		marked[i] = false;
	}
	var stack = [];
	marked[s] = true;
	stack.push(s);
	while(stack.length > 0){
		var v = stack.pop();
		if(v != undefined){
			visitFunc(v);
		}
		for( var w = 0; w < this.adjacencyList.length; w++){
			if(!marked[w]){
				marked[w] = true;
				stack.push(w);
			}
		}
	}
};

Graph.prototype.bfs = function(s, visitFunc){
	var marked = [];
	for(var i = 0; i<this.vertices; i++){
		marked[i] = false;
	}
	var queue = [];
	marked[s] = true;
	queue.push(s);
	while(queue.length > 0){
		var v = queue.shift();
		if(v != undefined){
			visitFunc(v);
		}
		for( var w = 0; w < this.adjacencyList.length; w++){
			if(!marked[w]){
				marked[w] = true;
				queue.push(w);
			}
		}
	}
}

module.exports = Graph;