/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 const hash = {};
  for (const word of strs) {
    const key = word.split('').sort().join('');
    const list = hash[key] || [];
    list.push(word);
    hash[key] = list;
  }
  return Object.values(hash);
};