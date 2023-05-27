FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn add puppeteer

COPY package*.json ./

COPY index.js .

RUN ls

RUN npm i --save

EXPOSE 3000

CMD [  "node" , "index.js" ]
