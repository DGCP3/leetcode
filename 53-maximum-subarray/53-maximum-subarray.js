/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var prev = 0
  var max = -Infinity

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }
  return max
};