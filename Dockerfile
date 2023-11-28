FROM node:18-alpine

RUN mkdir -p /home/node/app/

WORKDIR /home/node/app

COPY ./index.js /home/node/app/
COPY ProyectoDP\*.* /home/node/app/

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

USER node

EXPOSE 5000

CMD [ "npm", "start" ]