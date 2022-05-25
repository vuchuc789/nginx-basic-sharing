FROM node:16-alpine AS builder

WORKDIR /react-app

COPY . .

RUN yarn
RUN yarn build

FROM nginx:1.21.6-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /react-app/build/ /usr/share/nginx/html/
