// function declaration
function calculateArea1(width, height) {
    const area1 = width * height;
    return area1;
}
const result1 = calculateArea1(7, 20);
console.log(result1)

// function expression
const calculateArea2 = function (width2, height2){
    const area2 = width2 * height2;
    console.log(area2);
}
calculateArea2(4, 40)

// arrow function
const calculateArea3 = (width3, height3) => width3 * height3

const area3 = calculateArea3(5, 45);
console.log(area3);