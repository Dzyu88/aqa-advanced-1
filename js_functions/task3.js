function f1(num) {
    console.log(num);
    if (num <= 0) return;
    f1(num-1);
}
f1(8)
