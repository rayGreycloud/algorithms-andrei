class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
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
    const former = this.lookup(index - 1);
    const latter = former.next;
    former.next = newNode;
    newNode.prev = former;
    newNode.next = latter;
    latter.prev = newNode;
    this.length++;

    return this.printList();
  }

  remove(index) {
    const former = this.lookup(index - 1);
    const latter = leader.next.next;
    former.next = latter;
    latter.prev = former;
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

  printNodes() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    console.log(nodes);
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(22);
myDoublyLinkedList.printList();
myDoublyLinkedList.insert(2, 42);
myDoublyLinkedList.remove(2);
myDoublyLinkedList.printNodes();
