FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 3030

CMD [ "npm", "start" ]

