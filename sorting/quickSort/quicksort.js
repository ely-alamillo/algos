// time complexity: best and avg O(n log n), worst: O(n^2)
// space complexity: O(1)
const quicksort = (arr, left = 0, right = arr.length - 1) => {
  let pivotIdx = pivot(arr, left, right);

  if (left < right) {
    // left side
    quicksort(arr, left, pivotIdx - 1);

    // right side
    quicksort(arr, pivotIdx + 1, right);
  }

  return arr;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  // picking first element as pivot
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const swap = (arr, firstIdx, secondIdx) => {
  const temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
};

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(quicksort(arr));
