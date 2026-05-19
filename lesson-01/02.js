/* С помощью цикла while найдите ФАКТОРИАЛ числа 10 ВКЛЮЧИТЕЛЬНО и присвойте его переменной factorial
  1*2*3*4*5*6*7*8*9*10

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это ПРОИЗВЕДЕНИЕ(УМНОЖЕНИЕ) всех натуральных чисел от 1 до 𝑛 ВКЛЮЧИТЕЛЬНО.
  Например, ФАКТОРИАЛ числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 3628800;

let factor = 1;
let start_number = 1;
const INITIAL_NUMBER = 10;

while (start_number <= INITIAL_NUMBER) { // ТОЛЬКО 1 <= 10
        console.log(factor);
        factor = start_number * factor; // 1 * 1 = 1; 2 * 1 = 2; 3 * 2 = 6; 4 * 6 = 24;
        start_number = start_number + 1; // 1 + 1 = 2; 2 + 1 = 3; 3 + 1 = 4; 4 + 1 = 5; — КРУТКА + ИНКРЕМЕНТ + ФОРМУЛА 
}
console.log(factor); //3628800
document.write(factor); //3628800