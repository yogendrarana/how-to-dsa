/*
    Algorithm 
    1. Initialization: The algorithm starts with the entire list considered as an unsorted sublist.
    2. Find the minimum: Iterate through the unsorted sublist to find the minimum element.
    3. Swap: Swap the minimum element found in step 2 with the first element of the unsorted sublist.
    4. Move the boundary: Move the boundary between the sorted and unsorted sublists one element to the right.
    5. Repeat: Repeat steps 2-4 until the entire list is sorted.
*/


/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    In-Place: Yes
    Stable: No
*/


function bubbleSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


// Example usage:
const unsortedArr = [5, 100, 2, 1, 3, 4]
const sortedArrt = bubbleSort(unsortedArr)
console.log("sortedArrt: ", sortedArrt)