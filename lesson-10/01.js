/*
  Цель задания: Разработать функционал для удаления фильма из списка с использованием паттерна MVC. 
  После удаления фильма, необходимо отобразить сообщение "Фильм успешно удалён!" в message-box

  При возникновении сложностей можете ознакомиться с пошаговым планом реализации ниже, но лучше попробовать сначала самостоятельно 🧙‍♂️

Пошаговый план реализации:
1. Реализовать метод deleteMovie в объекте model:
  - метод должен принимать id фильма, который необходимо удалить
  - метод должен удалить фильм из массива movies
  - метод должен обновить отображение фильмов на странице

2. Добавить обработчик события для удаления фильмов:
  - в метода view.init добавить обработчик события на список фильмов
  - используя делегирование событий, обработать клик на кнопке удаления фильма
  - при клике на кнопку удаления, получить id фильма из родительского элемента и передать его в метод deleteMovie объекта controller

3. Реализовать метод deleteMovie в объекте controller:
  - метод должен принимать id фильма
  - метод должен передать id фильма в метод deleteMovie объекта model
  - метод должен отобразить сообщение "Фильм успешно удалён!" в message-box
*/

const model = {
  movies: [],
  addMovie(title, description) {
    const id = Math.random()
    const newMovie = { id, title, description }
    this.movies.push(newMovie)
    view.renderMovies(this.movies)
  },
  // Метод для УДАЛЕНИЯ фильма по id
  deleteMovie(movieId) {                    // принимает id фильма
    // filter создает НОВЫЙ массив, где остаются только те фильмы,
    // у которых id НЕ РАВЕН movieId (который мы хотим удалить)
    this.movies = this.movies.filter((movie) => movie.id !== movieId)
    // Обновляем отображение списка на странице
    view.renderMovies(this.movies)
  }
}

const view = {
  init() {
    this.renderMovies(model.movies)

    const form = document.querySelector('.form')
    const inputTitle = document.querySelector('.input-title')
    const inputDescription = document.querySelector('.input-description')

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      const title = inputTitle.value
      const description = inputDescription.value
      controller.addMovie(title, description)

      inputTitle.value = ''
      inputDescription.value = ''
    })

    // НАВЕШИВАЕМ обработчик на СПИСОК (<ul class="list">)
    const list = document.querySelector('.list')
    
    list.addEventListener('click', function (event) {
      // ПРОВЕРЯЕМ: клик был по кнопке с классом 'delete-button'?
      if (event.target.classList.contains('delete-button')) {
        // Получаем id из РОДИТЕЛЬСКОГО элемента <li>
        // parentElement - это <li>, у которого есть id фильма
        const movieId = event.target.parentElement.id
        // Передаем id в контроллер
        controller.deleteMovie(movieId)
      }
    })
  },
  renderMovies(movies) {
    const list = document.querySelector('.list')
    let moviesHTML = ''

    for (const movie of movies) {
      moviesHTML += `
        <li id="${movie.id}" class="movie">
          <b class="movie-title">${movie.title}</b>
          <p class="movie-description">${movie.description}</p>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `
    }

    list.innerHTML = moviesHTML
  },
  displayMessage(message, isError = false) {
    const messageBox = document.querySelector('.message-box')
    messageBox.textContent = message
    if (isError) {
      messageBox.classList.remove('success')
      messageBox.classList.add('error')
    } else {
      messageBox.classList.remove('error')
      messageBox.classList.add('success')
    }
  },
}

const controller = {
  addMovie(title, description) {
    if (title.trim() !== '' && description.trim() !== '') {
      model.addMovie(title, description)
      view.displayMessage('Фильм добавлен успешно!')
    } else {
      view.displayMessage('Заполните все поля!', true)
    }
  },
  // Метод для удаления фильма (связывает View и Model)
  deleteMovie(movieId) {                    // принимает id фильма
    // 1. Передаем id в модель для УДАЛЕНИЯ
    model.deleteMovie(movieId)
    // 2. Показываем сообщение об успешном удалении
    view.displayMessage('Фильм успешно удалён!')
  }
}

function init() {
  view.init()
}

document.addEventListener('DOMContentLoaded', init)
