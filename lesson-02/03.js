/*
 * Напишите код, который будет ОПРЕДЕЛЯТЬ ОЦЕНКУ Студента(grade) в зависимости ОТ БАЛЛА(score).
 * БАЛЛ может быть ЦЕЛЫМ ЧИСЛОМ ОТ 0 ДО 100 ВКЛЮЧИТЕЛЬНО, а ОЦЕНКИ 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100) ВКЛЮЧИТЕЛЬНО
 * Результат сохраните в переменной grade.
*/

const score = Math.floor(Math.random() * 100) + 1; // тестовое значение, можно изменять
let grade = "C";
// your code
if (score >= 0 && score <= 49) {
    grade = "F"
} else if (score >= 50 && score <= 69) {
    grade = "D"
} else if (score >= 70 && score <= 79) {
    grade = "C"
} else if (score >= 80 && score <= 89) {
    grade = "B"
} else {
    grade = "A"
}

console.log(score);
console.log(grade);