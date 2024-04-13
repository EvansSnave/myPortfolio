# Stage 1: Build Angular app
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve Angular app
FROM nginx:alpine

# COPY default.conf /ect/nginx/conf.d

COPY --from=builder /app/dist/my-portfolio/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
