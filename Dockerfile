FROM node:latest

WORKDIR /app

COPY client/package.json client/package-lock.json ./

RUN npm install

COPY client/ ./

RUN npm run build

CMD ["npm", "start"] 

