/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      const arr = Array.from(s)
  const arr2 = Array.from(t)
  const hash = {}
  if (arr.length !== arr2.length) return false
  for (const char of arr) {
    hash[char] = hash[char] || 0
    hash[char]++
  }
  for (const char of arr2) {
    if (!hash[char]) return false
    hash[char]--
  }
  for (let key in hash) {
    if (hash[key] !== 0) return false
  }
  return true
};