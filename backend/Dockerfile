FROM node:10

# Create app directory
WORKDIR backend

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port 5000
EXPOSE 5000

# Run commands
CMD ["node", "server/index.js"]