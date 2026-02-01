FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY dist/angular-interaction ./dist/angular-interaction

EXPOSE 8080

CMD ["node", "dist/angular-interaction/server/server.mjs"]