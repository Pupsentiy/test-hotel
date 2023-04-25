## test-hotel 

# deploy: https://spontaneous-gingersnap-72e79a.netlify.app

1. npm install;
2. npm start

Необходимо реализовать web приложение для поиска отелей, которое имеет
два экрана.
Ссылка на макет:
https://www.figma.com/file/PxI4ycD6GMGSpxOZ2NbFBO/React-Test%2FSimple-Hotel-
Check-(Copy)?node-id=0%3A1

Стек интересующих нас технологий React + Redux-saga + React Router,
остальные библиотеки по желанию.

API, которое можно использовать:
https://support.travelpayouts.com/hc/ru/articles/115000343268-API-
%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-
%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#price

Описание интерфейса:
1. Страница авторизации. Почта и пароль могут быть любыми, но должны
проходить стандартную валидацию.
2. Страница отображения отелей, где можно ввести название города, дату
заселения и количество дней. По результатам этих данных отображаются отели и
информация о них, которые можно добавить в избранное. Избранные отели, в
соответствующем блоке, можно отсортировать по стоимости и количеству звезд.
На странице отображается карусель захардкоженных изображений. Изображение в
карусели можно прокручивать.
Описание логики работы экранов:
3. Если пароль и логин не прошли валидацию, отображать предупреждение о
не правильности введенных данных. Правила валидации:
o Логин - любая почта
Пароль - без кириллицы, минимум 8 символов
4. По клику на кнопку вход и наличии валидных данных происходит
перенаправление на страницу отелей
5. На странице отелей по дефолту стоит город - Москва, день заезда - текущий
(сегодняшний), количество дней - 1
6. Дата пикер может быть дефолтным
o Поиск отелей осуществляется при нажатии на кнопку найти, но при первой
загрузке страницы с дефолтными данными, соответствующие отели должны быть
7. На странице отелей, добавить в избранное можно по нажатию на сердечко,
удалить так же. В блоке избранных отелей также можно выполнить удаление из
избранных
8. При выборе новых данных для поиска, список избранных не должен
сбрасываться. При перезагрузке страницы - может
9. При перезагрузке страницы с отелями авторизация не должна сбрасываться
10. По клику на кнопку “Выход” авторизация сбрасывается и происходит переход
на страницу авторизации
Решение необходимо залить на гитхаб, развернуть на хостинге (heroku, netlify
или любом другом по вашему выбору) и прислать ссылки на репозиторий и
развернутое приложение.