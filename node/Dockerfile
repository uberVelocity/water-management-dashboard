FROM node:10

# Create app directory
WORKDIR node

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Run commands
CMD ["node", "kafka.js"]