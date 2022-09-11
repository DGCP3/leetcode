/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   // s= String(s).split('')
 for(let i=0;i<s.length;i++){
       s.splice(i, 0, s.pop())
}
    return s
};