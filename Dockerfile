# Use the official Node.js image from the Docker Hub
FROM node:14
# Set the working directory inside the container
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3111
CMD ["node","app.js"]
