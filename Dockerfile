# ==========================================
# Multi-stage Dockerfile for Portfolio Web
# ==========================================

# Stage 1: Build the React Application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for efficient caching
COPY website/package.json website/package-lock.json ./
RUN npm ci

# Copy source code and build
COPY website/ ./
RUN npm run build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine

# Copy built assets to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY website/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
