var BST = require('./BST.js');

var tree = new BST();
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
tree.insert(5);
console.log(tree.toString());