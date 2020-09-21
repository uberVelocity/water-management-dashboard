FROM node:10

# Create app directory
WORKDIR wacc-backend

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Run commands
CMD ["node", "server/index.js"]