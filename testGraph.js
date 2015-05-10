var Graph = require('./Graph.js');

//var g = new Graph(5); 
//g.addEdge(0,1); 
//g.addEdge(0,2); 
//g.addEdge(1,3); 
//g.addEdge(2,4); 
//g.showGraph(); 
//g.bfs(0, function(v){
//	console.log('visited vertex: ' + v);
//});
//
//var vertex = 4;
//var paths = g.pathTo(vertex); 
//console.log(paths);

g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures",
                "Assembly Language", "Operating Systems",
                "Algorithms"];
//g.showGraph();
console.log(g.topSort());


