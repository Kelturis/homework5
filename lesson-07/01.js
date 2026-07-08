/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю ПЕРЕКЛЮЧАТЬСЯ между созданными нейросетью ИЗОБРАЖЕНИЯМИ веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- ДОБАВЬТЕ➕ функциональность КНОПКАМ(<button>) "prev" и "next", чтобы при их НАЖАТИИ(click) ИЗОБРАЖЕНИЕ в ТЕГЕ `<img>` МЕНЯЛОСЬ на предыдущее или следующее
- Обеспечьте ЦИКЛИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ ИЗОБРАЖЕНИЙ: после последнего изображения следует первое и наоборот.

Адреса ИЗОБРАЖЕНИЙ находятся в МАССИВЕ WEB_TECH_IMAGE
Первоначально ОТОБРАЖАЕТСЯ ПЕРВОЕ ИЗОБРАЖЕНИЕ из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление ИНДЕКСОМ[i] ТЕКУЩЕГО ИЗОБРАЖЕНИЯ — это ключ к успешному ПЕРЕКЛЮЧЕНИЮ ИЗОБРАЖЕНИЙ.
*/

// Получаем Ссылку на элемент ПЕРВОГО Изображения(<img>) по его id
const imageElement = document.getElementById('web-tech-image');

// Получаем КНОПКИ(<button>) по их id
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Массив с адресами Изображений
const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg'
]; // [0],[1],[2]

// Переменная для хранения ТЕКУЩЕГО ИНДЕКСА[i] Изображения, Изначально 0 — ПЕРВОЕ Изображение
let currentIndex = 0;

// Функция для ОБНОВЛЕНИЯ Изображения на странице
function updateImage() {
  // способ ПРЯМОГО ОБРАЩЕНИЯ
  imageElement.setAttribute('src', WEB_TECH_IMAGES[currentIndex]); // imageElement.setAttribute('src', WEB_TECH_IMAGES[0] и т.д.)
} // Меняем src="" внутри Изображения(<img>) на Индекс[i] Массива Изображений, включая САМОЕ ПЕРВОЕ Изображение 

// Функция для ПЕРЕХОДА к следующему Изображению
function showNextImage() {
  // Увеличиваем Индекс[i] Массива на 1
  currentIndex++; // 0++ —> 1
  
  // Проверяем: если  Индекс[i] Массива вышел за пределы Массива(стал РАВЕН длине Массива)
  if (currentIndex === WEB_TECH_IMAGES.length) {
    // Сбрасываем на 0(ПЕРВОЕ Изображение) - циклический переход
    currentIndex = 0; // ОБНУЛЯЕМ Индекс[i] Массива
  }
  
  // ОБНОВЛЯЕМ Изображение на странице
  updateImage();
}

// Функция для перехода к ПРЕДЫДУЩЕМУ Изображению
function showPrevImage() {
  // Уменьшаем индекс на 1
  currentIndex--; // 0--
  
  // Проверяем: если  если  Индекс[i] Массива стал МЕНЬШЕ 0
  if (currentIndex < 0) {
    // ХИТРО!🪙 Устанавливаем на ПОСЛЕДНИЙ Индекс[i] Массива(длина Массива - 1) - циклический переход
    currentIndex = WEB_TECH_IMAGES.length - 1; // Устанавливает ПОСЛЕДНИЙ элемент Массива, currentIndex = WEB_TECH_IMAGES[2];
  }
  
  // ОБНОВЛЯЕМ Изображение на странице
  updateImage();
}

// Навешиваем обработчик события клика на КНОПКУ(<button>) "next"
// При клике вызывается Функция showNextImage
nextButton.addEventListener('click', showNextImage);

// Навешиваем обработчик события клика на кнопку "prev"
// При клике вызывается Функция showPrevImage
prevButton.addEventListener('click', showPrevImage);

// Инициализация: отображаем ПЕРВОЕ Изображение из Массива, при загрузке страницы
updateImage();
