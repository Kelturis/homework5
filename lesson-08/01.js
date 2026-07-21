/*
  НУЖНО написать Функцию(capitalizeWords), которая ПРИНИМАЕТ Строку(Аргумент) и делает так, чтобы КАЖДОЕ слово НАЧИНАЛОСЬ с ЗАГЛАВНОЙ Буквы.
  (string.toUpperCase();)
  Например, если ПЕРЕДАТЬ строку "hello world from javascript", Функция ДОЛЖНА ВЕРНУТЬ "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощи Цикла(for). Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать МЕТОД(split) Строк и МЕТОД(join) Массива.
*/

function capitalizeWords(string) {
  // РАЗБИВАЕМ Строку на Массив слов
  let words = string.split(' '); // ["hello", "world", "from", "javascript"]
  
  // Работаем с КАЖДЫМ словом
  let result = []; // СТАРТОВЫЙ🚩 ПУСТОЙ⬜ Массив

  for (let i = 0; i < words.length; i++) { // Цикл(for)
    let word = words[i];
    // Делаем ПЕРВУЮ Букву ЗАГЛАВНОЙ
    let capitalized = word[0].toUpperCase() + word.slice(1); // word.slice(1) ВКЛЮЧИТЕЛЬНО

    result.push(capitalized); // ПУШИМ ТРИ результата в отредактированный Массив
  }
  
  // ПРЕОБРАЗУЕМ Массив обратно в Строку
  return result.join(' ');  // "Hello World From JavaScript"
}

console.log(capitalizeWords("hello world from javascript"));
