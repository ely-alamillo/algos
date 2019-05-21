// time complexity: worst, avg, best O(n log n)
// space complexity: O(n)
const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
};

const merge = (arr1, arr2) => {
  const mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
};

const arr1 = [1, 5, 9, 19];
const arr2 = [4, 6, 20, 100];
const arr3 = [1, 4, 6, 7, 23, 26, 2, 5, 2562];
// console.log(merge(arr1, arr2));
console.log(mergeSort(arr3));
