/*
    Heap Sort Algorithm
    1. Build a max heap from the input data.
    2. At this point, the largest item is stored at the root of the heap.
    3. Replace it with the last item of the heap followed by reducing the size of heap by 1.
    4. Finally, heapify the root of the tree.
    5. Repeat the above steps until the size of the heap is greater than 1.
*/


/*
    Time Complexity:
    Best Case Time Complexity: O(n log n)
    Average Case Time Complexity: O(n log n)
    Worst Case Time Complexity: O(n log n)

    Space Complexity: O(1)
    In-Place: Yes
    Stable: No
*/


function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Heap sort
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Heapify root element
        heapify(arr, i, 0);
    }

    return arr;
}


function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}


// Example usage:
const arr = [9, 7, 4, 6, 1, 8, 2, 3, 5];
const sortedArr = heapSort(arr);
console.log(sortedArr);