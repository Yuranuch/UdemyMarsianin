/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();


let removeADV = () => {
    let advertising = document.querySelectorAll('.promo__adv img');
    advertising.forEach(function(i){
        i.remove();
    });
}
removeADV();

let changeName = () => {
    let elementName = document.querySelector('.promo__genre');
    elementName.innerHTML = 'ДРАМА';
}
changeName()

let changeBg = () => {
    let elementName = document.querySelector('.promo__bg');
    elementName.style.backgroundImage = 'url(img/bg.jpg)';
};
changeBg();

let changeList = () => {
    let listElements = document.querySelectorAll('.promo__interactive-list li');
    console.log(listElements);
    listElements.forEach(function (i, index) {
         i.innerHTML = `${index + 1} - ${movieDB.movies[index]}`;
    });

}
changeList();


