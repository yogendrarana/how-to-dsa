/*
    Stack
    1. Stack is a linear data structure which follows a particular order in which the operations are performed.
    2. The order may be LIFO(Last In First Out).
    3. Mainly the following three basic operations are performed in the stack:
        - Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
        - Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
        - Peek or Top: Returns top element of stack.
        - isEmpty: Returns true if stack is empty, else false.
*/


/*
    Time Complexity:
    - Push: O(1)
    - Pop: O(1)
    - Peek: O(1)
    - isEmpty: O(1)

    Space Complexity: O(n)
    In-Place: No
    Stable: Yes
*/


/*
    Stack implementation using Array in JavaScript
*/

class Stack {
    constructor() {
        this.items = [];
    }

    // push function
    push(element) {
        this.items.push(element);
    }

    // pop function
    pop () {
        if (this.items.length === 0) {
            return 'Stack underflow';
        }

        return this.items.pop();
    }

    // peek function
    peek() {
        return this.items[this.items.length - 1];
    }

    // isEmpty function
    isEmpty() {
        return this.items.length === 0;
    }
}


// Example Usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Stack elements: ", stack.items);
console.log("Top element is: ", stack.peek());
console.log("Popped element is: ", stack.pop());
console.log("Stack after popping: ", stack.items);
console.log("Top element is: ", stack.peek());
console.log("Is stack empty? ", stack.isEmpty());   