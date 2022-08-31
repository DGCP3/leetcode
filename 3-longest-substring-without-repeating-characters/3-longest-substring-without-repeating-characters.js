/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let hash={}
  let pointerA=0
  let pointerB=0
  let max=0
  while(pointerB<s.length){
    if(!hash[s[pointerB]]){
      hash[s[pointerB]]=1
      pointerB++
      max=Math.max(max,pointerB-pointerA)
    }else{
      delete hash[s[pointerA]]
      pointerA++
    }
  }
return max
};