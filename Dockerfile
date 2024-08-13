FROM node
RUN mkdir /opt/docker
WORKDIR /opt/docker

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
