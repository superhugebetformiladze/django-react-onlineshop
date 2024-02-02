# Интернет-магазин-шаблон

Этот проект представляет собой шаблон для создания интернет-магазина с использованием Django и React.

## Описание

Проект включает в себя:

- **Django API**: Бекенд интернет-магазина, реализованный с использованием Django REST framework.
- **React приложение**: Фронтенд интернет-магазина, созданный с использованием Create React App.

## Требования

Перед запуском проекта убедиться, что установлены:

- `Python`
- `Node.js`
- `npm`

## Установка зависимостей для Django:

```bash
cd onlineshop-server
virtualenv venv
venv\Scripts\activate
pip install -r requirements.txt
```
## Установка зависимостей для React:

```bash
cd onlineshop-client
npm install
```

## Запуск

### Запуск Django сервера:

```bash
cd onlineshop-server
venv\Scripts\activate
python manage.py runserver
```

### Запуск React приложения:

```bash
cd onlineshop-client
npm start
```