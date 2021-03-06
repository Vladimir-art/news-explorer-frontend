## Дипломный проект

Привет) Меня зовут Владимир и я выпускник Яндекс.Практикума.  
Представляю свой дипломный проект по поиску интересных новостей.  

### *Функциональность*

Сайт создан с помощью пакета **Create React App (CRA)**.  
Взаимодейтсвует с двумя API: 
- [NewsAPI](https://newsapi.org/)
- [Собственным API](https://illus.students.nomoreparties.space)  

Стек технологий, используемых в собственном API я описал в его репозитории.  
Здесь остановлюсь на стеке со стороны frontend.

#### *Верстка:*

- для каждого компонента создан свой файл, в котором находится js-файл и css-файл.  
- для вспомогательных функций, а также для запросов к API — директория utils/, для изображений — images/, а для кода или файлов сторонних разработчиков, например, шрифтов — vendor/  
- верстка портирована в **JSX**  
- использованы **семантические теги**  
- сайт **адаптирован** под разные разрешения экрана, он не ломается (минимальная ширина 320px)  
- для построения сеток использованы **flexbox и grid layout**
- созданы модальные окна для регистрации и авторизации пользователя  
- настроены роуты для перехода на страницу с сохраненными статьями ```/saved-news```
- элементы при наведении имеют состояние *hover и focus*, использованы возможности **pseudo классов(nth-child, last-child и т.д.)**

#### *Функциональность на «React» и JS:*

В проекте активно используются **React Hooks, такие как useState, useEffect**,  
установлена библиотека **react-router-dom**, сайт придерживается концепции **SPA**

- сделаны асинхронные **GET- и POST-запросы к API**
- роут ```/saved-news``` защищен авторизацией;  
- для хранения данных о пользователе использована **глобальная стейт-переменная currentUser**, созданная с помощью createContext;  
- в компонент App внедрен контекст через CurrentUserContext.Provider;  
- данные о пользователе и карточках хранятся в **localStorage**;  
- **ошибки от API обработаны**, и пользователь видит это сообщение;  
- настроен **прелоудер** так, что он крутился, пока от сервера идёт ответ;  
- кликом по ссылке внизу карточки переводится на статью сайта;
- после успешной авторизации можно перейти на страницу с сохраненными статьями, где динамически записывается имя текущего пользователя и количество статей; 
- статьи расположены в порядке убывания популярности. Первыми идут те ключевые слова, по которым сохранено наибольшее количество статей.

Парочка скринов работы сайта (до авторизации и после во вкладке сохраненные статьи)  

*до авторизации:*  

![до авторизации](https://raw.githubusercontent.com/Vladimir-art/news-explorer-frontend/main/src/images/without.png)  

*после авторизации, вкладка Сохраненные статьи*  

![вкладка сохраненные статьи](https://raw.githubusercontent.com/Vladimir-art/news-explorer-frontend/main/src/images/with.png)

#### *Что сделать в будущем:*
- откорректировать работу флажков для отображения активного (синего) состояния
- разместить фронтенд и бекенд на одном домене

#### *Как со мной связаться*
Почта ```vl.ermolaevv@yandex.ru``` Владимир Ермолаев   
Telegram ```@artVladimir```  
Спасибо)
