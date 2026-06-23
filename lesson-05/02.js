/*
Напишите ФУНКЦИЮ `updateGallery`, которая будет ОБНОВЛЯТЬ ИНФОРМАЦИЮ о произведениях искусства(КАРТИНАХ) в виртуальной галерее.
ФУНКЦИЯ `updateGallery` должна принимать ТРИ ПАРАМЕТРА(ТРИ АРГУМЕНТА):

- ОБЪЕКТ галереи(gallery {})
- название КАРТИНЫ(КЛЮЧ)(СТРОКА)
- НОВОЕ ЗНАЧЕНИЕ(СТРОКА)

Если(if) КАРТИНА с таким названием УЖЕ ЕСТЬ(ДУБЛЬ👥) в галерее, его значение должно быть ОБНОВЛЕНО(return). 
Если(if esle) КАРТИНЫ НЕТ, оно должно быть ДОБАВЛЕНО в ОБЪЕКТ галерею(ОТ ПРОТИВНОГО).

Пример использования функции:

const gallery = {
  "Mona Lisa": "Leonardo da Vinci",
  "Starry Night": "Vincent van Gogh",
  "The Scream": "Edvard Munch"
}

updateGallery(gallery, "Mona Lisa", "Leonardo da Vinci, 1503-1506")
updateGallery(gallery, "The Persistence of Memory", "Salvador Dali")

console.log(gallery)

Ожидаемый вывод:
{
  "Mona Lisa": "Leonardo da Vinci, 1503-1506",
  "Starry Night": "Vincent van Gogh",
  "The Scream": "Edvard Munch",
  "The Persistence of Memory": "Salvador Dali"
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, picture, artist) {
  for (const key in gallery) {  // ПЕРЕБОР ВСЕХ КЛЮЧЕЙ в Объекте gallery
    if (key === picture) { //  ПРОВЕРЯЕМ: совпадает ли текущий КЛЮЧ с тем, что мы ищем
      gallery[picture] = artist; // ЕСЛИ НАШЛИ(true) — Обновляем значение у этой Картины
      return; // ВЫХОДИМ из Функции(return), дальше код не выполняется
    }
  }
  gallery[picture] = artist; // ХИТРО!🪙 СОЗДАЁМ НОВУЮ КАРТИНУ в Объекте, gallery['The Persistence of Memory'] = 'Salvador Dali'(ДОБАВИЛИ)
}
