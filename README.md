# project_dm-tech

**Ссылка для просмотра проекта:** ***https://project-dm-tech.vercel.app/***
<br><br><br>

**Для запуска проекта (на своем устройстве) выполнить действия в терминале:**

&nbsp; __1.__ Клонировать репозиторий на свой ПК: 
```bash
git clone https://github.com/Ivan-ISS/project_dm-tech.git
```
&nbsp; __2.__ Поставить пакеты в корне проекта:
```bash
npm install
```
&nbsp; __3.__ Для запуска приложения в режиме development выполнить:
```bash
npm run dev
```

&nbsp; __4.__ Для запуска приложения в режиме production необходимо собрать проект:
```bash
npm run build
```
&nbsp; __5.__ После сборки выполнить:
```bash
npx serve -s build
```

---

## Цель:
***Создадать приложение для интернет-магазина игрушек от компании DM Tech***

## Описание проекта
__Проект от компании *"DM Tech"*__ - это интернет-магазин игрушек с возможностью поиска товаров, их добавления в корзину, оформления заказов и их отображения.<br>

__Клиентская часть сервиса проекта__ состоит из:
- __страницы с листингом товаров__,
- __страницы товара с подробным описанием__,
- __страницы заказов пользователя__,
- __виджета корзины__,
- __виджета заказа__.

**В системе нет регистрации и авторизации, пользователь идентифицируется по сессии.**

## __Проект *Интернет-магазин игрушек*__ - Функционал приложения:<br><br>

&nbsp; :heavy_check_mark: __Шапка сайта__
- Логотип;
- Навигация - для перехода по страницам;
- Корзина - для открытия/закрытия виджета корзины.

<br>

&nbsp; :heavy_check_mark: __Страница с листингом товаров__ содержит список товаров. Он вклюает карточки товаров с картинкой, названием, рейтингом и ценой.
- Переключатель *«Вкл/выкл пагинацию»* - меняет способ постраничного вывода с бесконечного скролла на пагинацию;
- Панель фильтров - для настройки фильтров, критериев поиска товаров и их сортировки:
    - поиск по названию или описанию;
    - фильтры по интервалу цены, рейтингу, категории;
    - сортировка по названию, цене, рейтингу, категории.
- Карточки товаров - при клике на карточку из списка открывается страница с расширенной информацией о выбранном товара.

<br>

&nbsp; :heavy_check_mark: __Страница с побдробным описанием товара__ содержит расширенную информацию о товаре.
- Кнопка *«Назад»* - для возврата на предыдущую страницу;
- Кнопка *Добавить в корзину* - для добавления товара в корзину пользователя;
- Счетчик *+/-* - появляется после добавления товара в корзину для изменения количества выбранного товара;
- Кнопка *Оформить заказ* - при клике корзина очищается и появляется уведомление о том, что заказ создан;
- При переходе на страницу несуществующего товара появляется 404 с возможностью уйти на страницу списка.

<br>

&nbsp; :heavy_check_mark: __Страница заказов__ содержит постраничную информацию обо всех заказах поьзователя.
- Карточки заказов - при клике на карточку открывается виджет с этим заказом, где показан состав заказа и есть возможность перейти на страницу товара при клике на товар;
- Кнопка *Добавить в корзину* - для повторения заказа, при её нажатии корзина автоматически заполняется позициями из выбранного заказа.

<br>

&nbsp; :heavy_check_mark: __Виджет корзианы__ содержит постраничную информацию обо всех заказах пользователя.
- Виджет можно раскрыть на любой странице при клике на иконку корзины в шапке сайта;
- На странице товара есть возможность добавлять в корзину;
- При добавлении товаров в корзину сумма заказа в ней автоматически пересчитывается;
- Кнопка *Оформить заказ* - при клике корзина очищается и появляется уведомление о том, что заказ создан;
- Корзина создаётся автоматически при посещении пользователем сайта и определяется по сессии пользователя;
- На состав корзины выполняется клиентская валидация — нельзя заказывать больше 10 единиц каждого товара и общая сумма заказа не может превышать 30 000 руб.

<br>

