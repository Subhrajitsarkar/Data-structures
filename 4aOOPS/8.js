class Employee {
    getInfo(salary, working_hours) {
        this.salary = salary;
        this.working_hours = working_hours;
    }
    AddSal() {
        if (this.salary < 500)
            this.salary += 10;
    }
    AddWork() {
        if (this.working_hours > 6)
            this.salary += 5;
    }
}
let t = new Employee()
t.getInfo(590, 7)
t.AddSal()
t.AddWork()
console.log(t.salary);
