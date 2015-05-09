var BST = require('./BST.js');

//var tree = new BST();
//tree.insert(5);
//tree.insert(7);
//tree.insert(3);
//tree.insert(4);
//tree.insert(5);
//console.log(tree.toString());

var nums = new BST(); 
nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22); 
console.log("Inorder traversal: "); 
nums.inOrderTraversal(function(data){
	console.log(data + ' ');
});