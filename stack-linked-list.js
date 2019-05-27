class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTopPointer = this.top;
      this.top = newNode;
      this.top.next = oldTopPointer;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const poppedPointer = this.top;
    this.top = this.top.next;
    this.length--;

    return poppedPointer;
  }

  isEmpty() {
    return !this.top;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
console.log('is empty: ', myStack.isEmpty());
myStack.push('Apple');
console.log(myStack.peek());
myStack.push('Banana');
myStack.pop();
console.log('is empty: ', myStack.isEmpty());
myStack.pop();
console.log(myStack);
console.log('is empty: ', myStack.isEmpty());
