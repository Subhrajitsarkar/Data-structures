class Student {
    constructor(name = 'john', roll_no = 2) {
        this.name = name;
        this.roll_no = roll_no;
    }
}

let x = new Student('sona', 7);
console.log(x.name, x.roll_no)

let y = new Student()
console.log(y);
