class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // helper method to maintain the heap property by bubbling up the last element
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);

            // If the parent is greater than or equal to the current element, we're done
            if (this.heap[parentIndex] >= this.heap[index]) break;

            // Otherwise, swap the parent and the current element
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

            // Move up to the parent's index
            index = parentIndex;
        }
    }

    // helper method to maintain the heap property by bubbling down the first element
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }

    // insert new value into the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // remove and return the maximum value from the heap
    returnMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    // peek the maximum value from the heap without removing it
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    // get the size of the heap
    size() {
        return this.heap.length;
    }
}


// Example usage
const heap = new MaxHeap();
heap.insert(3);
heap.insert(9);
heap.insert(2);
heap.insert(1);
heap.insert(4);
heap.insert(5);

console.log("Max Heap:", heap.heap);

console.log(heap.returnMax());
console.log(heap.returnMax());
console.log(heap.peek());     
console.log(heap.size()); 