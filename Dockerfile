FROM node:latest

RUN npm install -g create-react-app

COPY ./client /app

WORKDIR /app/client

EXPOSE 3000

ENTRYPOINT npm install && npm start