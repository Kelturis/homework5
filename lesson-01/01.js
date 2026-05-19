// С помощью цикла while найдите СУММУ чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 210;

let number = 1; // Количество круток
let calc = 1; // Базовое значение(Начальное)
let summ = 2; // Гибкий Инкремент

while (number < 20) { // number++ = 20 круток
    console.log(calc)
    calc = calc + summ; //СУММА чисел
    summ++ // Увеличение Гибкого Инкремента на +1
    number++ // Увеличение Количества круток
}

document.write(calc); // 210