/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (const word of strs) {
    const key = word.split('').sort().join('');
    const list = map.get(key) || [];
    list.push(word);
    map.set(key, list);
  }
  return Array.from(map.values());
};