&nbsp; :heavy_check_mark: __Виджет заказа__ содержит постраничную информацию обо всех заказах поьзователя.
- Виджет можно раскрыть при клике на карточку заказа на странице заказов;
- Виджет отображает состав заказа и дает возможность перейти на страницу с подробным описанием товара при клике на него;
- Кнопка *Добавить в корзину* - для повторения заказа, при её нажатии корзина автоматически заполняется позициями из выбранного заказа.

## Технологии:
<img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" alt="TS"/>&nbsp;
<img src="https://img.shields.io/badge/-JavaScript-f0db4f?logo=javaScript&logoColor=black" alt="JS"/>&nbsp;
<img src="https://img.shields.io/badge/-REACT-000000?logo=React&logoColor=#00fff" alt="REACT"/>&nbsp;
<img src="https://img.shields.io/badge/-REDUX-8a2eb2?logo=Redux&logoColor=#00fff" alt="REDUX"/>&nbsp;
<img src="https://img.shields.io/badge/-ReactRouter-85332c?logo=Reactrouter&logoColor=black" alt="REACT-ROUTER"/>&nbsp;
<img src="https://img.shields.io/badge/HTML5-red?logo=html5&logoColor=white" alt="HTML5"/>&nbsp;
<img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3"/>&nbsp;
<img src="https://img.shields.io/badge/-SASS-DB7093?logo=sass&logoColor=white" alt="SASS"/>&nbsp;

## В проекте реализованы технические требования:
&nbsp; :heavy_check_mark: Клиентская часть написана с помощью React, Redux Toolkit и TypeScript<br>
&nbsp; :heavy_check_mark: Подключен линтинг кода (ESLint)<br>
&nbsp; :heavy_check_mark: Настроен линтинг кода автоматическим при коммите<br>
&nbsp; :heavy_check_mark: Для запросов к API используются методы createAsyncThunk<br>
&nbsp; :heavy_check_mark: Вёрстка соответствует макету<br>
&nbsp; :heavy_check_mark: Приложение корректно отображается на различных разрешениях<br>
&nbsp; :heavy_check_mark: Отзывчивая и адаптивная верстка (десктоп, планшет и мобильные устройства)<br>
&nbsp; :heavy_check_mark: На интерактивных элементах (ссылках, кнопках), при наведении курсора появляется cursor: pointer<br>
&nbsp; :heavy_check_mark: Использование осмысленных имен для всех переменных, классов и функций<br>
&nbsp; :heavy_check_mark: Соблюдение правил написания кода – кодстайла (подключен Prettier)<br>

## Дополнительно реализованные фичи:
- реализован бесконечный скролл;
- добавлен переключатель для смены бесконечного скролла на пагинацию;
- при переходе на несуществующую страницу или на страницу несуществующего товара - отображается 404;
- при возврате на список товаров сохраняется скролл и параметры страницы;
- появление счетчика +/- на странице товара после добавления его в корзину;
- добавлена валидация на состав корзины - нельзя заказывать больше 10 ед каждого товара и общая сумма заказа не может превышать 30 000 руб (иначе кнопка "Оформить заказ" будет неактивна);
- добавлена кнопка для повторения заказа, при её нажатии корзина автоматически заполняется позициями из выбранного заказа;
- на странице листинга товаров добавлена форма для поиска, фильтрации и сортировки товаров;
- добавлена валидация на форму поиска - при пустых полях кнопка сброса фильтров неактивна.

---

**Для запуска проекта (на своем устройстве) выполнить действия в терминале:**

&nbsp; __1.__ Клонировать репозиторий на свой ПК: 
```bash
git clone https://github.com/Ivan-ISS/project_dm-tech.git
```
&nbsp; __2.__ Поставить пакеты в корне проекта:
```bash
npm install
```
&nbsp; __3.__ Для запуска приложения в режиме development выполнить:
```bash
npm run dev
```

&nbsp; __4.__ Для запуска приложения в режиме production необходимо собрать проект:
```bash
npm run build
```
&nbsp; __5.__ После сборки выполнить:
```bash
npx serve -s dist
```

**Ссылка для просмотра проекта:** ***https://project-dm-tech.vercel.app/***