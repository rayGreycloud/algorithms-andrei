class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this.printList();
  }

  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    } else if (index <= 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const leader = this.lookup(index - 1);
    const nextPointer = leader.next;
    leader.next = newNode;
    newNode.next = nextPointer;
    this.length++;

    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const former = this.lookup(index - 1);
      const targetNode = former.next;
      former.next = targetNode.next;
    }

    if (index + 1 === this.length) {
      this.tail = former;
    }

    this.length--;

    return this.printList();
  }

  lookup(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(list);
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    // set new tail
    this.tail = this.head;
    let second = first.next;

    // If !second then first is last node
    while (second) {
      const third = second.next;
      second.next = first;
      // "Iterate" thru list
      first = second;
      second = third;
    }

    // set new tail's next
    this.tail.next = null;
    // set new head to last node
    this.head = first;

    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(22);
myLinkedList.printList();
myLinkedList.insert(2, 42);
myLinkedList.remove(2);
myLinkedList.reverse();
