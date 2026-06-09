/*
Напишите ФУНКЦИЮ `includesElement`, которая принимает МАССИВ(array) и ЭЛЕМЕНТ(element),
а затем ВОЗВРАЩАЕТ(return) БУЛЕВО ЗНАЧЕНИЕ(true or false), указывающее, СОДЕРЖИТСЯ ЛИ данный ЭЛЕМЕНТ в МАССИВЕ.
Для ПЕРЕБОРА ЭЛЕМЕНТОВ используйте ЦИКЛ(for).

Входные данные:
- `array`: МАССИВ(array), в котором нужно ПРОВЕРИТЬ НАЛИЧИЕ ЭЛЕМЕНТА. МАССИВ(array) может содержать ЛЮБЫЕ ТИПЫ ДАННЫХ.
- `element`: ЭЛЕМЕНТ(element), НАЛИЧИЕ которого нужно ПРОВЕРИТЬ В МАССИВЕ.

Выходные данные(return):
- `true`: Если ЭЛЕМЕНТ(element) НАЙДЕН в МАССИВЕ(array).
- `false`: Если ЭЛЕМЕНТ(element) ОТСУТСТВУЕТ в МАССИВЕ(array).

Пример использования:
includesElement([1, 2, 3], 2)  // должен ВЕРНУТЬ(return) `true`.
*/
let numbersArray = [1, 2, 3];
let randomElement = 2;

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) { // 3 КРУТКИ
        if (array[i] === element) { // array[1] === 2
            return true
        }
    } // ВАЖНО!🐦‍🔥 ЗАВЕРШИТЬ ЦИКЛ И СРАВНИТЬ ВСЕ ДАННЫЕ
    return false // ВЫЗЫВАЕТСЯ ПОСЛЕ ЗАВЕШЕНИЯ ЦИКЛА ЕСЛИ СРАВНЕНИЯ ОТСУТСТВУЮТ
}

test = includesElement(numbersArray, randomElement)
console.log(test);
