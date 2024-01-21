// SLL Utilities
class SLLNode {
  constructor(data) {
      this.data = data;
      this.next = null;              
  }
}
class SLL {
  constructor() {
      this.head = null;
  }

  // Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }


// Length
// Create a new SLL method length() that returns number of nodes in that list.

length() {
  let count = 0;
  let current = this.head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}



// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

display() {
  let result = '';
  let current = this.head;
  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }
  result += 'null';
  return result;
}
