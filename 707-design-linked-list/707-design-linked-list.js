class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class MyLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  addAtHead(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.size++
      return
    }
    const temp = this.head
    node.next = temp
    this.head = node
    this.size++
  }

  addAtTail(val) {
    if (this.head === null) {
      this.addAtHead(val)
      return
    }
    const node = new Node(val)
    let ele = this.head
    while (ele.next) {
      ele = ele.next
    }
    ele.next = node
    this.size++
  }

  get(idx) {
    if (idx >= this.size) return -1
    let i = idx
    let ele = this.head
    while (i) {
      ele = ele.next
      if (!ele) return -1
      i--
    }
    return ele.val
  }

  traverse() {
    let ele = this.head
    let arr = []
    while (ele) {
      arr.push(ele.val)
      ele = ele.next
    }
    return arr
  }

  addAtIndex(idx, val) {
    if (idx > this.size) return 'invalid index'
    if (idx === 0) {
      this.addAtHead(val)
      return
    }
    if (idx === this.size) {
      this.addAtTail(val)
      return
    }
    const node = new Node(val)
    let ele = this.head
    let i = idx - 1
    while (i) {
      ele = ele.next
      i--
    }
    const temp = ele.next
    ele.next = node
    node.next = temp
    this.size++
  }

  deleteLast() {
    let ele = this.head
    while (ele.next.next) {
      ele = ele.next
    }
    ele.next = null
    this.size--
  }

  deleteFirst() {
    this.head = this.head.next
    this.size--
  }

  deleteAtIndex(idx) {
    if (idx >= this.size) return 'invalid index'
    if (idx === this.size) {
      this.deleteLast()
      return
    }
    if (idx === 0) {
      this.deleteFirst()
      return
    }
    let ele = this.head
    let i = idx - 1
    while (i) {
      ele = ele.next
      i--
    }
    ele.next = ele.next.next
    this.size--
  }
}


