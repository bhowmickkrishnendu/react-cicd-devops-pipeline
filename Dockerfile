# Dockerfile
# Base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy source files
COPY ui/package*.json ./
RUN npm install

COPY ui/ ./
RUN npm run build

# Serve app with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
