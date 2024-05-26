/*
    Binary Search
    Searching algorithm for sorted arrays.
    1. Compare x with the middle element.
    2. If x matches with the middle element, we return the mid index.
    3. Else if x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
    4. Else (x is smaller) recur for the left half.
    5. If the element is not present in the array, return -1.


    Time Complexity: O(log n)
    Space Complexity: O(1)
    
    Best Case Complexity
    Time Complexity: The best case complexity is O(1) when the element is found at the middle index.

    Worst Case Complexity
    Time Complexity: The worst case complexity is O(log n) when the element is not present in the array or it is present at the last index.
*/


/*
    JavaScript implementation of Binary Search
*/


function binarySearch(arr, value) {
    const middle = Math.floor(arr.length / 2);

    if (arr[middle] === value) {
        return middle;
    }

    if (arr.length === 1) {
        return -1;
    }

    if (value > arr[middle]) {
        const result = binarySearch(arr.slice(middle), value);
        if (result === -1) {
            return -1;
        }
        return middle + result;
    }

    const result = binarySearch(arr.slice(0, middle), value);
    if (result === -1) {
        return -1;
    }
    return result;
}

// Example usage:
const arr = [2, 3, 4, 10, 40, 5, 8];
const value = 1;

const index = binarySearch(arr, value);

if (index === -1) {
    console.log(`${value} is not found in the array`);
} else {
    console.log(`${value} lies on the index number ${index}`);
}