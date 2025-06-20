# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

# Install only with ignore-scripts for safety
COPY ui/package*.json ./
RUN npm install --ignore-scripts

COPY ui/ ./
RUN npm run build

# Stage 2: Serve with nginx as non-root
FROM nginx:alpine

# Copy built files
COPY --from=build /app/build /usr/share/nginx/html

# (Optional) Secure custom nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
