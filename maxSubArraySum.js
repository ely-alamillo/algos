// get the max sum of n consecutive numbers

// O(n)
const maxSubArraySum = (arr, num) => {
  let maxSum = 0
  let tmpSum = 0

  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tmpSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tmpSum = tmpSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tmpSum)
  }

  return maxSum
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) // 19