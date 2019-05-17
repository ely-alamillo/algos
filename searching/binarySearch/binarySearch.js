// time complexity: worst and avg: O(log n)
// time complexity: best : O(1)
// const binarySearch = (arr, target) => {
//   const len = arr.length;
//   let left = 0;
//   let right = len - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== target && left <= right) {
//     if (target < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }

//   return arr[middle] === target ? middle : -1;
// };

const binarySearch = (arr, target) => {
  const len = arr.length;
  let left = 0;
  let right = len - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(binarySearch(arr, 6)); // 5
console.log(binarySearch(arr, 0)); // -1
