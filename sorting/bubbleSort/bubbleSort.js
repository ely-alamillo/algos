// time complexity: worst and avg: O(n^2)
// time complexity: best: O(n)

const bubbleSort = arr => {
  let swapCounter = 0;
  let isSwap;

  for (let i = arr.length; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
        swapCounter++;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  console.log(`We made ${swapCounter} swaps`);
  return arr;
};

const swap = (arr, idxOne, idxTwo) => {
  const temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
};

const bubbleSortWhileLoop = arr => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapCounter++;
      }
    }
  } while (swapped);

  return arr;
};

const arr = [12, 44, 76, 97, 45, 67, 8];
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(bubbleSort(arr)); // [ 8, 12, 44, 45, 67, 76, 97 ]
console.log(bubbleSort(arrTwo)); // [ 1,2,3,4,5,6,7,8,9,10] 0 swaps

console.log('\nBubble sort with while loop\n');
console.log(bubbleSortWhileLoop(arr)); // [ 8, 12, 44, 45, 67, 76, 97 ]
console.log(bubbleSortWhileLoop(arrTwo)); // [ 1,2,3,4,5,6,7,8,9,10]
