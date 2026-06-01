// Разработайте ФУНКЦИЮ isEven, которая определяет, ЧЁТНОЕ ли ЧИСЛО.
// ФУНКЦИЯ должна ВОЗВРАЩАТЬ(return) true, ЕСЛИ(if) ЧЁТНОЕ ЧИСЛО и false — в противном случае(else) НЕЧЁТНОЕ.

function isEven(a) {
    if (a % 2 === 0) { // ЧЁТНЫЙ Остаток от Целочисленного Деления
        return true;
    } else if (a % 2 === 1) { // НЕЧЁТНЫЙ Остаток от Целочисленного Деления
        return false;
    } else {
        return false
    }
}

console.log(isEven(24));
console.log(isEven(42));
console.log(isEven(55));
console.log(isEven(73));
console.log(isEven(-1));
