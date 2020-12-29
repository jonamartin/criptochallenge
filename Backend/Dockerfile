FROM node:14.15.3
WORKDIR /app
COPY ./package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY ./bin ./bin/
COPY ./controllers ./controllers/
COPY ./models ./models/
COPY ./routes ./routes/
COPY ./app.js ./
EXPOSE 80
CMD [ "npm", "start" ]