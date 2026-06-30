/*
Напишите свою версию МЕТОДА `filter`.
Ваша задача — создать ФУНКЦИЮ `filter`, которая принимает ДВА ПАРАМЕТРА(ДВА АРГУМЕНТА):

- `array` (МАССИВ, над которым выполняется Операция),
- `callback` (ФУНКЦИЯ, которая ВЫЗЫВАЕТСЯ ДЛЯ КАЖДОГО элемента МАССИВА(array.length)).

ФУНКЦИЯ `callback` должна принимать ДВА ПАРАМЕТРА(ДВА АРГУМЕНТА):

- `element` (ТЕКУЩИЙ элемент МАССИВА)
- `index` (ИНДЕКС([i]) ТЕКУЩЕГО элемента)

ФУНКЦИЯ `filter` должна ВОЗВРАЩАТЬ(return) НОВЫЙ МАССИВ(new array[]), содержащий ТОЛЬКО те элементы `array`(МАССИВА),
для которых `callback`(ФУНКЦИЯ) ВОЗВРАЩАЕТ(return) `true`.
*/

//  Пример использования:
const numbers = [1, 2, 3, 4, 5]  // array(МАССИВ)

const filter = (array, callback) => {
  const newArray = [] // Создаём НОВЫЙ пустой МАССИВ

  for (let i = 0; i < array.length; i++) { // Цикл for для ПЕРЕБОРА МАССИВА(array)
    const element = array[i];
    // ВАЖНО!🐦‍🔥 проверяем результат callback
    if (callback(element, i)) { // Проверка callback(array[i], i)
      newArray.push(element); // ПУШИМ element в НОВЫЙ Массив, после Проверки
    }
  } // Ждём завершения Цикла
  return newArray
}

const oddNumbers = filter(numbers, (element, index) => { // Принимает array(МАССИВ) и callback(Два Параметра Функции)
  return element % 2 !== 0 // true если НЕЧЁТНЫЕ ЧИСЛА
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
