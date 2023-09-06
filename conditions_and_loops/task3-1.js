const number= 7;
for (let i = 1; i <= 10; i++) {
    if (i * number === 0) {
        continue
    }
    console.log(`${number} x ${i} = ${number*i}`)
}