FROM node:13.12.0-alpine3.10
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli
COPY . /app
EXPOSE 8080
CMD ["ng", "serve", "--host", "0.0.0.0"]
