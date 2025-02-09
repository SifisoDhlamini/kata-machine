export default function bubble_sort(arr: number[]): void {
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

//if there was no swap in the last iteration, the array is sorted
//Time complexity: O(n^2)