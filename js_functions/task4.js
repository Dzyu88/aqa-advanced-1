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
divide(10,2);

divide(10,0);

divide(0, 5);

divide(10, "Hello");

divide(10, true);

divide(false, 4);

