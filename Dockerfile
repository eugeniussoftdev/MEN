FROM node:18.7.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]