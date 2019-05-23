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
