// time complexity: O(n)
const linearSearch = (arr, target) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 22, 33, 44, 55, 2222, 355], 12)); // -1
console.log(linearSearch([1, 22, 33, 44, 55, 2222, 355], 355)); // 6
console.log(
  linearSearch(
    [1, 3, 65, 78, 35, 6466, 7235, 66, 13434, 6346, 626, 64236, 26623],
    64236
  )
); // 11
