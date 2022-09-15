/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const close = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  const stack = []
  const arr = Array.from(s)
  while (arr.length) {
    const char = arr.shift()
    if (open[char]) {
      stack.push(char)
    } else if (close[char]) {
      const last = stack.pop()
      if (close[char] !== last) {
        return false
      }
    }
  }

  return stack.length > 0 ? false : true
};