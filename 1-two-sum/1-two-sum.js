/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (num, target) {
    let hash = {};
    for (let i = 0; i < num.length; i++) {
        let diff = target - num[i];
        if (hash[diff] !== undefined) {
          return [hash[diff], i];
        }
        hash[num[i]] = i;
    } 
};