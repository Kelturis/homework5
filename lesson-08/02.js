/*
 * Напишите Функцию(isNumeric), которая принимает Строку(Аргумент) и ПРОВЕРЯЕТ, представляет ли эта Строка(Аргумент)
  корректное Числовое значение.
 * Если(if) Строка(Аргумент) является(===) Числом, Функцию(isNumeric) должна ВОЗВРАЩАТЬ(return) true, в противном случае - false.
 */

//   function isNumeric(str) {
//   // Убираем пробелы в начале и конце
//   let trimmed = str.trim();
  
//   // Если строка пустая → не число
//   if (trimmed === '') {
//     return false;
//   }
  
//   // Проверяем, что это число и не специальное значение
//   return !isNaN(trimmed) && isFinite(trimmed);
// }

function isNumeric(str) {
  let number = +str;
  if (number) {
    return true
  } else {
    return false
  }
}

// function isNumeric(str) {
//   return +str ? true : false
// }

// function isNumeric(str) {
//   return !isNaN(str) && str.trim() !== '';
// }

console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
