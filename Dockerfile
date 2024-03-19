FROM node:20-alpine as angular

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/untitled1 .

