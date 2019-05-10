// example of helper method recursion
// this is good to use when we want to
// collect values as we recurse through
// the solution

const collectOdds = (nums) => {
  const result = []

  const helper = (input) => {
    if (input.length === 0) return
    if (input[0] % 2 !== 0) {
      result.push(input[0])
    }
    helper(input.slice(1))
  }

  helper(nums)
  return result
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [1,3,5,7,9]