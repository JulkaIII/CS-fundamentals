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
nums.print();
console.log("In-order traversal: "); 
nums.inOrderTraversal(function(data){
	console.log(data + ' ');
});
console.log("Pre-order traversal: "); 
nums.preOrderTraversal(function(data){
	console.log(data + ' ');
});
console.log("Post-order traversal: "); 
nums.postOrderTraversal(function(data){
	console.log(data + ' ');
});

var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);

console.log(nums.find(23));

console.log(nums.find(36));