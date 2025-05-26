# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run generate

# Production stage
FROM nginx:alpine

# Copy built static files to nginx serve directory
COPY --from=build /app/.output/public /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 3002

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
