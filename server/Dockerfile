FROM node:latest
WORKDIR /src
COPY package.json /src
RUN npm install
RUN npm install express cors
COPY . /src
EXPOSE 3001
CMD node index.js