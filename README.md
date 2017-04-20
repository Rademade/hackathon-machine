## Hackathon Machine

# Docker

- Установить Docker
- Добавить себя в группу `gpasswd -a $USER docker`
- Перелогиниться/перезагрузится
- Добавить авто-запуск docker'а `sudo systemctl enable docker`

```
$ ./bin/develop.sh
```

# Запуск фронтенда:

# frontend

```
$ cd frontend
$ npm install && npm start
```
http://localhost:3000

# backend

Install package manager:
```
$ curl https://glide.sh/get | sh
```

For OSX users
```
$ brew install glide
```
For ubuntu users
```
$ sudo add-apt-repository ppa:masterminds/glide && sudo apt-get update
$ sudo apt-get install glide
```

Install packages:

    $ cd backend && glide install

Create db:

    psql && CREATE DATABASE hmachine

Run migrations:

    $ cd backend && go run migrate.go

Start slack bot integration:

    $ cd backend && go run bot.go

Run server:

    $ cd backend && go run server.go
