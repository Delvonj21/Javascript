class BTNode {
      constructor(value) {
          this.val = value;
          this.left = null;
          this.right = null;
      }
  }
  class BST {
      constructor() {
          this.root = null;
      }
     
  // BST: Add
  // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.
    // Method to add a new value to the BST
    add(val) {
      const newNode = new BTNode(val);
  
      if (this.root === null) {
        // If the tree is empty, set the new node as the root
        this.root = newNode;
        return;
      }
  
      let current = this.root;
  
      while (true) {
        // If the value is less than the current node's value, move to the left subtree
        if (val < current.value) {
          if (current.left === null) {
            // If the left child is null, insert the new node here
            current.left = newNode;
            return;
          }
          // Move to the left child
          current = current.left;
        }
        // If the value is greater than or equal to the current node's value, move to the right subtree
        else {
          if (current.right === null) {
            // If the right child is null, insert the new node here
            current.right = newNode;
            return;
          }
          // Move to the right child
          current = current.right;
        }
      }
    }
  }
  
  
  // BST: Contains
  // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

  contains(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }


 
  // BST: Min
  // Create a min() method on the BST class that returns the smallest value found in the BST.
 
  min() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.value;
  }
  
  
  // BST: Max
  // Create a max() BST method that returns the largest value contained in the binary search tree.

  max() {
    if (this.root === null) {
      return null; // Tree is empty
    }

    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }

    return current.value;
  }
}
  
  

  }
  