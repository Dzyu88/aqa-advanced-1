function divide (numerator, denominator){
    try {
        if (typeof numerator != "number" || typeof denominator != "number")
            throw new Error("both arguments must be a number")
        if (denominator === 0)
            throw new Error("Denominator can't be 0")
        return numerator/denominator;
    } catch (err) {
        console.log("Error has been happened:", err.message)
    } finally {
        console.log("Work has been done successfully!")
    }
}
const res1 = divide(10,2);
console.log(res1)
const res2 = divide(10,0);
console.log(res2)
const res3 = divide(0, 5);
console.log(res3)
const res4 = divide(10, "Hello");
console.log(res4)
const res5 = divide(10, true);
console.log(res5)
const res6 = divide(false, 4);
console.log(res6)
