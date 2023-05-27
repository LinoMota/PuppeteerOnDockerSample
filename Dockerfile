FROM node:18-alpine

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

RUN yarn add puppeteer@13.5.0

RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads /app \
    && chown -R pptruser:pptruser /home/pptruser \
    && chmod -R 755 /app \
    && chown -R pptruser:pptruser /app


WORKDIR /app

COPY package*.json ./
RUN npm i


COPY index.js .

CMD [  "npm", "start" ]
