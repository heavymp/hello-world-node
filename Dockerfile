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
RUN npm install --production && apk add --no-cache curl

ENV HOST=0.0.0.0
ENV PORT=4173
EXPOSE 4173

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:4173/ || exit 1

CMD ["npm", "start"] 