FROM node:12

RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]