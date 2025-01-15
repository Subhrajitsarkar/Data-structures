class Student {
    constructor(name = 'john', roll_no = 2) {
        this.name = name;
        this.roll_no = roll_no;
    }
    display() {
        console.log(`${this.name}`);
        console.log(`${this.roll_no}`);
    }
}
let x = new Student('sona', 7);
let y = new Student()

x.display()
y.display()