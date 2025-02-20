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

# Ensure proper networking configuration
ENV HOST=0.0.0.0
ENV PORT=4173
EXPOSE 4173

CMD ["npm", "start"] 