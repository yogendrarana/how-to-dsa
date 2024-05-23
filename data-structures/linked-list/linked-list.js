/*
    Linked List
    1. A linked list is a linear data structure consisting of a sequence of elements called nodes.
    2. Each node contains a data element and a reference (link) to the next node in the sequence.
    3. The last node in the list typically points to null, indicating the end of the list.
    4. The first node is called the head and the last node is called the tail.
    5. Following are the types of linked list:
        - Singly Linked List
        - Doubly Linked List
        - Circular Linked List
    6. Following are the basic operations supported by a linked list:
        - Insertion
        - Deletion
        - Traversal
        - Searching
        - Sorting
        - Reversing
*/


/*
    Time Complexity:
    - Insertion: O(1)
    - Deletion: O(1)
    - Traversal: O(n)
    - Searching: O(n)
    - Sorting: O(n log n)
    - Reversing: O(n)
    - Get Nth node: O(n)
    - Get middle node: O(n)
    - Detect loop: O(n)
    - Remove loop: O(n)
    - Count nodes

    Space Complexity: O(n)
    In-Place: No
    Stable: Yes
*/


/*
    JavaScript Implementation of Singly Linked List
*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insertion operations
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }

    insertAtPostion(data, index) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.insertAtBeginning(data);
            return;
        }

        const newNode = new Node(data);
        let currentNode = this.head;
        let count = 0;

        while (currentNode && count < index - 1) {
            currentNode = currentNode.next;
            count++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }


    // Deletion operations
    deleteAtBeginning() {
        if (!this.head) {
            return;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        this.size--;
    }

    deleteAtEnd() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        const removedNode = currentNode.next;
        currentNode.next = null;
        removedNode.next = null;
        this.size--;
    }

    deleteAtPosition(position) {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.removeFromHead();
            return;
        }

        let currentNode = this.head;
        let count = 0;

        while (currentNode && count < index - 1) {
            currentNode = currentNode.next;
            count++;
        }

        const removedNode = currentNode.next;
        currentNode.next = removedNode.next;
        removedNode.next = null;
        this.size--;
    }

    getAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let currentNode = this.head;
        let count = 0;

        while (currentNode && count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode ? currentNode.data : null;
    }


    // Traversal operation
    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }


    // Searching operation
    search(data) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }


    // Sorting operation
    sort() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;
        let temp = null;
        let isSwapped = false;

        if (!this.head) {
            return;
        }

        do {
            isSwapped = false;
            currentNode = this.head;
            while (currentNode.next) {
                nextNode = currentNode.next;
                if (currentNode.data > nextNode.data) {
                    temp = currentNode.data;
                    currentNode.data = nextNode.data;
                    nextNode.data = temp;
                    isSwapped = true;
                }
                currentNode = currentNode.next;
            }
        } while (isSwapped);
    }


    // Reversing operation
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.head = prevNode;
    }


    // Get Nth node
    getNthNode(position) {
        if (position < 0) {
            console.log('Invalid position');
            return;
        }

        let currentNode = this.head;
        let count = 0;
        while (currentNode && count < position) {
            currentNode = currentNode.next;
            count++;
        }

        if (currentNode === null) {
            console.log('Invalid position');
            return;
        }

        return currentNode.data;
    }


    // Get middle node
    getMiddleNode() {
        let slowPtr = this.head;
        let fastPtr = this.head;

        while (fastPtr && fastPtr.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }

        return slowPtr.data;
    }


    // Detect loop
    detectLoop() {
        let slowPtr = this.head;
        let fastPtr = this.head;

        while (slowPtr && fastPtr && fastPtr.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            if (slowPtr === fastPtr) {
                return true;
            }
        }

        return false;
    }


    // Remove loop
    removeLoop() {
        let slowPtr = this.head;
        let fastPtr = this.head;

        while (slowPtr && fastPtr && fastPtr.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            if (slowPtr === fastPtr) {
                break;
            }
        }

        if (slowPtr === fastPtr) {
            slowPtr = this.head;
            while (slowPtr.next !== fastPtr.next) {
                slowPtr = slowPtr.next;
                fastPtr = fastPtr.next;
            }

            fastPtr.next = null;
        }
    }


    // Count nodes
    countNodes() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }


    // Delete linked list
    deleteList() {
        this.head = null;
    }
}


// Example Usage:
const linkedList = new LinkedList();
linkedList.insertAtBeginning(10);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(30);
linkedList.insertAtEnd(40);
linkedList.insertAtEnd(50);
linkedList.insertAtEnd(60);

linkedList.display(); // 10 20 30 40 50 60
// linkedList.deleteAtBeginning();
// linkedList.display(); // 20 30 40 50 60
// linkedList.deleteAtEnd();
// linkedList.display(); // 20 30 40 50
// linkedList.deleteAtPosition(1);
// linkedList.display(); // 20 40 50
// console.log(linkedList.search(40)); // true
// console.log(linkedList.search(100)); // false
// linkedList.insertAtPostion(30, 1);
// linkedList.display(); // 20 30 40 50
// linkedList.sort();
// linkedList.display(); // 20 30 40 50
// linkedList.reverse();
// linkedList.display(); // 50 40 30 20
// console.log(linkedList.getNthNode(2)); // 30
// console.log(linkedList.getMiddleNode()); // 40
// console.log(linkedList.detectLoop()); // false