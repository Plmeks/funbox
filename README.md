# Level 2


**Setting up:**
```
  git clone https://github.com/Plmeks/funbox.git
  cd funbox
  npm install
  npm start
```

Also you can check this project on prod by this link:
http://funbox.us.openode.io/

---

# Level 1


>**Q1** 
>Расскажите, чем, на ваш взгляд, отличается хорошее клиентское приложение от
>плохого с точки зрения
> * пользователя;
> * менеджера проекта;
> * дизайнера;
> * верстальщика;
> * серверного программиста.  

*Пользователь*: обращает нимание на интуитивность приложения и удобство использования.  Немаловажная деталь для - малая загрузка UI-интерфейсами + главные функции должны находиться всегда под рукой. Приятный внешний вид приложения - для комфортного нахождения при длительных сессиях. Хороший отклик и общее быстродействие. Наличие поддержки (helpdesk) для некоторых видов приложений также играет немаловажную роль. Ну и просто в приложении должно быть малое количество раздражителей: ненужных баннеров, рекламы и т.д.  
*Для менеджера* важно, чтобы в приложений был реализован и исправно работал весь функционал (по пунктам), оговоренный с заказчиком.  
*Дизайнер*: общая стилистическая концепция приложения сохраняется во всех его частях. Еще лучше, когда с этим присутствует и фирменный стиль. Нагрузка в визуале должна быть распределена равномерно - соблюдение баланса. Основные стилистические цвета совместимы друг с другом. Хороший тон, когда проект имеет созданные макеты: invision, photoshop.  
*Серверный программист*: приложение имеет заранее хорошо продуманные схемы данных для потенциальной масштабируемости. Проект приложения имеет логическую и хорошо-распределенную архитектуру (паттерны проектирования). Важно чтобы бизнес-логика также была распределена. Автоматизированы процессы сборки проекта на продкашн. Все части приложения, где испольуется работа с данными, работают без задержек.  
*Верстальщик*: приложение должно быть адаптивным, каркас сайта продуман, кроссбраузерность присутствует, блочная верстка, все медиа-файлы оптимизированы - html страница прогружается быстро. Заложены хотя бы базовые метатеги для дальнейшего seo.  




>**Q2** 
> Опишите основные особенности разработки крупных многостраничных сайтов,
> функциональность которых может меняться в процессе реализации и поддержки.
> Расскажите о своем опыте работы над подобными сайтами: какие подходы,
> инструменты и технологии вы применяли на практике, с какими проблемами
> сталкивались и как их решали.  

Существуют основные стадии разработки. На каждой из них свои тонкости и подстадии.
Расскажу в двух словах о своем опыте вне команды, когдаво всех сферах хоть сколько-нибудь, да было участие хоть какое-либо :))  
Я всегда начинал написание какого-либо сайта с выбора необходимых интсрументов и основных технологий. После шло создание архитектуры всего проекта: выбор паттернов, всякая различная автоматизация, dev-инструменты и прочее (фундамент), чтобы с проектом было приятно работать и масштабировать его части.  
Затем я брал листик с бумагой и рисовал на нем как будут выглядеть самые основные страницы, элементы,интерфейсы сайта. После переносил это в какой-нибудь скетчпад.
Верстал эти наброски со скетчпада, на ходу экспериментировал с дизайном. Элементы, которые удавались сразу, переносил в photoshop-макеты (последнее время юзаю invision).  
Когда сайт становился более-менее на что-то похож, начиналась работа с базами данных и api.
Проектировались таблицы (опять же, вначале на листике бумаги), связи, с дальнейшим потенциалом для масштабирования. После связь всего этого с сервером и написание rest-api.  
Фронтенд часть также довольно масштабная. Путем проб и ошибок, подбирались оптимальные плагины, библиотеки, писался основной функционал. Связывалась часть серверная с фронтендом. Писались юнит-тесты. Проводилась оптимизация, адаптивная верстка (часто получается в самом конце).  
Во фронтенде еще много чем можно заняться, но после происходило заполнение информацией, нормальное создание семантического ядра, подбор соответственно мета-тегов (обхемная рбота с head). Работа с поисковиками: добавление на индексацию, проверка от гугла на оптимизацию, сжатие медиа-файлов и затем seo-раскрутка чаще всего ссылками. Какое-то время мелкие фиксы и поддержка.  
Были проекты. И на фирме и самостоятельные. На фирме (аутсорсинг) было множество проектов. Но там практически всегда лишь одна ветка разработки шла - в основном, фронтенд.
Из самостоятельных - в основном писал визитки, ну и парочку интернет-магазинов.  
Есть собственный, который поддерживаю и веб-сайт и сам бизнес - прокат товаров в основном техники цифровой.  
Веб-сайт: https://prokatxbox.by/  
Из визиток последнее что писал - http://yaa.by/. Сайт аутсорсинговой бухгалтерии.  
Все описал очень вкратце. Вопрос очень подходит для интервью по скайпу :)  




