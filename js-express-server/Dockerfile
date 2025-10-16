FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install --production
COPY . .
CMD ["node", "src/index.js"]
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]