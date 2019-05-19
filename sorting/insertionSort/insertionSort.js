// time complexity: O(n^2)
// if data almost sorted O(n)
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

const arr = [5, 3, 17, 8, 12, 53, 11, 4, 0]; // [ 0, 3, 4, 5, 8, 11, 12, 17, 53 ]
console.log(insertionSort(arr));
