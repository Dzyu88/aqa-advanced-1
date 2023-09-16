function getIsAdult (age) {
    return age >= 18;
}

const personAge1 = getIsAdult(15) ? "Особа повголітня" : "Особа неповнолітня";
console.log(personAge1)
const personAge2 = getIsAdult(25) ? "Особа повголітня" : "Особа неповнолітня";
console.log(personAge2)