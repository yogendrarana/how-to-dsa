/* 
    Shell Sort Algorithm
    1. Start with a gap, and compare elements that are far apart.
    2. Reduce the gap and repeat step 1.
    3. Continue reducing the gap until it becomes 1.
    4. Perform insertion sort on the elements.
*/


/*
    Time Complexity:
    Best Case Time Complexity: O(n log n)
    Average Case Time Complexity: O(n log n)
    Worst Case Time Complexity: O(n^2)

    Space Complexity: O(1)
    In-Place: Yes
    Stable: No
*/


function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
}


// Example usage:
const arr = [9, 7, 4, 6, 1, 8, 2, 3, 5];
const sortedArr = shellSort(arr);
console.log(sortedArr);