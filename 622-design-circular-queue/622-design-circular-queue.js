/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.size = k
  this.arr = []
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  this.arr.push(value)
  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false
  this.arr.shift()
  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1
  return this.arr[0]
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1
  return this.arr[this.arr.length - 1]
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.arr.length === 0) return true
  return false
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.arr.length === this.size
}

//Your MyCircularQueue object will be instantiated and called as such:

