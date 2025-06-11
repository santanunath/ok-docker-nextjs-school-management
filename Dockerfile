FROM node:22-alpine

WORKDIR /myapp

COPY package*.json ./

RUN npm install

COPY .  .

RUN npm run build

#EXPOSE 3000

