// Return true if the given string is a palindrome.Otherwise, return false.
// A palindrome is a word or sentence that’s spelled the same way both forward
// and backward, ignoring punctuation, case, and spacing. Note.You’ll need to
// remove all non - alphanumeric characters(punctuation, spaces and symbols) 
// and turn everything lower case in order to check for palindromes.


const isPalindrome = (str) => {
  const alphaNum = /[A-Za-z0-9]/g
  str = str.toLowerCase().replace(alphaNum, '')

  const len = str.length

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('eye')) // true
console.log(isPalindrome('Eye')) // true
console.log(isPalindrome('R a ce CAr')) // true
console.log(isPalindrome('Caa t!!!!')) // false
