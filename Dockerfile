FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "install"]

CMD ["npm", "run", "start"]