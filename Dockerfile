FROM node:latest

COPY ./server /app

WORKDIR /app/server

EXPOSE 5000

ENTRYPOINT npm install && npm start