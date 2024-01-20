// Fronts

class SLLNode { //Singly-linked list node class
  constructor(val) {
    this.value = val; //Holds value for this node
    this.next = null; // Pointer to next node
  }
}

class SLL { // The singly-linked list class itself
  constructor() { //Will start with no nodes
    this.head = null; //Head points to first node
  }
}

//All methods built into class go here

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

  front() {
    if (this.head == null) { // list is empty
      return this.head;
    }
    else { // list is not empty 
    return this.head.value;
  }	
    }


// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

  removeFront() {
    if (this.head == null) { // If the list is empty, noting to remove
      return this.head;
    }
    let removedNode = this.head; // hold the node we will remove
    this.head = removedNode.next; //removes head of the list to the 2nd node, and it will become the new head when we are done
    removedNode.next = null;
    return this.head;
  }


// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

  addFront(value) {
    let newNode = new SLLNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head; 
    
  }
