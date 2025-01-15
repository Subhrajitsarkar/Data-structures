class Triangle {
    constructor(s1 = 1, s2 = 2, s3 = 3) {
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
    cal_area() {
        return this.s1 * this.s2 * this.s3
    }
    cal_per() {
        return this.s1 + this.s2 + this.s3
    }
}

let t = new Triangle(4, 5, 6)
console.log(t.cal_area());

let s = new Triangle()
console.log(s.cal_per());
