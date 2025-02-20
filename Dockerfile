# Build stage
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --production

# Add this to ensure the server listens on all interfaces
ENV HOST=0.0.0.0
EXPOSE 4173
CMD ["npm", "start"] 