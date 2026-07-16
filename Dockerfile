# syntax=docker/dockerfile:1

############################
# Builder stage
############################
FROM node:24.11.1-alpine AS builder

WORKDIR /usr/src/app

# Passed in from docker-compose build.args — must be set at build time because Vite embeds it in the bundle
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY package*.json tsconfig*.json ./
RUN npm ci

COPY index.html vite.config.ts ./
COPY src ./src
COPY public ./public
RUN npm run build


############################
# Production runtime stage
############################
FROM nginx:alpine AS runner

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
