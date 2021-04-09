FROM node:alpine3.13

WORKDIR /node/src

COPY /build /node/src/app

RUN npm install -g serve

CMD ["serve", "-s", "app", "-l", "3001"]