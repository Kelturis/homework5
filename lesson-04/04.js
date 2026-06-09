/*
Напишите Функцию `doubleEachCharacter`, которая Принимает СТРОКУ(string) и ВОЗВРАЩАЕТ(return) НОВУЮ СТРОКУ(newString),
где каждый символ из ИСХОДНОЙ СТРОКИ ПОВТОРЯЕТСЯ ДВАЖДЫ(ДУБЛИРУЕТСЯ).

Входные данные:

- **`str`**: СТРОКА, символы которой нужно УДВОИТЬ(ДУБЛИРОВАТЬ).

Выходные данные:

- НОВАЯ СТРОКА(newString) с каждым символом, ПОВТОРЁННЫМ ДВАЖДЫ(ДУБЛИРОВАННЫМ).

Пример работы Функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
let string = "Hello";

function doubleEachCharacter(str) {
    let newString = ""; // Новая Пустая Строка для сбора результата

    for (let i = 0; i < str.length; i++) { // 5 КРУТОК
        let currentLetter = str[i]; // Хитро!🪙 Как бы БЕРЁМ ДАННЫЕ СТРОКИ И ПРЕОБРАЗУЕМ ИХ В ИНДЕКСЫ МАССИВА

        newString = newString + currentLetter + currentLetter; // Хитро!🪙 КОНКАНТЕНАЦИЯ "" + str[i] + str[i]
    }
    return newString
}

let result = doubleEachCharacter(string)
console.log(result);
