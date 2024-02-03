/*
    This algorith has the worst performance of all the sorting algorithms. It is not recommended to use it in production.
    Has a complexity of O(n^2) meaning that for each element in the array, it will have to loop through the entire array.
    Has a space complexity of O(1) because it does not create any new data structures.
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

const unsortedArr = [5, 100, 2, 1, 3, 4]
const sortedArrt = bubbleSort(unsortedArr)

console.log("sortedArrt: ", sortedArrt)