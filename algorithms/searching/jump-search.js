/*
    Jump Search (for sorted arrays only)
    The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.
    1. Start with the first block. Move the current block to the next block.
    2. Check the last element of the current block.
    3. If the element to be searched is greater than the last element of the current block, jump to the next block.
    4. Repeat steps 2 and 3 until the element is found or the last block is reached.
    5. If the element is found, return the index.
    6. If the element is not found, return -1.

    
    Time Complexity: O(√n)
    Space Complexity: O(1)

    Best Case Complexity
    Time Complexity: O(1) when the element is found at the first index.

    Worst Case Complexity
    Time Complexity: O(√n) when the element is not present in the array.
*/


/*
    JavaScript implementation of Jump Search
*/

function jumpSort (array, value) {
    const length = array.length;
    const jump = Math.floor(Math.sqrt(length));
    let left = 0;
    let right = 0;

    while (right < length && array[right] < value) {
        left = right;
        right += jump;
    }

    for (let i = left; i < Math.min(right, length); i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}


// Example usage:
const arr = [2, 7, 4, 10, 40, 5, 8, 3];
const value = 3;

const index = jumpSort(arr, value);
if (index === -1) {
    console.log(`${value} is not found in the array`);
} else {
    console.log(`${value} lies on the index number ${index}`);
}