// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while 
// preserving the order of characters. No two characters may map to the same character but a character may map to itself.

const isIsomorphic = (s, t) => {
   const sMap = {}
   const tMap = {}
   
   for (let i = 0; i < s.length; i++) {
       let sLetter = s[i] // e
       let tLetter = t[i] // a
       
       if (!sMap[sLetter]) {
           sMap[sLetter] = tLetter
       }
       
       if (!tMap[tLetter]) {
           tMap[tLetter] = sLetter
       }
       
       
       if (sMap[sLetter] !== tLetter || tMap[tLetter] !== sLetter ) {
           return false
       }
   }
       
       return true
};

console.log(isIsomorphic('egg', 'add'))  // true
console.log(isIsomorphic('foo', 'foo'))  // true
console.log(isIsomorphic('foo', 'tim'))  // false
