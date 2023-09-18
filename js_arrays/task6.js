const numbersList = [1,10,14,2,4,5,43,34];
const numbersList2 = numbersList.concat([]).sort((a,b) => a - b);
console.log(numbersList);
console.log(numbersList2);