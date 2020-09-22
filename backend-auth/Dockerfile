FROM node:10

# Create app directory
WORKDIR backend-auth

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port 5000
EXPOSE 4000

# Run commands
CMD ["node", "server/server.js"]