/*
Попробуйте написать свою версию МЕТОДА `map`. Ваша задача — создать ФУНКЦИЮ `map`, которая принимает ДВА ПАРАМЕТРА(ДВА АРГУМЕНТА):

- `array` (МАССИВ, над которым выполняется Операция),
- `callback` (ФУНКЦИЯ, которая ВЫЗЫВАЕТСЯ для КАЖДОГО элемента МАССИВА).

ФУНКЦИЯ `callback` должна иметь возможность принимать следующие ДВА ПАРАМЕТРА(ДВА АРГУМЕНТА):

- `element` (ТЕКУЩИЙ элемент МАССИВА),
- `index` (ИНДЕКС ТЕКУЩЕГО элемента),

Ваша ФУНКЦИЯ `map` должна ВОЗВРАЩАТЬ(return) НОВЫЙ МАССИВ, где КАЖДЫЙ элемент является результатом ВЫЗОВА ФУНКЦИИ `callback`
на КАЖДОМ элементе ИСХОДНОГО МАССИВА.
*/

// Пример использования вашей функции:
const numbers = [1, 2, 3, 4, 5] // array(МАССИВ)

const map = (array, callback) => {
  const newArray = [] // Создаём НОВЫЙ пустой МАССИВ

  for (let i = 0; i < array.length; i++) { // Цикл for для ПЕРЕБОРА МАССИВА(array)
    const element = array[i];
    // ВЫЗЫВАЕМ callback и ПОЛУЧАЕМ результат ПРЕОБРАЗОВАНИЯ
    const transformedElement = callback(element, i); // callback(array[i], i) 
    // ДОБАВЛЯЕМ результат ВСЕГДА
    newArray.push(transformedElement) // callback(array[i], i) ПУШИМ в Массив значение Числа и Индекс Числа(callback(1, 0))
  } // Ждём завершения Цикла
  return newArray
}

const doubledNumbers = map(numbers, (element, index) => { // map это Стрелочная Функция, callback тоже СФ, но внутри с Параметрами(element, index)
  return element * 2 // array[i] * 2 —> 1 * 2 = 2 и т.д.
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
