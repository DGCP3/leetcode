/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   const ans=[]
  for(let i=0;i<nums.length;i++){
    let prod=1
    for(let j=0;j<nums.length;j++){
      if(i===j) continue;
      prod*=nums[j]
    }
    ans.push(prod)
  }
  return ans 
};