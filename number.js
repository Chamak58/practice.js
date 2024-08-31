var orangePrice = 20;
var chocolate = 0.5;
var applePrice = '22.5';

// decimal to integer:
// var applePrice = parseInt('22.5');

// decimal t0 fraction:
var applePrice = parseFloat('22.5');

// console.log(orangePrice);
// console.log(chocolate);
// console.log(orangePrice + chocolate);
// console.log(typeof applePrice);

// console.log(orangePrice + applePrice);

// to fixed decimal value after decimal number:
var first = 0.1;
var second = 0.2;
var total = first + second;
// console.log(total);
console.log(total.toFixed(2));

const num = 50 / 0;
console.log(num);

var num1 = -50 / 0;
console.log(num1);