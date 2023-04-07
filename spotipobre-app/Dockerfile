#stage 1
FROM node:latest as node
WORKDIR /app
COPY spotipobre-app/package.json ./
RUN npm install
COPY spotipobre-app ./
RUN npm run build
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/spotipobre-app /usr/share/nginx/html
