# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app


# Copy the application code to the container
COPY . .

# Install npm dependencies
RUN npm install

# Set environment variables from .env file (if you have one)
ENV MYSQL_HOST=mysql-test
ENV MYSQL_USERNAME=root
ENV MYSQL_PASSWORD=password
ENV MYSQL_DB=test
# Open port 3000
EXPOSE 8080

ENTRYPOINT [ "node" ]
# Run the application
CMD [ "index.js" ]
