/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {  
  if (changed.length % 2 !== 0) return []
  let original = []
  let map = {}
  let sorted = changed.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length; i++) {
    map[sorted[i]] = map[sorted[i]] + 1 || 1
  }
  for (let i = 0; i < sorted.length; i++) {
    if (map[sorted[i]]) {
      if (map[sorted[i] * 2]) {
        original.push(sorted[i])
        map[sorted[i]]--
        map[sorted[i] * 2]--
      } else {
        return []
      }
    }
  }

  return original
  
};