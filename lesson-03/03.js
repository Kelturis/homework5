// Разработайте ФУНКЦИЮ findLargest, которая принимает ТРИ СЛУЧАЙНЫХ ЧИСЛА(ПАРАМЕТРА) и ВОЗВРАЩАЕТ(return) НАИБОЛЬШЕЕ(>) ИЗ ТРЁХ ЧИСЕЛ.

function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}

console.log(findLargest(55, 5, 52));
console.log(findLargest(0, 44, 23));
console.log(findLargest(-50, 50, 77));
