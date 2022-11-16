FROM node:16

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npx tsc

RUN npx prisma generate

CMD [ "node", "dist/main.js" ]
