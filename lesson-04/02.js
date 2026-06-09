/*
Напишите Функцию `findUniqueElements`, которая Принимает МАССИВ(array) и ВОЗВРАЩАЕТ(return) НОВЫЙ МАССИВ(newArray),
содержащий ТОЛЬКО УНИКАЛЬНЫЕ ЭЛЕМЕНТЫ(БЕЗ ДУБЛИКАТОВ) из ИСХОДНОГО МАССИВА(array).

**Входные данные:**

- **`array`**: МАССИВ, который может содержать повторяющиеся элементы(ДУБЛИКАТЫ).

**Выходные данные:**

- МАССИВ(newArray), содержащий ТОЛЬКО УНИКАЛЬНЫЕ ЭЛЕМЕНТЫ(БЕЗ ДУБЛИКАТОВ) из ИСХОДНОГО МАССИВА(array).

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать Функцию `includesElement`, которую мы написали ранее.
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// Функция СВЕРКИ
function includesElement(array, element) { // ПРИНИМАЕТ МАССИВ и ЗНАЧЕНИЕ(ЧИСЛО)
    for (let i = 0; i < array.length; i++) { // 6 КРУТОК
        if (array[i] === element) { // ВЕРНЁТ ВСЕ true
            return true
        }
    } // ВАЖНО!🐦‍🔥 ЗАВЕРШИТЬ ЦИКЛ И СРАВНИТЬ ВСЕ ДАННЫЕ
    return false // ВЫЗЫВАЕТСЯ ПОСЛЕ ЗАВЕШЕНИЯ ЦИКЛА ЕСЛИ СРАВНЕНИЯ ОТСУТСТВУЮТ
}

let numbersArray = [1, 2, 3, 2, 1, 4]; // 6 ЭЛЕМЕНТОВ 2 ДУБЛЯ(ЛИШНИХ)

function findUniqueElements(array) { // Принимает Массив Чисел
    let newArray = []; // Пустой ИТОГОВЫЙ Массив

    for (let i = 0; i < array.length; i++) { // 6 КРУТОК
        let currentElement = array[i]; // Перебираем ВСЕ Индексы Массива

        // Используем готовую Функцию includesElement
        if (!includesElement(newArray, currentElement)) { // ВАЖНО!🐦‍🔥 проверяем, есть ли currentElement УЖЕ в newArray
            newArray.push(currentElement) // Если НЕТ(знак ! означает "не"), то ДОБАВЛЯЕМ
        } // А ЕСЛИ УЖЕ ЕСТЬ, ТО ИГНОРИРУЕМ
    }
    return newArray
}

console.log(findUniqueElements(numbersArray));
