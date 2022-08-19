/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
let arr=[],s=""
  for(let i=1; i<n+1; i++){
    s = (i%3?'':'Fizz')+(i%5?'':'Buzz')||i;
    arr.push(""+s);
  }
  return arr;
};