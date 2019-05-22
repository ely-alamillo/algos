// time complexity: best, avg, wors O(nk), could also be O(n log n)
// where n is the lenght of the array
// where k is the number of digits
// space complexity: O(n + k)

const radixSort = nums => {
  const maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      const digit = getDigit(nums[j], i);
      buckets[digit].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
};

// only works base 10 numbers
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getDigitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
  }
  return maxDigits;
};

const arr = [233, 1, 333, 5662334, 2343];
console.log(radixSort(arr));
