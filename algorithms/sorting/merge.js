/*
    Merge Sort Algorithm
    1. Divide the array into two halves.
    2. Recursively sort the two halves.
    3. Merge the two halves.
*/


/*
    Time Complexity:
    Best Case Time Complexity: O(n log n)
    Average Case Time Complexity: O(n log n)
    Worst Case Time Complexity: O(n log n)

    Space Complexity: O(n)
    In-Place: No
    Stable: Yes
*/


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];

    let i = 0, j = 0;

    // Merge the two arrays while sorting
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}


// Example usage:
const arr = [4, 2, 7, 1, 9, 5, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr);