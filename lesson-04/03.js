/*
Функцию `findCommonElements`, которая Принимает ДВА МАССИВА(array1, array2) и ВОЗВРАЩАЕТ(return) МАССИВ(newArray),
содержащий ОБЩИЕ ЭЛЕМЕНТЫ из ОБОИХ МАССИВОВ.

Входные данные:

- `array1`: Первый МАССИВ, содержащий любые типы данных.
- `array2`: Второй МАССИВ, содержащий любые типы данных.

Выходные данные:

- МАССИВ(newArray), содержащий элементы, которые присутствуют в ОБОИХ исходных МАССИВОВАХ.
- Если(if) ОБЩИХ ЭЛЕМЕНТОВ НЕТ, должен вернуться ПУСТОЙ МАССИВ([])

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать Функцию `includesElement`, которую мы написали ранее.
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// Функция СВЕРКИ
function includesElement(array, element) { // ПРИНИМАЕТ МАССИВ и ЗНАЧЕНИЕ(ЧИСЛО)
    for (let i = 0; i < array.length; i++) { // 3 КРУТКИ
        if (array[i] === element) { // array[1] === 2
            return true
        }
    } // ВАЖНО!🐦‍🔥 ЗАВЕРШИТЬ ЦИКЛ И СРАВНИТЬ ВСЕ ДАННЫЕ
    return false // ВЫЗЫВАЕТСЯ ПОСЛЕ ЗАВЕШЕНИЯ ЦИКЛА ЕСЛИ СРАВНЕНИЯ ОТСУТСТВУЮТ
}

let arrayFirst = [1, 2, 3];
let arraySecond = [2, 3, 4];

function findCommonElements(array1, array2) {
    let newArray = []; // Пустой Массив для ИТОГОВОГО РЕЗУЛЬТАТА
    
    for (let i = 0; i < array1.length; i++) { // Проходим по всем элементам ПЕРВОГО Массива
        let currentElement = array1[i]; // Индексы Первого Массива
        // Используем готовую Функцию includesElement
        if (includesElement(array2, currentElement)) { // если элемент array1[i] есть В ЦЕЛОМ Массиве array2
            newArray.push(currentElement); // ХИТРО!🪙 Если элемент есть в ОБОИХ МАССИВАХ добавляем его в НОВЫЙ МАССИВ
        }
    }
    return newArray; // ВОЗВРАЩАЕМ ИТОГОВЫЙ НОВЫЙ МАССИВ ПОСЛЕ ЦИКЛА for
}

console.log(findCommonElements(arrayFirst, arraySecond));
