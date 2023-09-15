function divide (numerator, denominator){
    try {
        let action = numerator/denominator;
        console.log(action);
        if (denominator === 0 || typeof numerator != "number" || typeof denominator != "number")
            throw new Error("Denominator can't be 0 and both arguments must be a number")
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

