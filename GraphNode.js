function GraphNode(data, left, right) { 
	this.data = data;
   this.path = [];
}

TreeNode.prototype.show = function(){ 
	return this.data;
}

module.exports = TreeNode;