// time complexity: O(n^2)
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    if (i !== minimum) {
      swap(arr, i, minimum);
    }
  }

  return arr;
};

const swap = (arr, firstIdx, secondIdx) => {
  let tmp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = tmp;
};

const arr = [1, 33, 22, 89, 45, 100, 34, 56, 11];
console.log(selectionSort(arr)); // [ 1, 11, 22, 33, 34, 45, 56, 89, 100 ]
