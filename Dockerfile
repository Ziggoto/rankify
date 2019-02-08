FROM node:11.9-alpine

COPY . /app

WORKDIR /app

RUN npm install && cd client && npm install && npm run build && cd ..

EXPOSE 8888

CMD ["npm", "start"]
