class Member {
    constructor(name, age, phone_number, address, salary) {
        this.name = name;
        this.age = age;
        this.phone_number = phone_number;
        this.address = address;
        this.salary = salary;
    }
    printSalary() {
        console.log(this.salary);
    }
}
class Employee extends Member {
    constructor(name, age, phone_number, address, salary, specialization) {
        super(name, age, phone_number, address, salary)
        this.specialization = specialization;
    }
    print_details() {
        console.log(this.name);
        console.log(this.specialization);
        this.printSalary()
    }
}
class Manager extends Member {
    constructor(name, age, phone_number, address, salary, department) {
        super(name, age, phone_number, address, salary)
        this.department = department;
    }
    print_details() {
        console.log(this.name);
        console.log(this.department);
        this.printSalary()
    }
}
var obj = new Employee("Ram", 25, "7003", "Bangalore", 1000, "cse");
obj.print_details();

var obj_Man = new Manager("babu", 100, "1234", "Bangalore", 1000, "JP");
obj_Man.print_details();