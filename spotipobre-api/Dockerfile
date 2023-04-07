FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY spotipobre-api/package.json ./
COPY spotipobre-api/app.js ./
COPY spotipobre-api/* ./
COPY spotipobre-api/src/routes.js ./
USER root

RUN npm install
COPY --chown=node:node . .
CMD [ "node", "app.js" ]