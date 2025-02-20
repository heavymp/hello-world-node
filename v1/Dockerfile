# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start"]