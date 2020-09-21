FROM node:10

# Create app directory
WORKDIR consumer

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Run commands
CMD ["node", "consumer.js"]
