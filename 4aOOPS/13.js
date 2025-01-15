class PARENT {
    print() {
        console.log("this is a parent class")
    }
}
class CHILD extends PARENT {
    print() {
        console.log("this is a child class");
    }
}
let par = new PARENT()
let chi = new CHILD()

par.print()
chi.print()