> **Q3**
> При разработке интерфейсов с использованием компонентной архитектуры часто
> используются термины Presentational Сomponents и Сontainer Сomponents. Что
> означают данные термины? Зачем нужно такое разделение, какие у него есть
> плюсы и минусы?   

Это так называемые умные и тупые компоненты. Очень актуально когда используешь react + redux.
Суть в том, что тупые компоненты внутри не имеют значительного функционала, а используются лишь для простой отрисовке на странице и для частого переиспользования либо просто, либо умными компонентами. 
Внутри presentional-компонентов практически нет никакого функционала - ни цикла данных, ни даже каких-либо сложных взаимодействий с dom. Может быть самый простой, потипу косметического.
Часто еще тупые компоненты не используют другие компоненты, но это не есть правило.
Т.е. presentional components - просто говоря - это как что-то должно выглядеть.  
Умные компоненты - это то, как что-то должно работать. В них есть функционал уже в полной мере. Здесь уже и функционал, и работа с данными, и подключение к store. Кстати, это практически 100% критерий Container-компонентов, если в компоненте используется redux-подключение connect()();
Также умные компоненты могут использовать тупые, оборачивая их. Например, есть простой presentional-элемент Dropdown. А нам нужно чтобы в этом эелементе например элементы списка стали перетаскиваемыми, при чем чтобы этот дропдаун был еще связан с динамическим хранилищем данных.
Тогда мы создаем контейнер DropdownDng и просто оборачиваем наш presentional-компонент: 
export connect()(Dropdown);  




> **Q4**
> Как устроено наследование в JS? Расскажите о своем опыте реализации JSнаследования
> без использования фреймворков.   

В JS осуществляется прототипное наследование. Через ссылку __proto__, либо через Object.create(Class.prototype).
В EcmaSript же теперь есть удобное слово extends, после которого можно поставить любую сущность, абы был конструктор с prototype:
class List extends React.Component {}

В reacte практически всегда использую наследование :) Очень давно реализовывал чистое js-наследование в создании paintera на canvas. Там в канвасе очень часто реиспользовались компоненты
рисования с добавлением небольших примочек. Там-то и наследовал компоненты базовые для последующего их роасширения.




> **Q5**
> Какие библиотеки можно использовать для написания тестов end-to-end во
> фронтенде? Расскажите о своем опыте тестирования веб-приложений.   

* Jasmine для jquery-проектов
* Karma
* элемент тестирования пропсов prop-types в react
* уже встроенный в create-react-app jest
* enzyme  

Постоянно проверяю пропсы в реакт-проекте. Пару раз пользовался jest + enzyme в учебных целях  




> **Q6**
> Вам нужно реализовать форму для отправки данных на сервер, состоящую из
> нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в
> которой не показано, как форма должна работать в динамике. Подробного
> описания, как должны вести себя различные поля в зависимости от действий
> пользователя, в требованиях к проекту нет. Ваши действия?   


Уточню у заказчика недостающие требования, конечно же))  
После получения соответствующих инструкций, свяжу поля формы в соответствии с требованиями.  
В случае если заказчик будет затрудняться с требованиями, поспешу предложить ему оптимальные варианты + на ближайшем митинге обсудим с командой выбранный путь реализации.
Ну и после того как все необходимые данные будут на руках, реализую задачу.  
 



> **Q7**
> Расскажите, какие инструменты помогают вам экономить время в процессе
> написания, проверки и отладки кода.   

* react-расширение в интспекторе google-chrome
* множество плагинов в atom-редакторе: emmet, beautifier, дебаггеры на любой вкус и цвет.
* filezilla
* git
* jira
* console.log() :))  




> **Q8**
> Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
> несколько конкретных примеров (сайты, блоги и так далее).
> Какие ещё области знаний, кроме тех, что непосредственно относятся к работе,
> вам интересны?   

Часто читаю [medium](http://medium.com) - много отличных статей по реакту с практическими указанимям.  

[learn.javascript](https://learn.javascript.ru) - one love  
[stackoverflow](https://stackoverflow.com) - по мелочам  
[youtube](https://youtube.com) - различные уроки и туториалы  
документация к изучаемым технологиям    
множество иностранных блогов по языкам - их очень много и в основном именные.  


> **Q9**
> Расскажите нам немного о себе и предоставьте несколько ссылок на последние
> работы, выполненные вами.   




Программирую, катаюсь на лонгборде, увлекаюсь адвайтой и самоисследованием.  

**Проекты:**

*прокат:
[Прокат](https://prokatxbox.by/)

*последний сайт-визитка:
[Аутсорсинговая бухгалтерия](http://yaa.by)

* внутренние проекты на github  
* проекты на фирме, из доступных в интернете:
[Rvision (корпоративный)]rvision.exadel.com  
[Макет сайта по митапам](https://meetup.exadel.by)  

Спасибо за внимание! :)  