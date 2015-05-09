function TreeNode(data, left, right) { 
	this.data = data;
	this.left = left;
	this.right = right;
}

TreeNode.prototype.show = function(){ 
	return this.data;
}

module.exports = TreeNode;