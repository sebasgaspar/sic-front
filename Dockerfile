FROM node:12-alpine3.12 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g" ,"daemon off;"]
