var print = console.log;
var LListNode = require('./LListNode.js');

function LList() {
	this.head = new LListNode("head"); 
	this.find = find; 
	this.findPrevious = findPrevious;
	this.insert = insert; 
	this.remove = remove; 
	this.display = display;
}

function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		if(currNode.next == null){
			return false;
		}
		currNode = currNode.next;
	}
	return currNode;
}

function findPrevious(item){
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new LListNode(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

function remove(item){
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next; 
	}
}

module.exports = LList;