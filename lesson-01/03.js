/* Используйте цикл while для нахождения СУММЫ всех НЕЧЁТНЫХ чисел от 1 до 20 ВКЛЮЧИТЕЛЬНО.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться ОПЕРАТОР ОСТАТКА от деления %. Например, выражение 5 % 2 вернёт ОСТАТОК 1.
*/

// your code
let sum = 100;

let start_number = 1;
let summ = 0; // нужна переменная для Суммы, ИМЕННО НОЛЬ КАК НАЧАЛЬНОЕ ЗНАЧЕНИЕ
const INITIAL_NUMBER = 20;

while (start_number < INITIAL_NUMBER) { // 1 < 20
  if (start_number % 2 == 1) { // true НЕЧЁТНОЕ
    console.log(start_number);
    summ = summ + start_number; // 0 + 1 = 1; 1 + 3 = 4; 4 + 5 = 9; 9 + 7 = 16; КАЖДЫЙ РАЗ ДОБАВЛЯЕМ НЕЧЁТНОЕ ЧИСЛО
    document.write("Добавили: " + start_number + "<br>");
  } else {
    false
  }
  start_number++
}

document.write("<b>Сумма всех нечётных от 1 до 20: " + summ + "</b>");