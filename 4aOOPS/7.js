class Employee {
    constructor(name, yearOfJoining, address) {
        this.name = name;
        this.yearOfJoining = yearOfJoining;
        this.address = address;
    }

    print_details() {
        console.log(`${this.name} ${this.yearOfJoining} ${this.address}`);
    }
}
var t = new Employee("ram", 1992, "Bangalore");
t.print_details();
