FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache cairo-dev pango-dev jpeg-dev giflib-dev
RUN apk add --no-cache python3
RUN apk add --no-cache make
RUN apk add --no-cache python3
RUN apk add --no-cache build-base
RUN npm install
COPY . .
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "run", "dev"]
