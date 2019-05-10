// write a function called reverse
// which accepts a string and returns
// a new string in reverse


const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0]
}

const reverseIterative = (str) => {
  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }

  return reversed
}

console.log(reverse('hello')) // 'olleh'
console.log(reverseIterative('hello')) // 'olleh'