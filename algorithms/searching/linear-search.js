/*
    Linear Search
    1. Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
    2. If x matches with an element, return the index.
    3. If x doesn’t match with any of elements, return -1.


    Time Complexity: O(n)
    Space Complexity: O(1)
*/


/*
    JavaScript implementation of Linear Search
*/


function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}


// Example usage:
const arr = [2, 3, 4, 10, 40, 5, 8];
const value = 3;

const index = linearSearch(arr, value);

if (index === -1) {
    console.log(`${value} is not found in the array`);
} else {
    console.log(`${value} lies on the index number ${index}`); // Output: 1
}