
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN cd client && npm install && npm run build

EXPOSE 3000

CMD ["node", "app.js"]
