// created the Stack class for making a stack of items with diverse methods of interacing it;
class Stack {
    constructor(maxLength = 10) {
        if (typeof maxLength !== 'number') {
            throw new Error ('The size of stack should be a number!');
        } else this.maxLength = maxLength;
        this.stack = [];
    }

    push(elem) {
        if (this.stack.length < this.maxLength) {
            this.stack.unshift(elem);
        } else {
            throw new Error ('This stack is full!');
        }   
    }
    
    pop() {
        if (this.stack.length) {
            this.stack.shift();
        } else {
            throw new Error ('This stack is empty!'); 
        }
    }
    
    peek() {
        if (this.stack.length) {
            return this.stack[0]; 
        }
        else return null;
    }
    
    isEmpty() {
        if (this.stack.length) {
            return false;
        } else return true;
    }
   
    toArray() {
        return this.stack;
    }

    static fromIterable(iterable) {
        if(iterable && typeof iterable[Symbol.iterator] === 'function') {
            let newStack = new Stack(iterable.length);
            for (let value of iterable) {
                newStack.push(value);
            }
            return newStack;
        } else {
            throw new Error ('The entity is not iterable!');
        }
    }
}
// example of usage
let stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

console.log(stack.isEmpty()); // Output: false

console.log(stack.toArray()); // Output: [3, 2, 1]

let iterable = [4, 5, 6];
let newStack = Stack.fromIterable(iterable);

console.log(newStack.peek()); // Output: 6

console.log(newStack.toArray()); // Output: [6, 5, 4]