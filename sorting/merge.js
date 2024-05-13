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


function mergeSort(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// Example usage:
const arr = [4, 2, 7, 1, 9, 5, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr);