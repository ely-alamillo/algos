// Given two SVGStringList, write a dunction to determinie if the
// second string is an anagram fo the first. An anagram is a word, phrase
// or name fromed by rearranging the letters of another, such as cinema, fromed
// iceman


const validAnagram = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) {
    console.log(false)
    return false
  }

  const map = {}

  // create map of all letters in strOne
  for (let char of strOne) {
    if (map[char]) {
      map[char] += 1
    } else {
      map[char] = 1
    }
  }

  // loop over strTwo and check of letter match
  // those of strOne
  for (let letter of strTwo) {
    if (!map[letter]) {
      console.log(false)
      return false
    } else {
      map[letter] -= 1
    }
  }

  console.log(true)
  return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true