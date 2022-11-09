/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        result[i] = 0
        console.log(result)
        for (let j = 0; j < nums.length ; j++) {
            if (nums[i] > nums[j]) {
                result[i]++
            }
        }
    }
    return result
    
};