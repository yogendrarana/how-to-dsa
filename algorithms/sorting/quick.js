/*
    Quick Sort Algorithm
    1. Pick an element as pivot.
    2. Partition the array around the pivot.
    3. Recursively sort the two halves.
*/


/*
    Time Complexity:
    Best Case Time Complexity: O(n log n)
    Average Case Time Complexity: O(n log n)
    Worst Case Time Complexity: O(n^2)

    Space Complexity: O(log n)
    In-Place: Yes
    Stable: No
*/


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            // Skip pivot element
            continue; 
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


// Example usage:
const arr = [9, 7, 4, 6, 1, 8, 2, 3, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr);