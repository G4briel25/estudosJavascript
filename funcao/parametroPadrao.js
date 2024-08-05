function num1(n1 = 1, n2 = 1, n3 = 1) {
    return n1 + n2 + n3;
}

const res = num1(1, 2, 3);
console.log(res);


function num2(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

const res2 = num2(5,5,5);
console.log(res2);