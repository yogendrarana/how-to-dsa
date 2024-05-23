/*
    Queue
    1. Queue is a linear data structure which follows a particular order in which the operations are performed.
    2. The order may be FIFO(First In First Out).
    3. Mainly the following four basic operations are performed on queue:
        - Enqueue: Adds an item to the queue. If the queue is full, then it is said to be an Overflow condition.
        - Dequeue: Removes an item from the queue. The items are popped in the same order in which they are pushed. If the queue is empty, then it is said to be an Underflow condition.
        - Front: Get the front item from the queue.
        - Rear: Get the last item from the queue.
*/


/*
    Time Complexity:
    - Enqueue: O(1)
    - Dequeue: O(1)
    - Front: O(1)
    - Rear: O(1)

    Space Complexity: O(n)
    In-Place: No
    Stable: Yes
*/


/*
    Queue implementation using Array in JavaScript
*/


class Queue {
    constructor() {
        this.items = [];
    }

    // enqueue function
    enqueue(element) {
        this.items.push(element);
    }

    // dequeue function
    dequeue() {
        if (this.items.length === 0) {
            return 'Queue underflow';
        }

        return this.items.shift();
    }

    // front function
    front() {
        if (this.items.length === 0) {
            return 'No elements in Queue';
        }

        return this.items[0];
    }

    // rear function
    rear() {
        if (this.items.length === 0) {
            return 'No elements in Queue';
        }

        return this.items[this.items.length - 1];
    }

    // isEmpty function
    isEmpty() {
        return this.items.length === 0;
    }
}


// Example Usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Queue elements: ", queue.items);
console.log("Front element is: ", queue.front());
console.log("Rear element is: ", queue.rear());
console.log("Dequeued element is: ", queue.dequeue());
console.log("Queue elements after dequeue: ", queue.items);
console.log("Is Queue empty? ", queue.isEmpty());   