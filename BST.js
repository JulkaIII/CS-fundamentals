var TreeNode = require('./TreeNode.js');
var Queue = require('./Queue.js');

function BST(){
	this.root = null;
}

BST.prototype.insert = function(data){
	var n = new TreeNode(data, null, null);
	if(this.root == null){
		this.root = n;
	} else {
		findInsertion(this.root, n);	
	}
};

function findInsertion(root, node){
	if(node.data < root.data){
		if(root.left == null){
			root.left = node;
			return true;
		} else {
			findInsertion(root.left, node);
		}
	} else {
		if(root.right == null){
			root.right = node;
			return true;
		} else {
			findInsertion(root.right, node);
		}
	}
}

BST.prototype.BFTraversal = function(visitFunc){
	var q = new Queue();
	if(this.root == null){
		return "";
	}
	q.enqueue(this.root);
	while(!q.empty()){
		var currNode = q.dequeue();
		visitFunc(currNode.data);
		if(currNode.left != null) q.enqueue(currNode.left);
		if(currNode.right != null) q.enqueue(currNode.right);
	}
};

BST.prototype.inOrderTraversal = function(visitFunc){
	if(!(this.root==null)){
		inOrder(this.root, visitFunc);
	}
};

function inOrder(root, visitFunc){
	if(!(root==null)){
		inOrder(root.left, visitFunc);
		visitFunc(root.data);
		inOrder(root.right, visitFunc);
	}
}

BST.prototype.preOrderTraversal = function(visitFunc){
	if(!(this.root==null)){
		preOrder(this.root, visitFunc);
	}
};

function preOrder(root, visitFunc){
	if(!(root==null)){
		visitFunc(root.data);
		preOrder(root.left, visitFunc);
		preOrder(root.right, visitFunc);
	}
}

BST.prototype.postOrderTraversal = function(visitFunc){
	if(!(this.root==null)){
		postOrder(this.root, visitFunc);
	}
};

function postOrder(root, visitFunc){
	if(!(root==null)){
		postOrder(root.left, visitFunc);
		postOrder(root.right, visitFunc);
		visitFunc(root.data);
	}
};

BST.prototype.getMin = function(){
	return getSmallest(this.root);
};

function getSmallest(node){
	var current = node;
	while(!(current.left==null)){
		current = current.left;
	}
	return current.data;
};

BST.prototype.getMax = function(){
	var current = this.root;
	while(!(current.right==null)){
		current = current.right;
	}
	return current.data;
};

BST.prototype.find = function(data){
	var current = this.root;
	while(current.data != data){
		if(data < current.data){
			current = current.left;
		} else {
			current = current.right
		}
		if(current == null){
			return null;
		}
	}
	return current;
};

BST.prototype.remove = function(data){
	removeNode(this.root, data);
}

//function removeNode(node, data){
//	if(node.data = data){
//		
//	}
//}

function removeNode(node, data){
	if(node == null){
		return null;
	}
	if(data == node.data){
		if(node.left == null && node.right == null){
			return null;
		}	
		if(node.left == null){
			return node.right;
		}
		if(node.right == null){
			return node.left;
		}	
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	} else if (data < node.data){
		node.left = removeNode(node.left, data);
	} else {
		node.right = removeNode(node.right, data);
		return node;
	}
}

BST.prototype.toString = function(){
	var nodeList = Array();
	
	this.BFTraversal(function(data){
		nodeList.push(data);
	});
	return(nodeList);
};

BST.prototype.print = function(){
	console.log(this.root);
}

module.exports = BST;