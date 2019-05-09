// implement a function called countUniqueValues, which
// accepts a sorted array, and counts the unique values in
// the array. There can be negarive numbers in the array,
// but will always be sorted.

// O(n)
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0

  let i = 0

  // j scouts and replaces the values,
  // we build up the unique values as we go
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  return i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4