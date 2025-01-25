FROM node:latest

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client/ ./

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]