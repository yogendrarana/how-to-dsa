/*
    Algorithm:
    1. Start from the second element of the array and compare it with the previous element.
    2. If the current element is smaller than the previous element, compare it with the elements before.
    3. Move the greater elements one position up to make space for the current element.
    4. Repeat step 2 and 3 until the current element is greater than the previous element.
    5. Repeat steps 1 to 4 for the remaining elements of the array.
*/


/*
    Time Complexity:
    Best Case Time Complexity: O(n)
    Average Case Time Complexity: O(n^2)
    Worst Case Time Complexity: O(n^2)

    Space Complexity: O(1)
    In-Place: Yes
    Stable: Yes
*/


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        const currentElement = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;

}


// Example usage:
const arr = [5, 3, 8, 1, 9, 6, 7];
const sortedArray = insertionSort(arr);
console.log("sortedArray: ", sortedArray);