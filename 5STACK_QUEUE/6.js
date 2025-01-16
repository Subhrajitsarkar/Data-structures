class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }
    push(val) {
        this.stack.push(val);
        if (this.minStack.length == 0 || val <= this.minStack[this.minStack.length - 1])
            this.minStack.push(val)
    }
    pop() {
        if (this.stack.length === 0)
            return null;
        let val = this.stack.pop()
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
            return val;
        }
    }
    top() {
        if (this.stack.length === 0)
            return null;
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        if (this.minStack.length === 0)
            return null;
        return this.minStack[this.minStack.length - 1]
    }
}

let minStack = new MinStack()

minStack.push(2)
minStack.push(4)
minStack.push(26)
minStack.push(28)

console.log(minStack);