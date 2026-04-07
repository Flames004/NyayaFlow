# Use Node.js 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Expose the port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]