class count_objects {
    static i = 0;
    constructor() {
        count_objects.i += 1;
    }
}

let a = new count_objects()
let b = new count_objects()
let c = new count_objects()
console.log(count_objects.i)
let d = new count_objects()
let e = new count_objects()
console.log(count_objects.i)