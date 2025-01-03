docker app.js

// app.js
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Dockerized Node.js Application on a new port!");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

--------------------------------------------------------------------------------------------------------------------------------

# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose the new port
EXPOSE 4000

# Command to run the application
CMD ["node", "app.js"]

--------------------------------------------------------------------------------------------------------------------------------------
for docker java

# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jdk-slim
# Set the working directory inside the container
WORKDIR /app
# Copy the current directory contents into the container at /app
COPY . .
# Compile the Java program
RUN javac Sample.java
# Command to run the program
CMD ["java", "Sample"]
