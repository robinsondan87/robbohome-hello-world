FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY app/ ./app/
ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION
EXPOSE 3000
USER node
CMD ["node", "app/index.js"]
