FROM node:latest

WORKDIR /task-manager-app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]