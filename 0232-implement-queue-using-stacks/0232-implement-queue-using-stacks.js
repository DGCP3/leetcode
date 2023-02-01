/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MyQueue {
  constructor() {
    // initialize 2 stacks
    this.stack1 = [];
    this.stack2 = [];
  }
  // push to stack1
  push(x) {
    this.stack1.push(x);
  }
  // if stack2 is empty, pop all elements from stack1 and push to stack2
  // then pop the top element from stack2
  pop() {
    if (this.stack2.length == 0) {
      while (this.stack1.length != 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  // same as pop()
  peek() {
    if (this.stack2.length == 0) {
      while (this.stack1.length != 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  // if both stacks are empty, the queue is empty
  empty() {
    return this.stack1.length == 0 && this.stack2.length == 0;
  }
}