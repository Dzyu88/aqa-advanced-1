function adultAge (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
const personAge1 = adultAge(15) ? "Особа повголітня" : "Особа неповнолітня";
console.log(personAge1)
const personAge2 = adultAge(25) ? "Особа повголітня" : "Особа неповнолітня";
console.log(personAge2)