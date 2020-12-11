FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3001
CMD ["node","app.js"]