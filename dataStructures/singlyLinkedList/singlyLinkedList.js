// insertion O(1)
// removal O(1) or O(n)
// searching O(n)
// access O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    // no head
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }

    // add to tail
    this.tail.next = node;
    this.tail = node;

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let prev = this.head;

    // while we have a next node
    while (current.next) {
      // move pointers
      prev = current;
      current = current.next;
    }

    // we've reached the end of list
    // change tail
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // if list is empty
    // reset head and tail
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // remove head
  shift() {
    // no head
    if (!this.head) return null;
    // set pointers
    const head = this.head;
    const next = this.head.next;
    // cut head off
    this.head = next;
    this.length--;
    // reset tail if no head
    if (this.length === 0) {
      this.tail = null;
    }

    return head;
  }

  // insert at front
  unshift(val) {
    const node = new Node(val);
    // no head set tail and head
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // new node
      // move head forward
      // replace with new head
      node.next = this.head;
      this.head = node;
    }
    this.length++;

    return this;
  }

  get(position) {
    if (position >= this.length || position < 0) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== position) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(position, value) {
    const node = this.get(position);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(position, value) {
    // not valid
    if (position < 0 || position > this.length) return false;
    // insert at end
    if (position === this.length) return !!this.push(value);
    // insert at front
    if (position === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(position - 1);
    const tempNode = prev.next;
    prev.next = newNode;
    newNode.next = tempNode;
    this.length++;

    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.length) return false;
    if (position === 0) return this.shift;
    if (position === this.length - 1) return this.pop;

    const prevNode = this.get(position - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log('current list items: ' + arr);
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('ely');
console.log(list); // hello => ely => null
console.log(list.pop()); // {value: "ely", next: null}
console.log(list.pop()); // {value: "Hello", next: null}
console.log(list); // {head: null, tail: null, length: 0}
list.push('one');
list.push('two');
console.log(list.shift());
console.log(list); // {head: { value: "two", next: null}, tail: { value: "two", next: null}, length: 1}
console.log(list.unshift('new head')); // {head: { value: "new head", next: ...rest}, tail: { value: "two", next: null}, length: 2}
console.log(list.get(0)); // {value: "new head", next: ..rest}
console.log(list.set(0, 'new new head')); // true
console.log(list.get(0)); // {value: "new new head", next: ..rest}
console.log(list.set(-1)); // false
console.log(list.set(10)); // false
console.log(list.insert(0, 'im the new first')); // true
console.log(list);
console.log('--- reverse starts here ---');
const newList = new SinglyLinkedList();
newList.push(100);
newList.push(200);
newList.push(300);
newList.push(400);
newList.print();
newList.reverse();
console.log('reversing list ...');
newList.print();
