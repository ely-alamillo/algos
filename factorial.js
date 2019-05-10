const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i
  }
  return total
}


console.log(factorial(4)) // 24

const factorialRecursive = (num) => {
  if (num === 1) return 1
  return num * factorialRecursive(num - 1)

}

console.log(factorialRecursive(4)) // 24