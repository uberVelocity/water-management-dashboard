FROM node:10

# Create app directory
WORKDIR consumerdb

# Install app dependencies
COPY package*.json ./

# Try ndots:2
COPY resolve.conf /etc/resolve.conf

RUN npm install

# Bundle app source
COPY . .

# Run commands
CMD ["node", "consumer.js"]
