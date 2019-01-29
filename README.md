# Сервис хэджирования

## Стек

- Node.js 8.x и новее
- Babel-cli, pm2
- Redis

## Команды

**npm:**

- `npm run proto.generate` - генерация схемы api на js на основе `vendor/webapi/webapi.proto`.
- `npm run server` - старт сервера.
- `npm run start` - старт сервера в режиме разработчика.

**pm2:**

- `pm2 start ecosystem.config.js` - старт сервера.

## Структура проекта

### Компоненты

- `app/brokers` - брокеры (менеджеры) сервисов.
- `app/constants` - общие константы.
- `app/lib` - классы.
- `app/services` - сервисы moleculer, подгружаемые автоматически брокером `mainBroker`.
- `app/utils` - вспомогательные функции, в `index.js` объект для последующего импорта собирается автоматически по всем соседним экспортам.
- `config` - yml-конфигурация, задающая поведение сервисов.
- `spec` - тесты.
- `vendor` - зависимости за рамками проекта.

### Конфигурация

Конфигурация проекта находится:

- `config/application.yml` - общая конфигурация для всех окружений.
- `config/env/{NODE_ENV}.yml` - конфигурация уникальная для `NODE_ENV`, например, `stage.yml` при `NODE_ENV == stage`.

## Деплой

- Stage: `pm2 deploy stage`.
- Production: `pm2 deploy production`.

## Сервисы

Информация о сервисах доступна в swagger по корневому адресу хэдж-сервиса (например, [http://localhost:1919](http://localhost:1919)).

## Документы

- [Документация проекта](https://docs.google.com/document/d/1qCn2Vy-Pk72j09tA33Zbpao8j3_SDXFrhrde7Qi6HFw/)
- [Web API Documentation](http://partners.cqg.com/api-resources/web-api/documentation)
- [Continuum Connect Conformance Test](http://help.cqg.com/continuum/#!Documents/continuumconnectconformancetest.htm)

## Полезные инструменты

- [Онлайн-консоль CQG](https://demo.cqgtrader.com/prototester/index.html#/env/continuum-connect)
- [protobuf.js](http://dcode.io/protobuf.js/)
- [Moleculer](https://moleculer.services)
