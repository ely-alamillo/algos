class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time complexity:
// Insertion: O(log n)
// Searching: O(log n)
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    // first node
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let curr = this.root;
      while (true) {
        // ignore dups
        if (value === curr.value) return undefined;
        // search left
        if (value < curr.value) {
          // if null insert node
          if (curr.left === null) {
            curr.left = node;
            return this;
            // not null, move pointer to search again
          } else {
            curr = curr.left;
          }
          // search right
        } else if (value > curr.value) {
          //  if null insert node
          if (curr.right === null) {
            curr.right = node;
            return this;
            // not null, move pointer and search again
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let curr = this.root;
    let found = false;

    while (!found && curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return curr;
  }

  contains(value) {
    if (!this.root) return false;
    let curr = this.root;
    let found = false;

    while (!found && curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

const tree = new BST();
tree.root = new Node(10);
