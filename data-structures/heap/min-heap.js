class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper method to get the index of the parent node
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Helper method to get the index of the left child node
    leftChildIndex(index) {
        return 2 * index + 1;
    }

    // Helper method to get the index of the right child node
    rightChildIndex(index) {
        return 2 * index + 2;
    }

    // Method to insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Helper method to maintain the heap property by bubbling up the last element
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.parentIndex(index);

            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Method to remove and return the minimum value from the heap
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    // Helper method to maintain the heap property by bubbling down the root element
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = this.leftChildIndex(index);
            let rightChildIndex = this.rightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    // Method to get the minimum value from the heap without removing it
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    // Method to get the size of the heap
    size() {
        return this.heap.length;
    }
}

// Example usage
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(9);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(4);
minHeap.insert(5);

console.log("Min Heap:", minHeap.heap)

console.log(minHeap.extractMin()); 
console.log(minHeap.extractMin()); 
console.log(minHeap.peek());       
console.log(minHeap.size());       
